/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')",
      },
    },
  },
  plugins: [],
};
