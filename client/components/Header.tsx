import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { getItemCount } = useCart();
  const cartItemCount = getItemCount();

  return (
    <header className="bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            {/* Real Belkhadir Poterie Logo */}
            <div className="bg-white rounded-lg p-2 shadow-md">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F58adbc6721294870bd452009a016663f?format=webp&width=800"
                alt="Belkhadir Poterie Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold tracking-tight">
                Belkhadir Poterie
              </h1>
              <p className="text-xs text-amber-200">
                Artisanat Marocain Authentique
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="hover:text-amber-200 transition-colors duration-300 font-medium"
            >
              Accueil
            </Link>
            <Link
              to="/creations"
              className="hover:text-amber-200 transition-colors duration-300 font-medium"
            >
              Nos Créations
            </Link>
            <Link
              to="/about"
              className="hover:text-amber-200 transition-colors duration-300 font-medium"
            >
              À propos
            </Link>
            <Link
              to="/login"
              className="hover:text-amber-200 transition-colors duration-300 font-medium"
            >
              Connexion
            </Link>

            {/* Cart Link */}
            <Link
              to="/cart"
              className="relative hover:text-amber-200 transition-colors duration-300 font-medium flex items-center space-x-2 bg-amber-700 px-4 py-2 rounded-lg hover:bg-amber-600"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Panier</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Cart Link */}
            <Link to="/cart" className="relative p-2 bg-amber-700 rounded-lg">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-amber-700 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-amber-700 mt-4 pt-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="hover:text-amber-200 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                🏠 Accueil
              </Link>
              <Link
                to="/creations"
                className="hover:text-amber-200 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                🏺 Nos Créations
              </Link>
              <Link
                to="/about"
                className="hover:text-amber-200 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                ✨ À propos
              </Link>
              <Link
                to="/cart"
                className="hover:text-amber-200 transition-colors duration-300 font-medium py-2 flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Panier ({cartItemCount})</span>
              </Link>
              <Link
                to="/help"
                className="hover:text-amber-200 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                📞 Aide / Contact
              </Link>
              <Link
                to="/login"
                className="hover:text-amber-200 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                👤 Connexion
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
