
export default async function handler(req, res) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

  if (!BOT_TOKEN) {
    return res.status(500).json({ error: 'Server: Bot token not configured' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { initData, backupData, filename } = req.body;

    if (!initData || !backupData) {
      return res.status(400).json({ error: 'Missing data' });
    }

    // 1. Validate User & Get ID
    const urlParams = new URLSearchParams(initData);
    const userJson = urlParams.get('user');
    
    if (!userJson) {
      return res.status(401).json({ error: 'Invalid initData' });
    }

    const user = JSON.parse(userJson);
    const chatId = user.id;

    // 2. Construct Multipart Body Manually (to avoid external dependencies in Serverless function)
    const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
    const crlf = '\r\n';
    
    const fileContent = backupData;
    const caption = "💾 *Автоматический Бэкап*\n\nЭтот файл содержит ваш прогресс в VocabMaster. Если приложение перестанет работать, используйте этот код в меню 'Профиль -> Данные'.";

    let payload = '';
    
    // Field: chat_id
    payload += `--${boundary}${crlf}`;
    payload += `Content-Disposition: form-data; name="chat_id"${crlf}${crlf}`;
    payload += `${chatId}${crlf}`;

    // Field: caption
    payload += `--${boundary}${crlf}`;
    payload += `Content-Disposition: form-data; name="caption"${crlf}${crlf}`;
    payload += `${caption}${crlf}`;

    // Field: parse_mode
    payload += `--${boundary}${crlf}`;
    payload += `Content-Disposition: form-data; name="parse_mode"${crlf}${crlf}`;
    payload += `Markdown${crlf}`;

    // File: document
    payload += `--${boundary}${crlf}`;
    payload += `Content-Disposition: form-data; name="document"; filename="${filename || 'backup.txt'}"${crlf}`;
    payload += `Content-Type: text/plain${crlf}${crlf}`;
    payload += `${fileContent}${crlf}`;
    
    // End
    payload += `--${boundary}--${crlf}`;

    // 3. Send to Telegram
    const tgResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
      },
      body: payload
    });

    const result = await tgResponse.json();

    if (result.ok) {
      return res.status(200).json({ success: true });
    } else {
      console.error("Telegram API Error:", result);
      return res.status(500).json({ error: 'Failed to send backup', details: result });
    }

  } catch (error) {
    console.error('Backup Server Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
