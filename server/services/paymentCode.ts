interface PaymentCode {
  code: string;
  orderId: string;
  amount: number;
  customerInfo: {
    name: string;
    surname: string;
    phone: string;
    email: string;
  };
  expiresAt: Date;
  status: "pending" | "paid" | "expired" | "cancelled";
  createdAt: Date;
}

// Stockage temporaire en mémoire (en production, utiliser une base de données)
const paymentCodes = new Map<string, PaymentCode>();

export class PaymentCodeService {
  // Générer un code unique de 8 caractères alphanumériques
  private generateCode(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  // Créer un nouveau code de paiement
  createPaymentCode(
    orderId: string,
    amount: number,
    customerInfo: PaymentCode["customerInfo"],
  ): PaymentCode {
    let code = this.generateCode();

    // S'assurer que le code est unique
    while (paymentCodes.has(code)) {
      code = this.generateCode();
    }

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 heures

    const paymentCode: PaymentCode = {
      code,
      orderId,
      amount,
      customerInfo,
      expiresAt,
      status: "pending",
      createdAt: now,
    };

    paymentCodes.set(code, paymentCode);

    console.log(`💳 Code de paiement créé: ${code} pour commande ${orderId}`);

    return paymentCode;
  }

  // Récupérer un code de paiement
  getPaymentCode(code: string): PaymentCode | null {
    const paymentCode = paymentCodes.get(code);

    if (!paymentCode) {
      return null;
    }

    // Vérifier si le code a expiré
    if (
      new Date() > paymentCode.expiresAt &&
      paymentCode.status === "pending"
    ) {
      paymentCode.status = "expired";
      paymentCodes.set(code, paymentCode);
    }

    return paymentCode;
  }

  // Confirmer un paiement
  confirmPayment(code: string): boolean {
    const paymentCode = paymentCodes.get(code);

    if (!paymentCode || paymentCode.status !== "pending") {
      return false;
    }

    if (new Date() > paymentCode.expiresAt) {
      paymentCode.status = "expired";
      paymentCodes.set(code, paymentCode);
      return false;
    }

    paymentCode.status = "paid";
    paymentCodes.set(code, paymentCode);

    console.log(`✅ Paiement confirmé pour le code: ${code}`);

    return true;
  }

  // Annuler un code de paiement
  cancelPaymentCode(code: string): boolean {
    const paymentCode = paymentCodes.get(code);

    if (!paymentCode || paymentCode.status !== "pending") {
      return false;
    }

    paymentCode.status = "cancelled";
    paymentCodes.set(code, paymentCode);

    console.log(`❌ Code de paiement annulé: ${code}`);

    return true;
  }

  // Nettoyer les codes expirés (à exécuter périodiquement)
  cleanupExpiredCodes(): number {
    const now = new Date();
    let cleanedCount = 0;

    for (const [code, paymentCode] of paymentCodes.entries()) {
      if (paymentCode.status === "pending" && now > paymentCode.expiresAt) {
        paymentCode.status = "expired";
        paymentCodes.set(code, paymentCode);
        cleanedCount++;
      }
    }

    console.log(`🧹 ${cleanedCount} codes de paiement expirés nettoyés`);

    return cleanedCount;
  }

  // Obtenir le temps restant en millisecondes
  getTimeRemaining(code: string): number {
    const paymentCode = paymentCodes.get(code);

    if (!paymentCode || paymentCode.status !== "pending") {
      return 0;
    }

    const now = new Date();
    const remaining = paymentCode.expiresAt.getTime() - now.getTime();

    return Math.max(0, remaining);
  }

  // Formater les instructions de paiement
  formatPaymentInstructions(paymentCode: PaymentCode): string {
    const timeRemaining = this.getTimeRemaining(paymentCode.code);
    const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutesRemaining = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
    );

    return `💳 *INSTRUCTIONS DE PAIEMENT*

🔢 *Code de paiement :* ${paymentCode.code}
💰 *Montant :* ${paymentCode.amount.toFixed(2)} MAD
⏰ *Expire dans :* ${hoursRemaining}h ${minutesRemaining}min

📍 *AGENCES ACCEPTÉES :*
• CashPlus
• WafaCash  
• Barid Cash (Poste Maroc)
• AttijariCash

📋 *PROCÉDURE :*
1. Rendez-vous dans une agence
2. Donnez le code : ${paymentCode.code}
3. Payez ${paymentCode.amount.toFixed(2)} MAD
4. Conservez votre reçu

⚠️ *IMPORTANT :*
• Code valable 24h uniquement
• Paiement intégral requis
• Commande annulée si non payé à temps

Client : ${paymentCode.customerInfo.surname} ${paymentCode.customerInfo.name}
Téléphone : ${paymentCode.customerInfo.phone}`;
  }

  // Obtenir les statistiques des codes
  getStats(): {
    total: number;
    pending: number;
    paid: number;
    expired: number;
    cancelled: number;
  } {
    const stats = {
      total: paymentCodes.size,
      pending: 0,
      paid: 0,
      expired: 0,
      cancelled: 0,
    };

    for (const paymentCode of paymentCodes.values()) {
      stats[paymentCode.status]++;
    }

    return stats;
  }
}

// Export d'une instance singleton
export const paymentCodeService = new PaymentCodeService();

// Nettoyer automatiquement les codes expirés toutes les heures
setInterval(
  () => {
    paymentCodeService.cleanupExpiredCodes();
  },
  60 * 60 * 1000,
);
