/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        roboto: ['roboto Condensed', 'sans-serif'],
        merri: ['Merriweather', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'negro': '#000000',
        'blanco': '#FFFFFF',
        'gris': '#e6e6e6',
        'beige-100': '#BDC2A0',
        'beige-200': '#b3b992',
        'beige-300': '#a9af83',
        'beige-400': '#9ea573',
        'beige-500': '#949c63',
        'verde-100': '#a7bfa5',
        'verde-200': '#9db59b',
        'verde-300': '#93ab91',
        'verde-400': '#89a187',
        'verde-500': '#7f977d',
        'verde-parque': '#144733',
        'negro-oscuro': '#090B06',
        'negro-claro': '#0A0F0D',
        'negro-transparente': 'rgba(0, 0, 0, .2)',
        'celeste-claro': "#98eef7",
        'celeste-oscuro': "#6cacb2",
        'rojo-300': "#CD4631",
        "azul-100": "#3F77A2",
        "azul-200": "#35638E",
        "azul-300": "#214F7A",
        "azul-400": "#0D3B66",
        "azul-cruzdelsur": "#7f9fb0",
        "azul-cruzdelsur-100": "#89A9BA",
        "turquesa-100": "#009fe7",
        "turquesa-200": "#009fe7",
        "turquesa-300": "#007ab1",
        "turquesa-goodfish": "#9ce0ff",
        "celeste-pastel": "#bde1f1",
        'gris-lata': '#314546',
      },
      fontSize: {
        sm: '0.1rem',
        md: '10px',
        base: '1.2rem',
        xl: '1.5rem',
        'sm': '.8rem',
        '2/2xl': '1.8rem',
        '2xl': '2rem',
        '3xl': '2.953rem',
        '4xl': '3.441rem',
        '5xl': '4.552rem',
        '6xl': '6rem',
        '7xl': '7.552rem',
      },
    },
  },
  plugins: [],
}
