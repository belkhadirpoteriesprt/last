import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "../data/products";
import { getVariantImage } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Calculer le prix minimum et maximum pour l'affichage
  const prices = product.sizeVariants.map((variant) => variant.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const priceDisplay =
    minPrice === maxPrice
      ? `${minPrice.toFixed(2)} MAD`
      : `${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)} MAD`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-amber-200 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={getVariantImage(product, product.sizeVariants[0].id)}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {/* Badge de catégorie */}
        <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Affichage du prix */}
        <div className="mb-3">
          <p className="text-2xl font-bold text-amber-700">{priceDisplay}</p>
          {minPrice !== maxPrice && (
            <p className="text-sm text-gray-600">Selon taille choisie</p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Informations sur les variantes */}
        <div className="mb-4 space-y-1">
          {product.sizeVariants.length > 1 && (
            <p className="text-xs text-gray-500">
              📏 {product.sizeVariants.length} taille
              {product.sizeVariants.length > 1 ? "s" : ""} disponible
              {product.sizeVariants.length > 1 ? "s" : ""}
            </p>
          )}
          <p className="text-xs text-gray-500">
            🎨{" "}
            {product.availablePatterns.includes("tous")
              ? "12"
              : product.availablePatterns.length}{" "}
            motifs traditionnels
          </p>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="inline-block w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white text-center py-3 px-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
        >
          🎨 Personnaliser & Commander
        </Link>
      </div>
    </motion.div>
  );
}
