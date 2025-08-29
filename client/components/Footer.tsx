import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-800 to-amber-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand with Logo */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white rounded-lg p-2 shadow-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F58adbc6721294870bd452009a016663f?format=webp&width=800"
                  alt="Belkhadir Poterie Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                Belkhadir Poterie
              </span>
            </Link>
            <p className="text-amber-200 text-sm leading-relaxed">
              Artisanat marocain authentique créé par Idriss Belkhadir selon les
              méthodes traditionnelles transmises de génération en génération.
            </p>
          </div>

                    {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Liens rapides</h3>
            <div className="space-y-2 text-sm">
              <Link
                to="/"
                className="block text-amber-200 hover:text-white transition-colors"
              >
                Accueil
              </Link>
              <Link
                to="/creations"
                className="block text-amber-200 hover:text-white transition-colors"
              >
                Nos Créations
              </Link>
              <Link
                to="/about"
                className="block text-amber-200 hover:text-white transition-colors"
              >
                À propos
              </Link>
              <Link
                to="/cart"
                className="block text-amber-200 hover:text-white transition-colors"
              >
                Mon Panier
              </Link>
              <Link
                to="/help"
                className="block text-amber-200 hover:text-white transition-colors"
              >
                Help
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2 text-amber-200">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+212661724956"
                    className="block hover:text-white transition-colors"
                  >
                    +212 661 724 956
                  </a>
                  <a
                    href="tel:+212675202336"
                    className="block hover:text-white transition-colors"
                  >
                    +212 675 202 336
                  </a>
                  <a
                    href="tel:0524653072"
                    className="block hover:text-white transition-colors"
                  >
                    0524 653 072
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2 text-amber-200">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="mailto:Belkhadir.poterie@gmail.com"
                    className="block hover:text-white transition-colors"
                  >
                    Belkhadir.poterie@gmail.com
                  </a>
                  <a
                    href="mailto:Belkadi626@gmail.com"
                    className="block hover:text-white transition-colors"
                  >
                    Belkadi626@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Heritage */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Notre Atelier</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2 text-amber-200">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>62, village des potiers, Safi, Maroc</span>
              </div>
              <p className="text-amber-200 leading-relaxed">
                Chaque pièce est façonnée à la main avec passion et savoir-faire
                dans notre atelier traditionnel de Safi.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-200 text-sm">
              © 2024 Belkhadir Poterie - Artisanat Marocain Authentique par
              Idriss Belkhadir
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/help"
                className="text-amber-200 hover:text-white transition-colors"
              >
                Help
              </Link>
              <Link
                to="/privacy"
                className="text-amber-200 hover:text-white transition-colors"
              >
                Confidentialité
              </Link>
              <Link
                to="/terms"
                className="text-amber-200 hover:text-white transition-colors"
              >
                Conditions
              </Link>
            </div>
          </div>
          <div className="mt-4 p-3 bg-amber-700/30 rounded-lg">
            <p className="text-sm text-amber-200 text-center">
              <strong>🚚 Livraison:</strong> Uniquement au Maroc • Délai: 20-45
              jours • Frais CTM à la charge du client • Paiement intégral requis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
