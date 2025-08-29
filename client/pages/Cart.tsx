import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, Palette } from "lucide-react";
import { Layout } from "../components/Layout";
import { OrderForm } from "../components/OrderForm";
import { CartCustomization } from "../components/CartCustomization";
import { useCart } from "../contexts/CartContext";
import { getPatternById } from "../data/products";

export default function Cart() {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showCustomization, setShowCustomization] = useState(false);
  const [wantCustomization, setWantCustomization] = useState(false);

  if (state.items.length === 0) {
    return (
      <Layout>
        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-amber-900 mb-8">
              🛒 Votre Panier
            </h1>
            <div className="text-center py-16">
              <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Votre panier est vide
              </h2>
              <p className="text-gray-600 mb-8">
                Découvrez nos magnifiques poteries artisanales avec variantes de
                tailles et motifs traditionnels !
              </p>
              <Link
                to="/creations"
                className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-8 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                🎨 Découvrir nos créations
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-amber-900">
              🛒 Votre Panier Personnalisé
            </h1>
            <button
              onClick={clearCart}
              className="text-gray-500 hover:text-red-600 transition-colors text-sm"
            >
              ���️ Vider le panier
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Cart Items */}
            <div className="divide-y divide-gray-200">
              {state.items.map((item, index) => {
                const pattern = getPatternById(item.patternId);
                const sizeVariant = item.product.sizeVariants.find(
                  (v) => v.id === item.sizeVariantId,
                );

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Product Image with Pattern Overlay */}
                      <div className="relative">
                        <img
                          src={item.product.image}
                          alt={item.variantName}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        {/* Overlay couleur du motif */}
                        {pattern && (
                          <div
                            className="absolute inset-0 rounded-lg opacity-30 mix-blend-multiply"
                            style={{
                              backgroundColor: pattern.primaryColor,
                            }}
                          />
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.variantName}
                        </h3>

                        {/* Variant Details */}
                        <div className="space-y-1 mb-2">
                          {sizeVariant && (
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-gray-700">
                                📏 Taille:
                              </span>
                              <span className="text-sm text-gray-600">
                                {sizeVariant.size}
                                {sizeVariant.dimensions &&
                                  ` (${sizeVariant.dimensions})`}
                              </span>
                            </div>
                          )}

                          {pattern && (
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-gray-700">
                                🎨 Motif:
                              </span>
                              <div className="flex items-center space-x-2">
                                <div
                                  className="w-4 h-4 rounded-full border border-gray-300"
                                  style={{
                                    backgroundColor: pattern.primaryColor,
                                  }}
                                />
                                <span className="text-sm text-gray-600">
                                  {pattern.name}
                                </span>
                              </div>
                            </div>
                          )}

                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-700">
                              🏷️ Catégorie:
                            </span>
                            <span className="text-sm text-gray-600">
                              {item.product.category}
                            </span>
                          </div>
                        </div>

                        <p className="text-amber-700 font-bold">
                          {item.variantPrice.toFixed(2)} MAD / pièce
                        </p>
                        <p className="text-xs text-gray-500">
                          🏺 Variante personnalisée
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 rounded-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-lg font-semibold text-gray-900 min-w-12 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 rounded-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-amber-700">
                          {(item.variantPrice * item.quantity).toFixed(2)} MAD
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors mt-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Personnalisation Section */}
            <div className="bg-amber-50 px-6 py-4 border-b border-amber-200">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="wantCustomization"
                  checked={wantCustomization}
                  onChange={(e) => setWantCustomization(e.target.checked)}
                  className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 mr-3"
                />
                <label htmlFor="wantCustomization" className="text-amber-900 font-semibold flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  🎨 Je souhaite personnaliser mes produits
                </label>
              </div>

              {wantCustomization && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white rounded-lg p-4 border border-amber-300"
                >
                  <p className="text-amber-800 mb-4">
                    Personnalisez chacun de vos produits : couleurs, motifs, tailles, et demandes spéciales.
                    Nos artisans adapteront chaque pièce selon vos souhaits !
                  </p>
                  <button
                    onClick={() => setShowCustomization(true)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg flex items-center justify-center"
                  >
                    <Palette className="w-5 h-5 mr-2" />
                    🎨 Commencer la personnalisation
                  </button>
                </motion.div>
              )}
            </div>

            {/* Cart Summary */}
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-900">
                  Total
                </span>
                <span className="text-2xl font-bold text-amber-700">
                  {state.total.toFixed(2)} MAD
                </span>
              </div>

              <div className="flex space-x-4">
                <Link
                  to="/creations"
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-semibold text-center"
                >
                  ← Continuer les achats
                </Link>
                <button
                  onClick={() => setShowOrderForm(true)}
                  className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-6 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  🎨 Passer la commande
                </button>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800 text-center">
              <strong>🎨 Variantes Personnalisées:</strong> Chaque pièce sera
              fabriquée selon vos spécifications exactes • <strong>📍</strong>{" "}
              Livraison uniquement au Maroc • Délai: 20-45 jours • Paiement
              intégral requis
            </p>
          </div>
        </div>

        {/* Customization Modal */}
        <AnimatePresence>
          {showCustomization && (
            <CartCustomization
              cartItems={state.items}
              onClose={() => setShowCustomization(false)}
            />
          )}
        </AnimatePresence>

        {/* Order Form Modal */}
        {showOrderForm && (
          <OrderForm
            cartItems={state.items}
            total={state.total}
            onClose={() => setShowOrderForm(false)}
          />
        )}
      </main>
    </Layout>
  );
}
