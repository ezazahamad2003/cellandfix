/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F7F5",
        text: "#111111",
        muted: "#6B6B6B",
        border: "#E5E5E5",
        accent: "#7C3AED",
        accent2: "#06B6D4",
        accent3: "#F97316",
        glow1: "#A78BFA",
        glow2: "#22D3EE",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(124, 58, 237, 0.22)",
      },
    },
  },
  plugins: [],
};
