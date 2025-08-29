import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, MessageCircle, X, ShoppingCart } from "lucide-react";
import { CartItem } from "../contexts/CartContext";
import { ColorPatternCustomizer } from "./ColorPatternCustomizer";
import { patterns } from "../data/products";

interface CartCustomizationProps {
  cartItems: CartItem[];
  onClose: () => void;
}

export function CartCustomization({ cartItems, onClose }: CartCustomizationProps) {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: ""
  });
  
  // Liste des produits disponibles pour personnalisation
  const availableProducts = [
    { id: "qassria", name: "Qassria", emoji: "🏺" },
    { id: "tajine", name: "Tajine", emoji: "🥘" },
    { id: "assiette", name: "Assiette", emoji: "🍽️" },
    { id: "khmissa", name: "Khmissa", emoji: "🪬" },
    { id: "fraq_a", name: "Fraq'a", emoji: "🫙" },
    { id: "soupiere", name: "Soupière", emoji: "🥄" },
    { id: "bols", name: "Bols", emoji: "🥣" },
    { id: "tasses", name: "Tasses", emoji: "☕" },
    { id: "gourde", name: "Gourde", emoji: "🍶" },
    { id: "verres", name: "Verres", emoji: "🥛" }
  ];

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedPattern, setSelectedPattern] = useState("bleu_traditionnel");
  const [customNotes, setCustomNotes] = useState("");

  const handleProductToggle = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const sendWhatsAppMessage = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      alert("Veuillez remplir votre nom et téléphone");
      return;
    }

    if (selectedProducts.length === 0) {
      alert("Veuillez sélectionner au moins un produit à personnaliser");
      return;
    }

    const selectedProductNames = selectedProducts
      .map(id => availableProducts.find(p => p.id === id))
      .filter(Boolean)
      .map(p => `${p!.emoji} ${p!.name}`)
      .join(", ");

    // Obtenir le pattern sélectionné
    const selectedPatternObj = patterns.find(p => p.id === selectedPattern);

    let message = `🎨 *DEMANDE DE PERSONNALISATION - Belkhadir Poterie*\n\n`;
    message += `👤 *Client:* ${customerInfo.name}\n`;
    message += `📞 *Téléphone:* ${customerInfo.phone}\n\n`;
    message += `🏺 *PRODUITS À PERSONNALISER:*\n`;
    message += `${selectedProductNames}\n\n`;

    // Ajout des préférences de personnalisation
    message += `🎨 *PRÉFÉRENCES DE PERSONNALISATION:*\n`;
    if (selectedPatternObj) {
      message += `• *Couleur/Motif préféré:* ${selectedPatternObj.name}\n`;
      message += `• *Description:* ${selectedPatternObj.description}\n`;
    }
    if (customNotes.trim()) {
      message += `• *Notes spéciales:* ${customNotes.trim()}\n`;
    }
    message += `\n`;

    // Ajout des informations sur les articles déjà dans le panier
    if (cartItems.length > 0) {
      message += `🛒 *ARTICLES DÉJÀ DANS LE PANIER:*\n`;
      cartItems.forEach((item, index) => {
        message += `${index + 1}. ${item.variantName} - ${item.quantity}x - ${item.variantPrice} MAD\n`;
      });
      message += `\n💰 *Total panier:* ${cartItems.reduce((total, item) => total + (item.variantPrice * item.quantity), 0).toFixed(2)} MAD\n\n`;
    }

    message += `💡 *Ma demande:*\n`;
    message += `Je souhaite personnaliser les créations sélectionnées selon mes préférences ci-dessus. Merci de me contacter pour discuter des détails et des prix.\n\n`;
    message += `📅 Demande envoyée le ${new Date().toLocaleString("fr-FR")}\n\n`;
    message += `🏺 *Belkhadir Poterie* - Artisanat traditionnel marocain`;

    const whatsappUrl = `https://wa.me/212675202336?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 flex items-center">
                <ShoppingCart className="w-8 h-8 mr-3" />
                🎨 Personnalisation
              </h2>
              <p className="text-gray-600 mt-2">
                Sélectionnez les créations que vous souhaitez personnaliser
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Informations Client */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                👤 Votre nom *
              </label>
              <input
                type="text"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Votre nom complet"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                📞 Votre téléphone *
              </label>
              <input
                type="tel"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="+212 6XX XXX XXX"
              />
            </div>
          </div>

          {/* Sélection des produits */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">
              🏺 Sélectionnez vos créations à personnaliser
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {availableProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductToggle(product.id)}
                  className={`relative p-4 rounded-xl border-2 transition-all text-center hover:shadow-lg ${
                    selectedProducts.includes(product.id)
                      ? "border-green-600 bg-green-50 shadow-lg"
                      : "border-gray-300 hover:border-amber-400 hover:bg-amber-50"
                  }`}
                >
                  <div className="text-4xl mb-2">{product.emoji}</div>
                  <div className="font-medium text-gray-900">{product.name}</div>
                  
                  {selectedProducts.includes(product.id) && (
                    <div className="absolute -top-2 -right-2">
                      <CheckCircle className="w-6 h-6 text-green-600 bg-white rounded-full" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {selectedProducts.length > 0 && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">
                  ✅ Produits sélectionnés ({selectedProducts.length})
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProducts.map(productId => {
                    const product = availableProducts.find(p => p.id === productId);
                    return product ? (
                      <span
                        key={productId}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                      >
                        {product.emoji} {product.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Articles déjà dans le panier */}
          {cartItems.length > 0 && (
            <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                🛒 Articles déjà dans votre panier
              </h3>
              <div className="space-y-2">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="text-blue-800">
                      {item.variantName} (x{item.quantity})
                    </span>
                    <span className="font-medium text-blue-900">
                      {(item.variantPrice * item.quantity).toFixed(2)} MAD
                    </span>
                  </div>
                ))}
                <div className="border-t border-blue-200 pt-2 flex justify-between font-bold text-blue-900">
                  <span>Total panier</span>
                  <span>{cartItems.reduce((total, item) => total + (item.variantPrice * item.quantity), 0).toFixed(2)} MAD</span>
                </div>
              </div>
            </div>
          )}

          {/* Information sur la personnalisation */}
          <div className="mb-8 p-6 bg-amber-100 rounded-xl border border-amber-200">
            <h3 className="text-lg font-semibold text-amber-900 mb-3">
              ℹ️ À propos de la personnalisation
            </h3>
            <ul className="space-y-2 text-sm text-amber-800">
              <li>🎨 <strong>Couleurs :</strong> Choisissez parmi nos 12 couleurs traditionnelles marocaines</li>
              <li>🖼️ <strong>Motifs :</strong> Motifs berbères, géométriques, floraux, etc.</li>
              <li>📏 <strong>Tailles :</strong> Dimensions sur mesure selon vos besoins</li>
              <li>⏰ <strong>Délai :</strong> 20-45 jours de fabrication artisanale</li>
              <li>💰 <strong>Prix :</strong> Devis personnalisé selon vos demandes</li>
            </ul>
          </div>

          {/* Personnalisation couleurs et motifs */}
          {selectedProducts.length > 0 && (
            <div className="mb-8">
              <ColorPatternCustomizer
                availablePatterns={["tous"]}
                selectedPattern={selectedPattern}
                onPatternChange={setSelectedPattern}
              />
            </div>
          )}

          {/* Notes de personnalisation */}
          {selectedProducts.length > 0 && (
            <div className="mb-8">
              <label className="block text-lg font-semibold text-amber-900 mb-3">
                📝 Notes de personnalisation (optionnel)
              </label>
              <textarea
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Décrivez vos souhaits spécifiques : tailles particulières, couleurs préférées, motifs personnalisés, demandes spéciales..."
              />
              <p className="text-sm text-gray-600 mt-2">
                Exemple : "Je souhaiterais des motifs plus fins", "Préférence pour les tons chauds", "Inscription personnalisée", etc.
              </p>
            </div>
          )}

          {/* Bouton WhatsApp */}
          <div className="flex justify-center">
            <button
              onClick={sendWhatsAppMessage}
              disabled={selectedProducts.length === 0}
              className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Envoyer ma demande via WhatsApp
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-6 text-center">
            * L'artisan Idriss Belkhadir vous contactera rapidement pour discuter de vos besoins de personnalisation
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
