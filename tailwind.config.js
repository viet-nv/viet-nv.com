module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1024px',
    },
    extend: {
      colors: {},
      spacing: {},
      letterSpacing: {},
      lineHeight: {},
      fontSize: {},
      boxShadow: {},
    },
  },
}
