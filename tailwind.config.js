export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'goo-bg': '#dcdcdc',       // Novo fundo
        'goo-blue': '#1800ad',     // Botões e destaques
        'goo-violet': '#1800ad', 
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
