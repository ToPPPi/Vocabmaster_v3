
// api/create-invoice.js
// This file assumes you are running a Node.js environment (like Vercel Serverless Functions)
// You need to install 'node-fetch' or use built-in fetch in Node 18+

export default async function handler(req, res) {
  // 1. Setup - Get Token from Environment Variables (NEVER hardcode in frontend)
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; 
  
  if (!BOT_TOKEN) {
    return res.status(500).json({ error: 'Bot token not configured on server' });
  }

  // 2. Define the Invoice Payload
  // For Telegram Stars, the currency MUST be 'XTR'
  const invoicePayload = {
    title: "VocabMaster Premium",
    description: "Lifetime access to all 10,000 words and AI features.",
    payload: "premium_purchase_user_" + Date.now(), // Internal ID to track purchase
    provider_token: "", // EMPTY for Telegram Stars!
    currency: "XTR",
    prices: [
      { label: "Premium Lifetime", amount: 500 } // Amount in Stars (500 Stars)
    ]
  };

  try {
    // 3. Call Telegram API 'createInvoiceLink'
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/createInvoiceLink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoicePayload),
    });

    const data = await response.json();

    if (data.ok) {
      // 4. Return the link to the frontend
      return res.status(200).json({ invoiceLink: data.result });
    } else {
      console.error('Telegram API Error:', data);
      return res.status(500).json({ error: 'Failed to create invoice link', details: data });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
