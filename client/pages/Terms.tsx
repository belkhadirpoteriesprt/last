import { Layout } from "../components/Layout";
import { motion } from "framer-motion";
import { FileText, AlertTriangle, Clock, Truck, CreditCard, Shield } from "lucide-react";

export default function Terms() {
  return (
    <Layout>
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-full p-4 shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              Conditions d'Utilisation
            </h1>
            <p className="text-xl text-gray-700">
              Conditions générales de vente et d'utilisation de Belkhadir Poterie
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Présentation */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                1. Présentation de l'entreprise
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Belkhadir Poterie</strong> est un atelier familial d'artisanat 
                  traditionnel marocain dirigé par l'artisan Idriss Belkhadir depuis 1987.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">📍 Informations légales :</h3>
                  <ul className="space-y-1 text-amber-700">
                    <li><strong>Dénomination :</strong> Belkhadir Poterie</li>
                    <li><strong>Dirigeant :</strong> Idriss Belkhadir</li>
                    <li><strong>Adresse :</strong> 62, village des potiers, Safi, Maroc</li>
                    <li><strong>Téléphone :</strong> +212 661 724 956 / +212 675 202 336</li>
                    <li><strong>Email :</strong> Belkhadir.poterie@gmail.com</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Produits et services */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3" />
                2. Produits et services
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-lg font-semibold text-amber-800">🏺 Notre offre :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Poteries traditionnelles marocaines (tajines, qassria, bols, etc.)</li>
                  <li>Créations personnalisées selon vos spécifications</li>
                  <li>Pièces uniques façonnées entièrement à la main</li>
                  <li>Motifs traditionnels et sur mesure</li>
                </ul>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mt-4">
                  <p className="text-orange-800">
                    <strong>⚠️ Important :</strong> Chaque pièce étant artisanale, 
                    de légères variations dans les dimensions, couleurs et motifs 
                    sont possibles et témoignent de l'authenticité du travail manuel.
                  </p>
                </div>
              </div>
            </section>

            {/* Commandes */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <CreditCard className="w-6 h-6 mr-3" />
                3. Commandes et paiement
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">📝 Processus de commande :</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Sélection des produits sur notre site ou via WhatsApp</li>
                    <li>Personnalisation si souhaitée (couleurs, motifs, tailles)</li>
                    <li>Confirmation des détails et du prix par notre équipe</li>
                    <li>Paiement intégral avant production</li>
                    <li>Fabrication artisanale de votre commande</li>
                    <li>Livraison via CTM</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">💳 Modalités de paiement :</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Paiement intégral requis à la commande</li>
                    <li>Virements bancaires acceptés</li>
                    <li>Paiement en espèces possible en atelier</li>
                    <li>Aucun paiement à la livraison</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-red-800">
                    <strong>⚠️ Attention :</strong> En raison de la nature artisanale 
                    de nos produits, aucun remboursement n'est possible une fois 
                    la production commencée.
                  </p>
                </div>
              </div>
            </section>

            {/* Délais */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-3" />
                4. Délais de fabrication
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pr-48">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center mr-48">
                    <h3 className="font-semibold text-red-800 mb-2">🏺 Délai de fabrication</h3>
                    <p className="text-2xl font-bold text-red-700">20-45 jours</p>
                    <p className="text-sm text-red-600">Selon complexité et quantité</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">ℹ️ Facteurs influençant les délais :</h3>
                  <ul className="list-disc list-inside space-y-1 text-blue-700">
                    <li>Complexité des motifs demandés</li>
                    <li>Nombre de pièces commandées</li>
                    <li>Disponibilité des matières premières</li>
                    <li>Conditions météorologiques (séchage naturel)</li>
                    <li>Période de forte demande (fêtes, saisons)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Livraison */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <Truck className="w-6 h-6 mr-3" />
                5. Livraison
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">🚛 Transporteur :</h3>
                  <p>
                    Toutes nos livraisons sont effectuées via <strong>CTM</strong> 
                    (Compagnie de Transports au Maroc), transporteur officiel et fiable.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">📦 Options de livraison :</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-2">🏢 En agence CTM</h4>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li>• Retrait dans l'agence CTM la plus proche</li>
                        <li>• Frais réduits</li>
                        <li>• Horaires d'ouverture étendus</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-2">🏠 À domicile</h4>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li>• Livraison directe chez vous</li>
                        <li>• Frais supplémentaires</li>
                        <li>• Selon disponibilité CTM</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="font-semibold text-yellow-800 mb-2">💰 Frais de livraison :</h3>
                  <ul className="list-disc list-inside space-y-1 text-yellow-700">
                    <li>Les frais de transport sont entièrement à la charge de l'acheteur</li>
                    <li>Payables directement à CTM lors de la réception</li>
                    <li>Tarifs variables selon destination et poids</li>
                    <li>Devis de transport fourni avant expédition</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Responsabilités */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
              <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3" />
                6. Responsabilités et garanties
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">✅ Nos engagements :</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fabrication soignée selon les règles de l'art traditionnel</li>
                    <li>Respect des spécifications convenues</li>
                    <li>Emballage sécurisé pour le transport</li>
                    <li>Suivi de commande et communication régulière</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">⚠️ Limitations :</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Variations naturelles inhérentes à l'artisanat</li>
                    <li>Délais dépendants de facteurs extérieurs</li>
                    <li>Responsabilité limitée aux défauts de fabrication</li>
                    <li>Aucune responsabilité pour dommages durant transport</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">📞 En cas de problème :</h3>
                  <p className="text-green-700">
                    Contactez-nous immédiatement en cas de réception d'un produit 
                    endommagé ou non conforme. Nous nous engageons à trouver une 
                    solution satisfaisante dans les plus brefs délais.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                7. Contact et litiges
              </h2>
              <div className="space-y-4">
                <p>
                  Pour toute question relative à ces conditions d'utilisation 
                  ou à vos commandes, contactez-nous :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">📞 Par téléphone :</h3>
                    <p>+212 661 724 956</p>
                    <p>+212 675 202 336</p>
                    <p>0524 653 072</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">📧 Par  :</h3>
                    <p>Belkhadir.poterie@gmail.com</p>
                    <p>Belkadi626@gmail.com</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">📍 Visite d'atelier :</h3>
                  <p>62, village des potiers, Safi, Maroc</p>
                  <p>Ouvert du lundi au samedi, de 8h à 18h</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-sm text-amber-100">
                    En cas de litige, nous privilégions la résolution amiable. 
                    À défaut, les tribunaux de Safi, Maroc, seront compétents.
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
}
