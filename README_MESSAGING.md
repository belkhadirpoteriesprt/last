# 📬 Messaging Setup (WhatsApp + Email)

This project is now cleaned and ready for deployment with environment-based configuration.

## 1) Environment variables
Copy `.env.example` to `.env` and fill your values:

```
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
VENDOR_WHATSAPP_TO=whatsapp:+2126XXXXXXX

EMAIL_USER=you@gmail.com
EMAIL_PASS=your_gmail_app_password
VENDOR_EMAIL=vendor@example.com
```

> For Gmail, create an **App Password** (not your normal password). Or set `EMAIL_HOST/EMAIL_PORT/EMAIL_SECURE` to use any SMTP.

## 2) Local test
```
npm install -g netlify-cli
npm install
netlify dev
```

Send a test request:
```
curl -X POST http://localhost:8888/.netlify/functions/submit-order \  -H "Content-Type: application/json" \  -d '{ "name": "Client", "phone": "+212600000000", "items": ["Vase A", "Bowl B"], "total": "250 MAD" }'
```

## 3) Deploy to Netlify
- Push this repo (without real secrets).
- In Netlify dashboard → **Site settings → Environment variables**, add all variables from `.env`.
- Deploy. Your endpoint will be: `/.netlify/functions/submit-order`.

Both WhatsApp and Email will try to send for each order; if any env is missing, that channel is **skipped** safely.
