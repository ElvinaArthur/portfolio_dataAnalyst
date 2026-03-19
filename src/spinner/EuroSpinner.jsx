const EuroSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-12">
        {/* Cercle extérieur */}
        <div className="absolute inset-0 rounded-full border-4 border-green-200 border-t-green-600 animate-spin"></div>
        {/* Symbole Euro */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-green-600 font-bold text-lg animate-pulse">
            €
          </span>
        </div>
      </div>
    </div>
  );
};
