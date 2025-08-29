import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react";
import { Layout } from "../components/Layout";
import { SizeSelector } from "../components/SizeSelector";
import {
  products,
  calculateVariantPrice,
  getVariantImage,
  getAvailablePatternsForProduct,
  getAvailablePatternsForProductVariant,
  getPatternById,
} from "../data/products";
import { ColorPatternCustomizer } from "../components/ColorPatternCustomizer";
import { useCart } from "../contexts/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState("");
  const [selectedPatternId, setSelectedPatternId] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const product = products.find((p) => p.id === parseInt(id!));

  // Initialiser la sélection par défaut avec useEffect
  useEffect(() => {
    if (product && !selectedSizeId && product.sizeVariants.length > 0) {
      setSelectedSizeId(product.sizeVariants[0].id);
    }
    if (product && !selectedPatternId) {
      const availablePatterns = getAvailablePatternsForProduct(product, selectedSizeId);
      if (availablePatterns.length > 0) {
        setSelectedPatternId(availablePatterns[0].id);
      }
    }
  }, [product, selectedSizeId, selectedPatternId]);

  if (!product) {
    return (
      <Layout>
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Produit introuvable
            </h2>
            <Link
              to="/"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const currentPrice = calculateVariantPrice(product, selectedSizeId);
  const selectedVariant = product.sizeVariants.find(v => v.id === selectedSizeId);
  const productName = selectedVariant && selectedVariant.size !== "Standard" && selectedVariant.size !== "Unique"
    ? `${product.name} ${selectedVariant.size}`
    : product.name;

  const handleAddToCart = () => {
    if (!selectedSizeId) {
      alert("Veuillez sélectionner une taille");
      return;
    }

    if (!selectedPatternId) {
      alert("Veuillez sélectionner une couleur/motif");
      return;
    }

    setIsAdding(true);

    // Ajouter au panier avec taille et pattern
    addItem(
      product,
      quantity,
      selectedSizeId,
      selectedPatternId,
      currentPrice,
      productName,
    );

    // Animation de feedback
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour aux produits
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl bg-gray-50">
                <img
                  src={getVariantImage(product, selectedSizeId)}
                  alt={productName}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Product Configuration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Product Header */}
              <div>
                <h1 className="text-4xl font-bold text-amber-900 mb-4">
                  {product.name}
                </h1>
                <div className="text-3xl font-bold text-amber-700 mb-2">
                  {currentPrice.toFixed(2)} MAD
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Prix de base : {product.basePrice.toFixed(2)} MAD
                </p>

                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mb-6">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    📝 Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Size Selection */}
              {product.sizeVariants.length > 1 && selectedSizeId && (
                <SizeSelector
                  sizeVariants={product.sizeVariants}
                  selectedSizeId={selectedSizeId}
                  onSizeChange={setSelectedSizeId}
                  productName={product.name}
                />
              )}

              {/* Sélection des couleurs et motifs */}
              <ColorPatternCustomizer
                availablePatterns={getAvailablePatternsForProductVariant(product.id, selectedSizeId)}
                selectedPattern={selectedPatternId}
                onPatternChange={setSelectedPatternId}
              />

              {/* Quantity Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  📦 Quantité
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 rounded-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-semibold text-gray-900 min-w-12 text-center">
                    {quantity} pc{quantity > 1 ? "s" : ""}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 rounded-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Summary */}
              {selectedSizeId && selectedPatternId && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">
                    ✨ Récapitulatif de votre choix
                  </h3>
                  <div className="space-y-2 text-green-800">
                    <p>
                      <strong>Produit :</strong> {productName}
                    </p>
                    <p>
                      <strong>Catégorie :</strong> {product.category}
                    </p>
                    {selectedVariant && (
                      <p>
                        <strong>Taille :</strong> {selectedVariant.size}
                        {selectedVariant.dimensions && ` (${selectedVariant.dimensions})`}
                      </p>
                    )}
                    {getPatternById(selectedPatternId) && (
                      <p>
                        <strong>Couleur/Motif :</strong> {getPatternById(selectedPatternId)!.name}
                      </p>
                    )}
                    <p>
                      <strong>Quantité :</strong> {quantity} pièce
                      {quantity > 1 ? "s" : ""}
                    </p>
                    <div className="pt-2 border-t border-green-300">
                      <p className="text-xl font-bold text-green-900">
                        Total : {(currentPrice * quantity).toFixed(2)} MAD
                      </p>
                      <p className="text-sm text-green-700">
                        (hors frais de livraison CTM)
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={isAdding || !selectedSizeId || !selectedPatternId}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 px-8 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-6 h-6 mr-3" />
                {isAdding
                  ? "✅ Ajouté au panier !"
                  : !selectedSizeId
                    ? "Sélectionnez une taille"
                    : !selectedPatternId
                      ? "Sélectionnez une couleur/motif"
                      : "🛒 Ajouter au panier"}
              </motion.button>

              {/* Artisan Information */}
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  🏺 Artisanat Authentique
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Cette pièce unique sera façonnée à la main par l'artisan
                  Idriss Belkhadir dans le motif traditionnel de votre choix.
                  Chaque création porte en elle l'âme et le savoir-faire
                  ancestral transmis de génération en génération à Safi.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
