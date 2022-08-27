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
      clear: 'rgb(var(--color-clear) / <alpha-value>)'
    },
    extend: {},
  },
  plugins: [],
}
