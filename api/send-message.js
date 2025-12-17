
export default async function handler(req, res) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

  if (!BOT_TOKEN) {
    return res.status(500).json({ error: 'Server: Bot token missing' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId, text } = req.body;

  if (!userId || !text) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: userId,
        text: text,
        parse_mode: 'HTML'
      }),
    });

    const result = await response.json();

    if (result.ok) {
      return res.status(200).json({ success: true });
    } else {
      console.error('Telegram API Error:', result);
      // Handle the case where user hasn't started the bot
      if (result.description?.includes('chat not found') || result.description?.includes('bot was blocked')) {
          return res.status(400).json({ error: 'Пользователь не запустил бота или заблокировал его.' });
      }
      return res.status(500).json({ error: 'Failed to send message', details: result });
    }
  } catch (error) {
    console.error('Server Message Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
