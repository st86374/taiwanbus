module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], 
  mode:'jit',
  darkMode:'class',
  content: [],
  theme: {
    extend: {
      colors:{
        main:'#f97316'
      },
      textColor: ['active'],
    },
  },
  plugins: [],
}