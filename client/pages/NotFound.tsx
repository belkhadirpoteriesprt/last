import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-amber-200">404</h1>
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Page introuvable
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-8 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </Layout>
  );
}
