module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
        montserrat: ["Montserrat", "Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        merri: ["Merriweather", "Georgia", "Times New Roman", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
