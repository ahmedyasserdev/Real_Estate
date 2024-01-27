import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        dark : "#110229",
        grey : {
          500: "#8F90A6", 
          700: "#585981", 
        },
        blue : "#1DAEFF"

      },
      backgroundImage: {
        hero: "url('/Banner-Image.png')",
        america : "url('/america.png')",
        spain : "url('/spain.png')",
        london : "url('/london.png')",
        france : "url('/france.png')",
      },
    },
    screens : {
      sm : '567px' ,
      md : "768px" ,
      lg  : "992px" ,
      xl : "1200px" ,
      "2xl" : "1400px" ,
    },
  },
  plugins: [],
};
export default config;
