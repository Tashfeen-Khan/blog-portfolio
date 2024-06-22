
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        light: {
          Bg: '   #FFFFFF',
          Text: '#3B3B3B',
            //blue Primary brand color for the light mode
          Primary:'#4CA5D0',
              // Secondary brand color for the light mode (e.g., for accents or highlights)
          Secondary: '#FFBC38',
         // green  buttons or links
         Accent: '#6CA338',
         // Muted color for borders, dividers, or less prominent elements in the light mode
         Muted: '#3B3B3B',
          },
        dark: {
          bg: '#282828', // custom light secondary color
          text: '#FFFFFF', // custom secondary color
          primary:'#4CA5D0',// custom dark secondary color
          secondary: '#FFBC38',// Secondary brand color for the light mode (e.g., for accents or highlights)
          accent: '#6CA338',
        }
        // Add more custom colors as needed
      },
    },
  },
  plugins: [
  ],
};
