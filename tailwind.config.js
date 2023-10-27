export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      }
    },
    screens: {
      sm: '320px',
      md: '608px',
      lg: '850px',
      xl: '1196px'
    },

    colors: {
      black: '#000000',
      wight: '#ffffff',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      monster: ['Monsterrat', 'serif']
    }
  },
  plugins: []
}
