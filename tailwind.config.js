/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nsans-bold" : ["Nsans Bold"],
        "nsans-medium" : ["Nsans Medium"],
        "nsans-light" : ["Nsans Light"],
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}