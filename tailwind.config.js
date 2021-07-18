module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { 
       poppins: "Poppins, sans-serif",
       brand: "Bebas Neue, sans-serf"
      },
      container: {
        center: true,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
