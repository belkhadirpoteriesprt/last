import { useState } from "react";
import { Layout } from "../components/Layout";
import { 
  Palette, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  Star,
  MessageCircle,
  CheckCircle,
  Zap,
  Eye,
  Heart,
  ShoppingCart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Interface pour le formulaire de personnalisation
interface CustomizationForm {
  colors: string[];
  patterns: string[];
  sizes: string[];
  freeText: string;
  customerName: string;
  customerPhone: string;
}

export default function NewHome() {
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customForm, setCustomForm] = useState<CustomizationForm>({
    colors: [],
    patterns: [],
    sizes: [],
    freeText: "",
    customerName: "",
    customerPhone: ""
  });

  // Couleurs disponibles
  const availableColors = [
    { id: "blue", name: "Bleu", hex: "#1E40AF" },
    { id: "green", name: "Vert", hex: "#16A34A" },
    { id: "red", name: "Rouge", hex: "#DC2626" },
    { id: "orange", name: "Orange", hex: "#EA580C" },
    { id: "purple", name: "Violet", hex: "#7C3AED" },
    { id: "yellow", name: "Jaune", hex: "#F59E0B" },
    { id: "brown", name: "Marron", hex: "#78350F" },
    { id: "black", name: "Noir", hex: "#1F2937" }
  ];

  // Motifs disponibles
  const availablePatterns = [
    { id: "geometric", name: "Géométrique" },
    { id: "floral", name: "Floral" },
    { id: "berber", name: "Berbère" },
    { id: "modern", name: "Moderne" },
    { id: "traditional", name: "Traditionnel" },
    { id: "custom", name: "Personnalisé" }
  ];

  // Tailles disponibles
  const availableSizes = [
    { id: "small", name: "Petit (20-30cm)" },
    { id: "medium", name: "Moyen (30-40cm)" },
    { id: "large", name: "Grand (40-50cm)" },
    { id: "xlarge", name: "Très Grand (50cm+)" }
  ];

  const handleColorToggle = (colorId: string) => {
    setCustomForm(prev => ({
      ...prev,
      colors: prev.colors.includes(colorId) 
        ? prev.colors.filter(c => c !== colorId)
        : [...prev.colors, colorId]
    }));
  };

  const handlePatternToggle = (patternId: string) => {
    setCustomForm(prev => ({
      ...prev,
      patterns: prev.patterns.includes(patternId)
        ? prev.patterns.filter(p => p !== patternId)
        : [...prev.patterns, patternId]
    }));
  };

  const handleSizeToggle = (sizeId: string) => {
    setCustomForm(prev => ({
      ...prev,
      sizes: prev.sizes.includes(sizeId)
        ? prev.sizes.filter(s => s !== sizeId)
        : [...prev.sizes, sizeId]
    }));
  };

  const sendWhatsAppOrder = () => {
    if (!customForm.customerName || !customForm.customerPhone) {
      alert("Veuillez remplir votre nom et téléphone");
      return;
    }

    const selectedColors = availableColors.filter(c => customForm.colors.includes(c.id)).map(c => c.name).join(", ");
    const selectedPatterns = availablePatterns.filter(p => customForm.patterns.includes(p.id)).map(p => p.name).join(", ");
    const selectedSizes = availableSizes.filter(s => customForm.sizes.includes(s.id)).map(s => s.name).join(", ");

    const message = `🎨 *DEMANDE DE PERSONNALISATION - Belkhadir Poterie*

👤 *Client:* ${customForm.customerName}
📞 *Téléphone:* ${customForm.customerPhone}

🎨 *Couleurs souhaitées:* ${selectedColors || "Non spécifié"}
🖼️ *Motifs souhaités:* ${selectedPatterns || "Non spécifié"}  
📏 *Tailles souhaitées:* ${selectedSizes || "Non spécifié"}

💬 *Demande spéciale:*
${customForm.freeText || "Aucune demande spéciale"}

📅 Demande envoyée le ${new Date().toLocaleString("fr-FR")}`;

    const whatsappUrl = `https://wa.me/212675202336?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section avec pattern d'arrière-plan */}
      <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px"
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo et titre */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="flex items-center bg-gradient-to-br from-amber-600 to-orange-700 rounded-full w-12 h-12 justify-center shadow-2xl mr-3">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-amber-900">
                  BELKHADIR
                </h1>
                <p className="text-orange-700 font-medium">POTERIE</p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-amber-900 mb-6"
            >
              <span>BIENVENUE SUR</span>
              <span className="block text-orange-700">BELKHADIR POTERIE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-amber-800 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              L'art traditionnel de la poterie marocaine, façonné avec passion et savoir-faire depuis des générations
            </motion.p>

            {/* Section Découvrir Collection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 shadow-2xl">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  Découvrez Notre Collection
                </h3>
                <p className="text-lg text-amber-800 mb-6">
                  Consultez nos produits et passez vos commandes standardisées directement :
                </p>

                <div className="mb-6">
                  <a
                    href="/creations"
                    className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-lg hover:from-amber-700 hover:to-orange-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    🏺 BELKHADIR-POTERIE
                  </a>
                </div>

                {/* Section Personnalisation */}
                <div className="bg-amber-50/60 rounded-xl p-6 border border-amber-300">
                  <h4 className="text-xl font-semibold text-amber-900 mb-3 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Pour la personnalisation ou plus d'informations
                  </h4>
                  <p className="text-amber-800 mb-4">
                    Créez vos propres motifs, couleurs et tailles personnalisées. 
                    Nos artisans donneront vie à vos idées uniques !
                  </p>

                  {/* Bouton WhatsApp Standard */}
                  <a
                    href="https://wa.me/212675202336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp: +212 675-202336
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Formulaire de Personnalisation (Modal) */}
      <AnimatePresence>
        {showCustomForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowCustomForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-amber-900 flex items-center">
                    <Palette className="w-8 h-8 mr-3" />
                    🎨 Créer votre Poterie Personnalisée
                  </h2>
                  <button
                    onClick={() => setShowCustomForm(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Informations Client */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      👤 Votre nom *
                    </label>
                    <input
                      type="text"
                      value={customForm.customerName}
                      onChange={(e) => setCustomForm(prev => ({ ...prev, customerName: e.target.value }))}
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
                      value={customForm.customerPhone}
                      onChange={(e) => setCustomForm(prev => ({ ...prev, customerPhone: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>
                </div>

                {/* Sélection des Couleurs */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-amber-900 mb-4 flex items-center">
                    🎨 Couleurs préférées
                  </h3>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    {availableColors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => handleColorToggle(color.id)}
                        className={`relative p-3 rounded-lg border-2 transition-all ${
                          customForm.colors.includes(color.id)
                            ? "border-amber-600 shadow-lg"
                            : "border-gray-300 hover:border-amber-400"
                        }`}
                      >
                        <div
                          className="w-8 h-8 rounded-full mx-auto mb-1"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs text-center block">{color.name}</span>
                        {customForm.colors.includes(color.id) && (
                          <CheckCircle className="absolute -top-1 -right-1 w-5 h-5 text-green-600 bg-white rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sélection des Motifs */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-amber-900 mb-4 flex items-center">
                    🖼️ Motifs souhaités
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {availablePatterns.map((pattern) => (
                      <button
                        key={pattern.id}
                        onClick={() => handlePatternToggle(pattern.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          customForm.patterns.includes(pattern.id)
                            ? "border-amber-600 bg-amber-50 shadow-lg"
                            : "border-gray-300 hover:border-amber-400 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{pattern.name}</span>
                          {customForm.patterns.includes(pattern.id) && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sélection des Tailles */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-amber-900 mb-4 flex items-center">
                    📏 Tailles souhaitées
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {availableSizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => handleSizeToggle(size.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          customForm.sizes.includes(size.id)
                            ? "border-amber-600 bg-amber-50 shadow-lg"
                            : "border-gray-300 hover:border-amber-400 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{size.name}</span>
                          {customForm.sizes.includes(size.id) && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Champ libre */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-amber-900 mb-4 flex items-center">
                    💬 Demandes spéciales
                  </h3>
                  <textarea
                    value={customForm.freeText}
                    onChange={(e) => setCustomForm(prev => ({ ...prev, freeText: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    rows={4}
                    placeholder="Décrivez vos idées, inspirations, ou demandes spéciales pour votre création personnalisée..."
                  />
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-4">
                  <button
                    onClick={sendWhatsAppOrder}
                    className="flex-1 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg shadow-lg flex items-center justify-center"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    📱 Envoyer ma demande sur WhatsApp
                  </button>
                  <button
                    onClick={() => setShowCustomForm(false)}
                    className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Annuler
                  </button>
                </div>

                <p className="text-sm text-gray-600 mt-4 text-center">
                  * Votre demande sera envoyée directement à nos artisans via WhatsApp
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Pourquoi Choisir Belkhadir Poterie ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-12 h-12" />,
                title: "Artisanat Authentique",
                description: "Chaque pièce façonnée à la main selon les traditions ancestrales de Safi",
                color: "from-amber-400 to-orange-500"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Personnalisation Complète",
                description: "Créez votre propre design avec nos couleurs, motifs et tailles",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Qualité Premium",
                description: "Matériaux nobles et finitions soignées pour une durabilité exceptionnelle",
                color: "from-green-400 to-cyan-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-6`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Contactez-Nous
            </h2>
            <p className="text-xl text-amber-800">
              Pour plus d'informations ou pour passer vos commandes, veuillez nous contacter via:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Téléphone</h3>
              <a href="tel:+212661724956" className="text-2xl font-bold text-orange-700 hover:text-orange-800 transition-colors">
                +212 661 724 956
              </a>
              <p className="text-amber-600 mt-2">Appelez-nous directement</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Email</h3>
              <a href="mailto:belkadi626@gmail.com" className="text-xl font-bold text-gray-600 hover:text-gray-800 transition-colors break-all">
                belkadi626@gmail.com
              </a>
              <p className="text-gray-500 mt-2">Envoyez-nous un message</p>
            </motion.div>
          </div>

          {/* Info Important */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-amber-800 to-orange-800 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-amber-200 mr-3" />
                <h3 className="text-2xl font-bold">Infos Importantes</h3>
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <p className="text-lg leading-relaxed text-center">
                  Vu que nos créations sont artisanales, nous vous informons que votre commande peut prendre de{" "}
                  <span className="font-bold text-amber-200">10 à 45 jours</span>, en fonction des quantités et d'autres facteurs.
                </p>
                <p className="text-amber-200 mt-4 text-center">
                  Chaque pièce est façonnée avec soin selon les techniques traditionnelles, ce qui garantit la qualité unique de nos créations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl p-8 text-white shadow-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Prêt à découvrir nos créations ?</h3>
              <p className="text-amber-100 text-lg mb-6">
                Contactez-nous dès maintenant pour discuter de vos besoins en poterie artisanale
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+212661724956"
                  className="flex items-center bg-white text-orange-700 px-8 py-4 rounded-lg hover:bg-amber-50 transition-colors font-semibold shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler Maintenant
                </a>
                <a
                  href="mailto:belkadi626@gmail.com"
                  className="flex items-center bg-white text-orange-700 px-8 py-4 rounded-lg hover:bg-amber-50 transition-colors font-semibold shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Envoyer un Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
