/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        primary: "#000000",
        secondary: "#7c8db5",
        white: "#ffffff",
        border: "#e6edff",
        indigo: "347ae2",
        red: "#ff3b30",
        green: "#34c759",
        orange: "#ff9500",
        gray: "#808080",
        "gray-light": "#ECEDF7",
        "gray-dark": "#333333",
      },
    },
  },
  plugins: [],
};
