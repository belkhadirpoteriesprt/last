// Email service disabled for prototype
export async function sendVendorEmail(subject: string, text: string) {
  console.log("📧 Email disabled. Would have sent:", subject, text);
  return { disabled: true };
}
