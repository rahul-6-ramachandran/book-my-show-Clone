/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        btn:{
              50: '#ffe2ec',
              100: '#ffb3c5',
              200: '#fc839f',
              300: '#f95278',
              400: '#f62252',
              500: '#dd0939',
              600: '#ad032c',
              700: '#7c001e',
              800: '#4d0012',
              900: '#200005',
            },
        bms:{
              50: '#fbf0f2',
              100: '#dcd8d9',
              200: '#bfbfbf',
              300: '#a6a6a6',
              400: '#8c8c8c',
              500: '#737373',
              600: '#595959',
              700: '#404040',
              800: '#2b3147',
              900: '#150a0d',
            },
        },
  },
},
  plugins: [],
}