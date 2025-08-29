import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export default function Creations() {
  return (
    <Layout>
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Nos Créations Artisanales
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Découvrez la collection unique de poteries traditionnelles
              marocaines façonnées à la main par l'artisan Idriss Belkhadir.
              Chaque pièce raconte une histoire et perpétue un savoir-faire
              ancestral.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* Artisan Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              L'Art de Maître Idriss Belkhadir
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Héritier d'une tradition familiale séculaire, Idriss Belkhadir
              perpétue l'art ancestral de la poterie marocaine. Ses créations,
              façonnées selon les méthodes traditionnelles, allient beauté
              esthétique et fonctionnalité, offrant à chaque foyer un morceau
              d'authenticité marocaine.
            </p>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
}
