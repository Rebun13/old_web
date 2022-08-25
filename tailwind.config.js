/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,vue,js}',
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      clear: 'var(--color-clear)'
    },
    extend: {},
  },
  plugins: [],
}
