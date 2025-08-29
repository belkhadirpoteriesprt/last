// netlify/functions/submit-order.js
const { sendVendorEmail } = require('./util/email');
const { sendVendorNotification } = require('./util/whatsapp');

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      },
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "Method Not Allowed" });
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const order = data.order || data;
    const message =
      `🧾 Nouvelle commande` +
      `\nNom: ${order.name || "-"}\nTéléphone: ${order.phone || "-"}` +
      `\nArticles: ${Array.isArray(order.items) ? order.items.map(i => i.name || i).join(", ") : "-"}` +
      (order.total ? `\nTotal: ${order.total}` : "") +
      (order.notes ? `\nNotes: ${order.notes}` : "");

    // Send WhatsApp
    try { await sendVendorNotification(message); } catch (e) { console.error("whatsapp error", e); }

    // Send Email (optional)
    try { await sendVendorEmail("Nouvelle commande", message); } catch (e) { console.error("email error", e); }

    return json(200, { ok: true });
  } catch (e) {
    console.error(e);
    return json(500, { ok: false, error: e.message });
  }
};
