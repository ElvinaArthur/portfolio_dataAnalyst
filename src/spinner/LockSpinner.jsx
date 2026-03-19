const LockSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-12">
        {/* Anneau extérieur */}
        <div className="absolute inset-0 rounded-full border-4 border-green-200 border-t-green-600 animate-spin"></div>
        {/* Cadenas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-green-600 text-lg">🔒</div>
        </div>
      </div>
    </div>
  );
};
