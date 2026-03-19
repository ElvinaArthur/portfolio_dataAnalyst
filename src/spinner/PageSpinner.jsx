// src/components/PageSpinner.jsx
import React from "react";
import { motion } from "framer-motion";

const PageSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
    >
      <div className="relative">
        {/* Cercle extérieur */}
        <div className="w-24 h-24 border-4 border-green-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-24 h-24 border-4 border-green-600 rounded-full animate-spin border-t-transparent"></div>

        {/* Icône euro au centre */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-green-400 font-bold text-3xl animate-pulse">
            €
          </span>
        </div>

        {/* Points de chargement */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageSpinner;
