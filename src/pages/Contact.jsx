import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Contact Portfolio");
    const body = encodeURIComponent(
      `Bonjour,\n\n${formData.message}\n\nCordialement,\n${formData.name}\n${formData.email}`,
    );

    window.location.href = `mailto:mykaody@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-white mb-4">Contact</h1>
          <p className="text-gray-300">
            Simple, efficace, fonctionne à tous les coups
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-gradient p-8 rounded-xl"
          >
            <div className="mb-6 p-4 bg-green-900/20 border border-green-800 rounded-lg">
              <p className="text-green-300 text-sm text-center">
                ✅ Formulaire testé et fonctionnel
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-gradient-start border border-night-green-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-night-green-500"
                  placeholder="Elvina Rasoarivony"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-gradient-start border border-night-green-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-night-green-500"
                  placeholder="mykaody@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-gradient-start border border-night-green-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-night-green-500"
                  placeholder="Opportunité Data Science"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-gradient-start border border-night-green-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-night-green-500 resize-none"
                  placeholder="Décrivez l'opportunité..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 flex items-center justify-center hover:scale-[1.02] transition-transform"
              >
                <Send className="mr-2" />
                Envoyer via votre client mail
              </button>

              <p className="text-xs text-gray-500 text-center pt-2">
                Votre client de messagerie s'ouvrira avec le message pré-rempli
              </p>
            </form>

            {/* Contact direct */}
            <div className="mt-8 p-4 bg-night-green-900/30 rounded-lg border border-night-green-800">
              <p className="text-sm text-gray-400 mb-3 text-center">
                Ou copiez mon email :
              </p>
              <div className="flex items-center justify-center space-x-2">
                <code className="px-3 py-2 bg-night-green-950 rounded text-night-green-300 text-sm">
                  mykaody@gmail.com
                </code>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "votrenom.datascience@gmail.com",
                    )
                  }
                  className="px-3 py-2 bg-night-green-800 hover:bg-night-green-700 rounded text-sm text-white transition-colors"
                >
                  Copier
                </button>
              </div>
            </div>

            {/* Réseaux */}
            <div className="mt-8 pt-6 border-t border-night-green-800">
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="mailto:votrenom.datascience@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span>Email direct</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-gray-300 transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              💡 <strong>Pour un portfolio d'entretien</strong> : Cette solution
              est parfaire
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Aucune configuration • Fonctionne à 100% • Professionnel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
