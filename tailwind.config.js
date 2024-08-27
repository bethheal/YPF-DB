
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
    theme: {
    extend: {
      colors:{
        btnColor: "#00006A",
        secondary:"#ffff",
        btnHover: "#171717"
      },
      spacing: {
        'arrow-width': '50px',
        'arrow-stroke': '2px',
      },
      borderRadius: {
        'custom': '20px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}

