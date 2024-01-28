/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1E1F",
        gray: '#D1D5DB',
      },
      fontSize: {
        'custom': '13px',
        'customAbout': '26px',
        'customFAQ' : '18px'
      },
      fontWeight: {
        thin: 600
      },
      borderWidth: {
        "thin": '0.1px'
      }
    },
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nesting'),
  ],
};
