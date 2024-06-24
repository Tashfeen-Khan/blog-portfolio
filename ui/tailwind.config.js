
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
          Bg:'#FFFFFF',//baground
          H_blue:'#0073E5',//blue hiding
            
          H_black:'#0F1214',//black hiding
              Text:"#777D84",
          button_bg:'#006CD7',//button baground
          button_text:"#FFFFFF",
         Card_bg:'#F0F7FF',
         Cardborder:'#66B3FF',
         Card_H_bg:'#F0F7FF',
         Card_H_border:'#CCE6FF',
       
          },
        dark: {
          bg: '#0F1214', // custom light secondary color
          card_bg:"#0E161D",
          text:"#FFFFFF",
          icon_bg:"#0A2540",
        }
        // Add more custom colors as needed
      },
    },
  },
  plugins: [
  ],
};
