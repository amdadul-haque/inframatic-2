/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        prim: {
          "1": "#2496BE",
          "2": "#6B9CC6",
          "3": "#d0f0f1"
        },
        sec: {
          "1": "#00215A",
          "2": "#032962",
        },
        black: {
          "1": "#292D32",
          "2": "#404040"
        },
        white: {
          "0": "#fff",
          "2": "#D3D3D3",
          "3": "#BFBFBF",
        }
      }
    },
  },
  plugins: [],
};
