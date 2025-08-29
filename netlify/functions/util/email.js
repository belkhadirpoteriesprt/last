// Email disabled for prototype
async function sendVendorEmail(subject, text) {
  console.log("📧 Email disabled. Would have sent:", subject, text);
  return { disabled: true };
}
module.exports = { sendVendorEmail };
