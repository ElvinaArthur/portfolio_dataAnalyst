import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
  Copyright,
  Heart,
  ExternalLink,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-profile",
      color: "hover:text-blue-400",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/your-username",
      color: "hover:text-gray-300",
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      href: "https://twitter.com/your-handle",
      color: "hover:text-sky-400",
    },
  ];

  const quickLinks = [
    { name: "Accueil", path: "/" },
    { name: "Expertise", path: "#expertise" },
    { name: "Projets", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Analyse de Risque Bancaire",
    "Automatisation de Processus",
    "Machine Learning pour la Finance",
    "Visualisation de Données",
    "Fraud Detection",
    "Credit Scoring",
  ];

  const contactInfo = [
    { icon: <Mail size={18} />, text: "contact@datasciencebank.com" },
    { icon: <Phone size={18} />, text: "+33 1 23 45 67 89" },
    { icon: <MapPin size={18} />, text: "Paris, France" },
  ];

  return (
    <footer className="relative mt-20 border-t border-night-green-800/50">
      {/* Gradient decorative element */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-night-green-500 to-transparent"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-night-green-600 to-night-green-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  <Brain />
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  DataScience<span className="text-night-green-400">Bank</span>
                </h3>
                <p className="text-sm text-night-green-300/80">
                  Expert en analyse bancaire
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Spécialisé dans l'analyse de données bancaires, l'automatisation
              des processus et le développement de solutions data-driven pour le
              secteur financier.
            </p>

            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-10 h-10 rounded-full bg-night-green-900/50 border border-night-green-800 flex items-center justify-center text-gray-300 transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-night-green-800/50">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center text-gray-400 hover:text-night-green-300 transition-colors group"
                  >
                    <ChevronUp
                      size={16}
                      className="mr-2 rotate-90 group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-night-green-800/50">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-night-green-500 mr-3"></div>
                  <span className="text-gray-400 text-sm">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-night-green-800/50">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="text-night-green-400 mt-0.5">{info.icon}</div>
                  <span className="text-gray-400 text-sm">{info.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8 p-4 card-gradient rounded-lg">
              <p className="text-white text-sm font-medium mb-2">
                Restez informé
              </p>
              <p className="text-gray-400 text-xs mb-3">
                Abonnez-vous à ma newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-gradient-start border border-night-green-800 rounded-l-lg text-sm focus:outline-none focus:ring-1 focus:ring-night-green-500"
                />
                <button className="px-4 py-2 bg-night-green-700 hover:bg-night-green-600 text-white text-sm rounded-r-lg transition-colors">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-night-green-800/30 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center text-gray-500 text-sm mb-4 md:mb-0">
            <Copyright size={14} className="mr-2" />
            <span>{currentYear} DataScienceBank. Tous droits réservés.</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Made with{" "}
              <Heart size={14} className="mx-1 text-red-400 fill-current" /> in
              France
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Politique de confidentialité
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Mentions légales
            </a>

            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-night-green-900/30 hover:bg-night-green-900/50 border border-night-green-800 rounded-lg text-night-green-300 text-sm transition-colors"
            >
              <ChevronUp size={16} />
              <span>Haut de page</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <div className="px-3 py-1 bg-night-green-900/30 border border-night-green-800 rounded-full text-xs text-night-green-300">
            🏦 Expert Secteur Bancaire
          </div>
          <div className="px-3 py-1 bg-night-green-900/30 border border-night-green-800 rounded-full text-xs text-night-green-300">
            🤖 Automatisation IA
          </div>
          <div className="px-3 py-1 bg-night-green-900/30 border border-night-green-800 rounded-full text-xs text-night-green-300">
            📊 Data Visualization
          </div>
          <div className="px-3 py-1 bg-night-green-900/30 border border-night-green-800 rounded-full text-xs text-night-green-300">
            🔐 Sécurité des Données
          </div>
        </motion.div>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-4 right-4 opacity-10">
        <code className="text-xs font-mono">v1.0.0</code>
      </div>
    </footer>
  );
};

export default Footer;
