import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Layout } from "../components/Layout";

export default function Login() {
  const [formData, setFormData] = useState({
     "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      console.log("Tentative de connexion:", formData);
      alert("Fonctionnalité de connexion à implémenter avec le backend");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Layout>
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8"
        >
          {/* Header with Logo */}
          <div className="text-center">
            <Link to="/" className="inline-block mb-6">
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 shadow-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F58adbc6721294870bd452009a016663f?format=webp&width=800"
                  alt="Belkhadir Poterie Logo"
                  className="h-16 w-auto mx-auto object-contain"
                />
              </div>
            </Link>
            <h2 className="text-3xl font-bold text-amber-900 mb-2">
              Bienvenue !
            </h2>
            <p className="text-gray-600">
              Connectez-vous à votre espace Belkhadir Poterie
            </p>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl border border-amber-100 space-y-6"
          >
            <div>
              
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Lock className="w-4 h-4 inline mr-2" />
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:opacity-50"
                  placeholder="Votre mot de passe"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="ml-2 text-gray-600">Se souvenir de moi</span>
              </label>
              <a
                href="#"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                Mot de passe oublié?
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Connexion..." : "Se connecter"}
            </motion.button>
          </motion.form>

          {/* Register Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-600">
              Première visite ?{" "}
              <Link
                to="/register"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                Créer un compte
              </Link>
            </p>
            <div className="mt-4">
              <Link
                to="/help"
                className="text-sm text-gray-500 hover:text-amber-600 transition-colors"
              >
                📞 Besoin d'aide ? Contactez-nous
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </Layout>
  );
}
