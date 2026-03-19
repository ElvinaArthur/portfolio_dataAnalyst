const BalanceSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-12">
        {/* Cercle principal */}
        <div className="absolute inset-0 rounded-full border-4 border-green-200"></div>
        {/* Flèche haut (vert) */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-green-500 animate-pulse"></div>
        </div>
        {/* Flèche bas (rouge) */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div
            className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-red-500 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
        {/* Ligne d'équilibre */}
        <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-green-300 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      </div>
    </div>
  );
};
