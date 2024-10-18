module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        maxWidth: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    ({ addUtilities, addBase }) => {
      addBase({
        '.section': {
          padding: '2.5rem 0',
        },
        '.section + .section': {
          paddingTop: '0',
        },
      });

      addUtilities({
        '.cart-wrapper': {
          '@apply bg-white p-6 rounded-3xl shadow-md shadow-gray-900/5': {},
        },
      }, ['responsive']);
    },
  ],
};
