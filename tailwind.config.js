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
        primary: "#ECEDF7",
        "primary-dark": "#004491",
        "primary-action": "#2D75DD",
        "primary-border": "#ACC7FF",
        "primary-warning": "#FF5449",

        neutral: "#5E5E62",
        "neutral-dark": "#0D0E11",
        "neutral-light": "#F4F3F7",
        "neutral-action": "#ABABAF",
        "neutral-border": "#C7C6CA",
        "neutral-chat": "#D9D9D9",
        "neutral-box":"rgba(255, 255, 255, 0.08)"
      },
      fontFamily: {
        roboto: ["Roboto"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode:"class",
};
