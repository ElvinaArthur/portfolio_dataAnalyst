// src/components/TransactionSpinner.jsx
import React from "react";
import { useLoading } from "../context/LoadingContext";

const TransactionSpinner = () => {
  const { loadingMessage } = useLoading();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="relative w-20 h-20">
          {/* Anneau extérieur */}
          <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-green-600 rounded-full animate-spin border-t-transparent"></div>

          {/* Icône de transaction */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-green-600 text-3xl animate-bounce">↻</div>
          </div>

          {/* Points de connexion */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          <div
            className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-500 rounded-full animate-ping"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>

        {/* Message personnalisable */}
        <p className="text-green-700 font-medium">{loadingMessage}</p>

        {/* Petit indicateur bancaire */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-green-600 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TransactionSpinner;
