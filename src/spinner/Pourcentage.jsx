const PercentSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-12">
        {/* Cercle de progression */}
        <div className="absolute inset-0 rounded-full border-4 border-green-200"></div>
        <div
          className="absolute inset-0 rounded-full border-4 border-green-600 animate-spin"
          style={{
            clipPath:
              "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 50%)",
            transform: "rotate(45deg)",
          }}
        ></div>
        {/* Symbole pourcentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-green-600 font-bold text-sm animate-bounce">
            %
          </span>
        </div>
      </div>
    </div>
  );
};
