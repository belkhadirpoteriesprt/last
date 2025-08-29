import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import NewHome from "./pages/NewHome";
import Creations from "./pages/Creations";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { Placeholder } from "./components/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewHome />} />
            <Route path="/creations" element={<Creations />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/help" element={<Help />} />

            {/* Placeholder routes */}
            <Route
              path="/catalog"
              element={
                <Placeholder
                  title="Catalogue"
                  description="Découvrez notre catalogue complet de poteries marocaines"
                />
              }
            />
            <Route
              path="/collections"
              element={
                <Placeholder
                  title="Collections"
                  description="Découvrez nos collections exclusives de poterie marocaine"
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Placeholder
                  title="Contact"
                  description="Contactez-nous pour toute question ou commande personnalisée"
                />
              }
            />
            <Route
              path="/account"
              element={
                <Placeholder
                  title="Mon compte"
                  description="Gérez votre compte et vos commandes"
                />
              }
            />

            {/* Legal pages */}
            <Route
              path="/shipping"
              element={<Placeholder title="Livraison" />}
            />
            <Route path="/returns" element={<Placeholder title="Retours" />} />
            <Route path="/faq" element={<Placeholder title="FAQ" />} />
            <Route path="/support" element={<Placeholder title="Support" />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route
              path="/legal"
              element={<Placeholder title="Mentions légales" />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
