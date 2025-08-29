README - TWILIO & NOTIFICATIONS
================================
This project is configured to send WhatsApp notifications to the *vendor* when an order is placed.
For this prototype these Twilio credentials are embedded in the service files.

Twilio settings currently used (hardcoded for prototype):
- TWILIO_ACCOUNT_SID: AC46c15cc5db07935af2e72fa697f8c335
- TWILIO_AUTH_TOKEN : b6e105e3ed7e8e3b2023e9d9a4ba438c
- TWILIO_WHATSAPP_FROM: whatsapp:+14155238886
- VENDOR_WHATSAPP_TO: whatsapp:+212661724956

Email (optional) credentials currently used (Gmail app password style):
- EMAIL_USER: belkhadirpoteriemessagerie@gmail.com
- EMAIL_PASS: aeqc rqtf jtkq ptzt

How it works:
- Frontend sends a POST to /.netlify/functions/submit-order with JSON body containing at least:
  { "productName": "...", "quantity": 1, "customerName":"...", "email":"customer@example.tld", "phone":"+212..." }
- The Netlify function formats the order, sends a WhatsApp to VENDOR_WHATSAPP_TO (Twilio) and optionally an email to vendor.
- The backend expects "email" as the client field; there is no "TO" param required.

To change credentials:
- Edit server/services/whatsapp.ts and server/services/emailService.ts to set new hardcoded values, or
- Replace hardcoded values by reading process.env.* and provide .env on your server.

