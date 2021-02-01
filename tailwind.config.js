module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      brown: {
        DEFAULT: '#341611',
        lighten: '#4f4543'
      },
      white: {
        DEFAULT:'#f8f5f2',
        darken: '#eadfd7',
        active: '#fff'
      },
      black: '#333333',
      pink: '#EC4899',
      purple: '#AE1FF6',
      yellow: '#FFB847',
      green: '#34D399',
      blue: '#00E2FC',
      darkBlue: '#2563EB',
      mauve: '#8f2d56'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
