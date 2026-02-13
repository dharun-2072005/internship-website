module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8ff',
          100: '#e6f0ff',
          300: '#7da7ff',
          500: '#2b6ef6',
          700: '#1449b8'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
