import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  FolderKanban,
  Mail,
  Brain,
  User,
  BarChart3,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Accueil", path: "/", icon: <Home size={18} /> },
    { name: "Projets", path: "/projects", icon: <FolderKanban size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 bg-gray-gradient-start/90 backdrop-blur-sm border-b border-night-green-800/50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-gradient-to-br from-night-green-600 to-night-green-800 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Brain className="text-white" size={24} />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-white bg-gradient-to-r from-night-green-300 to-white bg-clip-text text-transparent">
                DataScience<span className="text-night-green-400">Bank</span>
              </h1>
              <p className="text-xs text-night-green-300/80">
                Analyse Bancaire & Automatisation
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="flex items-center space-x-2 text-gray-300 hover:text-night-green-300 transition-colors group"
                >
                  <span className="font-medium">{item.name}</span>
                </Link>
              </motion.div>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf"
              download="CV_Datascientist_Bancaire.pdf"
              className="btn-primary flex items-center px-6 py-3  hover:bg-night-green-900/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-night-green-900/20 cursor-pointer relative z-50" // ← border-2 border-red-500 et z-50
              style={{ position: "relative" }}
            >
              Télécharger CV
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-6 border-t border-night-green-800/50">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center space-x-3 text-gray-300 hover:text-night-green-300 py-2 px-4 rounded-lg hover:bg-night-green-900/30 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
                <a
                  href="/cv.pdf"
                  download="CV_Datascientist_Bancaire.pdf"
                  className="btn-primary flex items-center px-6 py-3  hover:bg-night-green-900/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-night-green-900/20 cursor-pointer relative z-50" // ← border-2 border-red-500 et z-50
                  style={{ position: "relative" }}
                >
                  Télécharger CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
