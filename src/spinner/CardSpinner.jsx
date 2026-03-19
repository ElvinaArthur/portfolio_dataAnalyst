const CardSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-14 h-10">
        {/* Carte bancaire */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-lg animate-pulse">
          {/* Puce de carte */}
          <div className="absolute top-1 left-1 w-3 h-2 bg-yellow-300 rounded-sm"></div>
          {/* Lignes de la carte */}
          <div className="absolute bottom-2 right-1 flex space-x-0.5">
            <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div
              className="w-1 h-1 bg-white rounded-full animate-ping"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>
        </div>
        {/* Anneau de chargement autour */}
        <div className="absolute -inset-1 rounded-lg border-2 border-green-300 border-t-green-600 animate-spin"></div>
      </div>
    </div>
  );
};
