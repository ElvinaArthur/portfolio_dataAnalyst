import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Composants
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Context et Spinner
import { LoadingProvider, useLoading } from "./context/LoadingContext";
import PageSpinner from "./spinner/PageSpinner";

// Contenu principal avec gestion du chargement
function AppContent() {
  const { isPageLoading, setIsPageLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    // Active le spinner à chaque changement de page
    setIsPageLoading(true);

    // Désactive après un court délai
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 600); // Ajustez cette durée si besoin

    return () => clearTimeout(timer);
  }, [location, setIsPageLoading]);

  return (
    <div className="min-h-screen gradient-bg">
      <Header />

      {/* Le spinner apparaît ici, au-dessus du contenu */}
      <AnimatePresence>{isPageLoading && <PageSpinner />}</AnimatePresence>

      {/* Contenu des pages avec effet de fondu pendant le chargement */}
      <div
        style={{ opacity: isPageLoading ? 0.3 : 1, transition: "opacity 0.3s" }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

// App principale avec les providers
function App() {
  return (
    <Router>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </Router>
  );
}

export default App;
