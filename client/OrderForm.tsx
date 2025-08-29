// Minimal React/TSX Order Form (frontend)
import React, { useState } from "react";

export default function OrderForm() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = { productName, quantity, customerName, , phone };
    const res = await fetch("/.netlify/functions/submit-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const json = await res.json();
    if (json && json.ok) {
      alert("Commande envoyée — vérifie WhatsApp vendeur.");
    } else {
      alert("Erreur envoi commande.");
    }
  }

  return (
    <form onSubmit={submit} style={{maxWidth:600, margin:"0 auto"}}>
      <h2>Passer une commande</h2>
      <label>Produit<br/>
        <input value={productName} onChange={e=>setProductName(e.target.value)} required/>
      </label>
      <br/>
      <label>Quantité<br/>
        <input type="number" value={quantity} onChange={e=>setQuantity(Number(e.target.value))} min={1}/>
      </label>
      <br/>
      <label>Nom<br/>
        <input value={customerName} onChange={e=>setCustomerName(e.target.value)} required/>
      </label>
      <br/>
      <label>Email (client)<br/>
        <input type=" value={} onChange={e=>setEmail(e.target.value)} required/>
      </label>
      <br/>
      <label>Téléphone<br/>
        <input value={phone} onChange={e=>setPhone(e.target.value)} required placeholder="+212..." />
      </label>
      <br/><br/>
      <button type="submit">Envoyer la commande</button>
    </form>
  );
}
