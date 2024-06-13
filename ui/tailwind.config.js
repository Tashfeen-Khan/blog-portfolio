/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_landingcomponent/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_aboutcomponent/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
   
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          Bg: '  #F6F8FF',
          Text: '#50514F',
          Btn: '#95C623',
          h1:'#E88873',
          Hover: '#E26A50',
          Shadow: '#23B5D3'
          },
        secondary: {
          light: '#FBBF24', // custom light secondary color
          DEFAULT: '#F59E0B', // custom secondary color
          dark: '#B45309' // custom dark secondary color
        }
        // Add more custom colors as needed
      },
    },
  },
  plugins: [
  ],
};
