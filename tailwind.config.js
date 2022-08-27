/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,vue,js}',
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      clear: 'rgb(var(--color-clear) / <alpha-value>)',
      grad1: 'rgb(var(--color-grad1) / <alpha-value>)',
      grad2: 'rgb(var(--color-grad2) / <alpha-value>)',
      grad3: 'rgb(var(--color-grad3) / <alpha-value>)',
      grad4: 'rgb(var(--color-grad4) / <alpha-value>)',
      grad5: 'rgb(var(--color-grad5) / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
}
