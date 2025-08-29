const twilio = require("twilio");

const client = twilio(
  "AC46c15cc5db07935af2e72fa697f8c335",
  "b6e105e3ed7e8e3b2023e9d9a4ba438c"
);

const FROM = "whatsapp:+14155238886";
const TO   = "whatsapp:+212661724956";

async function sendVendorNotification(message) {
  if (!message) return;
  try {
    const result = await client.messages.create({
      body: message,
      from: FROM,
      to: TO,
    });
    console.log("Twilio msg sid:", result.sid);
    return result;
  } catch (err) {
    console.error("sendVendorNotification error:", err);
    throw err;
  }
}

module.exports = { sendVendorNotification };
