import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  Loader2,
  Clock,
  Truck,
} from "lucide-react";
import type { CartItem } from "../contexts/CartContext";
import { useCart } from "../contexts/CartContext";
import { getPatternById } from "../data/products";

interface OrderFormProps {
  cartItems: CartItem[];
  total: number;
  onClose: () => void;
}

export function OrderForm({ cartItems, total, onClose }: OrderFormProps) {
  const { clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
     "",
    address: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare order data for backend with variants
      const orderData = {
        items: cartItems.map((item) => {
          const pattern = getPatternById(item.patternId);
          const sizeVariant = item.product.sizeVariants.find(
            (v) => v.id === item.sizeVariantId,
          );

          return {
            product: {
              name: item.variantName,
              price: item.variantPrice,
              baseProduct: item.product.name,
              category: item.product.category,
            },
            quantity: item.quantity,
            variantDetails: {
              sizeVariantId: item.sizeVariantId,
              sizeName: sizeVariant?.size || "Standard",
              sizeDescription: sizeVariant?.description || "",
              patternId: item.patternId,
              patternName: pattern?.name || "Motif traditionnel",
              patternColors: pattern?.colors || [],
            },
            total: item.variantPrice * item.quantity,
          };
        }),
        orderTotal: total,
        customer: formData,
      };

      console.log("Submitting order with variants:", orderData);

      // Send to backend API
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      // Handle response more carefully to avoid body stream issues
      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error("Failed to parse response:", parseError);
        throw new Error("Erreur de communication avec le serveur");
      }

      if (!response.ok) {
        console.error("Server error:", result);
        throw new Error(
          result?.error || `Erreur serveur (${response.status})`,
        );
      }

      console.log("Order submitted successfully:", result);
      setIsSubmitted(true);

      // Clear cart and auto close after 15 seconds
      setTimeout(() => {
        clearCart();
        onClose();
        setIsSubmitted(false);
      }, 15000);
    } catch (error) {
      console.error("Error submitting order:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Erreur lors de l'envoi de la commande",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  🎨 Finaliser la Commande Personnalisée
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-amber-800 rounded-full transition-colors"
                  disabled={isSubmitting}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Résumé de votre commande ({totalItems} article
                {totalItems > 1 ? "s" : ""})
              </h3>
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {cartItems.map((item) => {
                  const pattern = getPatternById(item.patternId);
                  const sizeVariant = item.product.sizeVariants.find(
                    (v) => v.id === item.sizeVariantId,
                  );

                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={item.product.image}
                            alt={item.variantName}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          {/* Overlay couleur du motif */}
                          {pattern && (
                            <div
                              className="absolute inset-0 rounded-lg opacity-20 mix-blend-multiply"
                              style={{
                                backgroundColor: pattern.primaryColor,
                              }}
                            />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">
                            {item.variantName}
                          </h4>
                          <div className="text-xs text-gray-600 space-y-1">
                            {sizeVariant && <div>📏 {sizeVariant.size}</div>}
                            {pattern && (
                              <div className="flex items-center space-x-1">
                                <div
                                  className="w-3 h-3 rounded-full border border-gray-300"
                                  style={{
                                    backgroundColor: pattern.primaryColor,
                                  }}
                                />
                                <span>🎨 {pattern.name}</span>
                              </div>
                            )}
                            <div>× {item.quantity}</div>
                          </div>
                        </div>
                      </div>
                      <span className="font-semibold text-amber-700">
                        {(item.variantPrice * item.quantity).toFixed(2)} MAD
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    Total (hors frais de livraison)
                  </span>
                  <span className="text-xl font-bold text-amber-700">
                    {total.toFixed(2)} MAD
                  </span>
                </div>
              </div>
            </div>

            {/* Customer Information Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Informations de livraison
              </h3>

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">{submitError}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Adresse de livraison complète *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none disabled:opacity-50"
                  placeholder="Adresse complète, ville, code postal..."
                />
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>🎨 Variantes Personnalisées:</strong> Chaque pièce
                  sera fabriquée selon vos spécifications exactes (taille et
                  motif). <strong>📍 Livraison:</strong> Uniquement au Maroc.
                  Paiement intégral requis. Nous vous contacterons rapidement.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  `🎨 Confirmer la Commande Personnalisée (${total.toFixed(2)} MAD)`
                )}
              </button>
            </form>
          </>
        ) : (
          /* Success Message - Detailed */
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                🎨 Commande Personnalisée Confirmée !
              </h3>
              <p className="text-gray-600">
                Merci pour votre confiance. Votre commande avec variantes
                personnalisées a été enregistrée avec succès.
              </p>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Voici le récapitulatif :
              </h4>
              <div className="space-y-2 text-sm">
                {cartItems.map((item, index) => {
                  const pattern = getPatternById(item.patternId);
                  const sizeVariant = item.product.sizeVariants.find(
                    (v) => v.id === item.sizeVariantId,
                  );

                  return (
                    <div key={item.id} className="flex justify-between">
                      <span>
                        {index + 1}. {item.variantName} ×{item.quantity}
                      </span>
                      <span className="font-medium">
                        {(item.variantPrice * item.quantity).toFixed(2)} MAD
                      </span>
                    </div>
                  );
                })}
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Montant total (hors frais de livraison)</span>
                  <span>{total.toFixed(2)} MAD</span>
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                🚚 Informations importantes sur la livraison
              </h4>
              <div className="text-sm text-blue-800 space-y-2">
                <p className="flex items-start">
                  <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>🎨 Fabrication personnalisée :</strong> Chaque pièce
                    sera créée dans votre variante exacte. Le délai de livraison
                    varie entre <strong>20 et 45 jours</strong> à compter de la
                    confirmation de commande.
                  </span>
                </p>
                <div className="ml-6">
                  <p>
                    <strong>📦 Livraison assurée via CTM :</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Livraison en agence CTM ou à domicile</li>
                    <li>Frais de livraison non inclus dans le prix affiché</li>
                    <li>
                      Les frais de transport sont entièrement à la charge de
                      l'acheteur, à régler lors de la réception du colis
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-amber-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-amber-900 mb-3">
                ℹ️ Besoin d'aide ? Une question ? Un doute ?
              </h4>
              <p className="text-sm text-amber-800 mb-2">
                👉 Une page d'assistance est disponible en bas du site :
              </p>
              <p className="text-sm text-amber-800">
                Cliquez sur <strong>Aide / Help</strong> pour accéder à nos
                coordonnées complètes.
              </p>
            </div>

            {/* Status */}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                ✅ Votre commande personnalisée a été transmise par WhatsApp à
                notre équipe.
              </p>
              <p className="text-sm text-gray-500">
                📞 Nous vous contacterons très bientôt pour finaliser les
                détails de fabrication et de livraison.
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
