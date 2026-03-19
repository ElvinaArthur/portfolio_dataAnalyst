// Composant spinner réutilisable
const BankSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-12">
        {/* Graphique en barres animé */}
        <div className="absolute bottom-0 left-1 w-2 bg-green-500 h-6 rounded-t-sm animate-[bar1_1s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-4 w-2 bg-green-600 h-8 rounded-t-sm animate-[bar2_1s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-7 w-2 bg-green-500 h-4 rounded-t-sm animate-[bar3_1s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-10 w-2 bg-green-600 h-10 rounded-t-sm animate-[bar4_1s_ease-in-out_infinite]"></div>
      </div>

      <style jsx>{`
        @keyframes bar1 {
          0%,
          100% {
            height: 24px;
          }
          50% {
            height: 32px;
            background-color: #22c55e;
          }
        }
        @keyframes bar2 {
          0%,
          100% {
            height: 32px;
          }
          50% {
            height: 40px;
            background-color: #16a34a;
          }
        }
        @keyframes bar3 {
          0%,
          100% {
            height: 16px;
          }
          50% {
            height: 24px;
            background-color: #22c55e;
          }
        }
        @keyframes bar4 {
          0%,
          100% {
            height: 40px;
          }
          50% {
            height: 48px;
            background-color: #15803d;
          }
        }
      `}</style>
    </div>
  );
};
