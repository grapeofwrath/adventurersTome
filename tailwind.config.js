module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.{js,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      serif: ['GermaniaOne'],
      sans: ['Signika'],
      body: ['RobotoSlab'],
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [require('@markusantonwolf/tailwind-css-plugin-multi-columns')],
}
