/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E53935",
        dark: "#111827",
        accent: "#FF7043"
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
