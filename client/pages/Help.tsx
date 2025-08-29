import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Truck, HelpCircle } from "lucide-react";
import { Layout } from "../components/Layout";

export default function Help() {
  return (
    <Layout>
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 mb-8 shadow-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F58adbc6721294870bd452009a016663f?format=webp&width=800"
                alt="Belkhadir Poterie Logo"
                className="h-20 w-auto mx-auto object-contain mb-4"
              />
              <h1 className="text-4xl font-bold text-amber-900 mb-4">
                📞 Aide & Support
              </h1>
              <p className="text-xl text-gray-700">
                Notre équipe est là pour vous accompagner
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100"
            >
              <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                Contactez-nous directement
              </h2>

              {/* Phone Numbers */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  📞 Nos téléphones
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+212661724956"
                    className="flex items-center p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors group"
                  >
                    <Phone className="w-4 h-4 mr-3 text-amber-600" />
                    <span className="font-medium group-hover:text-amber-700">
                      +212 661 724 956
                    </span>
                  </a>
                  <a
                    href="tel:+212675202336"
                    className="flex items-center p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors group"
                  >
                    <Phone className="w-4 h-4 mr-3 text-amber-600" />
                    <span className="font-medium group-hover:text-amber-700">
                      +212 675 202 336
                    </span>
                  </a>
                  <a
                    href="tel:0524653072"
                    className="flex items-center p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors group"
                  >
                    <Phone className="w-4 h-4 mr-3 text-amber-600" />
                    <span className="font-medium group-hover:text-amber-700">
                      0524 653 072
                    </span>
                  </a>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  📧 Nos 
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:Belkhadir.poterie@gmail.com"
                    className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <Mail className="w-4 h-4 mr-3 text-blue-600" />
                    <span className="font-medium group-hover:text-blue-700">
                      Belkhadir.poterie@gmail.com
                    </span>
                  </a>
                  <a
                    href="mailto:Belkadi626@gmail.com"
                    className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <Mail className="w-4 h-4 mr-3 text-blue-600" />
                    <span className="font-medium group-hover:text-blue-700">
                      Belkadi626@gmail.com
                    </span>
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-900 mb-2 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Notre atelier à Safi
                </h3>
                <p className="text-green-800 font-medium">
                  📍 62, village des potiers, Safi, Maroc
                </p>
                <p className="text-sm text-green-700 mt-2">
                  Venez découvrir notre atelier traditionnel !
                </p>
              </div>
            </motion.div>

            {/* Delivery Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100"
            >
              <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <Truck className="w-6 h-6 mr-2" />
                Informations Livraison
              </h2>

              <div className="space-y-6">
                {/* Delivery Time */}
                <div className="bg-amber-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />⏰ Délais de Fabrication
                  </h3>
                  <p className="text-gray-700 text-sm">
                    <strong>20 à 45 jours</strong> après confirmation de
                    commande. Nos produits sont entièrement faits main par nos
                    artisans qualifiés de Safi.
                  </p>
                </div>

                {/* CTM Delivery */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    🚛 Transport CTM
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✅ Livraison en agence CTM ou à domicile</li>
                    <li>💰 Frais de transport à votre charge</li>
                    <li>📦 Emballage soigné et sécurisé</li>
                    <li>📍 Livraison dans tout le Maroc</li>
                  </ul>
                </div>

                {/* Terms */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ⚠️ Conditions Importantes
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>🇲🇦 Livraison uniquement au Maroc</li>
                    <li>💳 Paiement intégral requis à la commande</li>
                    <li>🏺 Chaque pièce est unique et artisanale</li>
                    <li>✨ Légères variations possibles (fait main)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 bg-white rounded-2xl shadow-xl p-8 border border-amber-100"
          >
            <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
              <HelpCircle className="w-6 h-6 mr-2" />
              Questions Fréquentes
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ⏰ Délai de livraison ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    20-45 jours selon la complexité des pièces. Fabrication
                    entièrement artisanale.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    💰 Frais de livraison ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Calculés par CTM selon poids et destination. À régler lors
                    de la réception.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📦 Suivi de commande ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Mises à jour régulières + numéro de suivi CTM à
                    l'exp��dition.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ��� Produit cassé ?
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Contactez-nous immédiatement avec photos. Solution garantie
                    !
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                🤝 Nous sommes là pour vous aider !
              </h3>
              <p className="text-gray-700 mb-6">
                Notre équipe passionnée est à votre disposition pour répondre à
                toutes vos questions sur nos cr��ations artisanales.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+212661724956"
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
                >
                  📞 Appeler maintenant
                </a>
                <a
                  href="mailto:Belkhadir.poterie@gmail.com"
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
                >
                  📧 Envoyer un 
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
}
