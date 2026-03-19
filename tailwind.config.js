/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "night-green": {
          50: "#f0f7f0",
          100: "#dcefdc",
          200: "#b8dfb8",
          300: "#89c689",
          400: "#5aaa5a",
          500: "#3d8f3d",
          600: "#2d722d",
          700: "#245a24",
          800: "#1f491f",
          900: "#1a3c1a",
          950: "#0d200d",
        },
        "gray-gradient": {
          start: "#1a1a1a",
          middle: "#2d2d2d",
          end: "#3d3d3d",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "gradient-x": "gradient-x 15s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
