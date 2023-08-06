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
        "primary-bg": "#ECEDF7",
        "primary-bg-dark": "#004491",
        "primary-action": "#2D75DD",
        "primary-border": "#ACC7FF",

        "neutral-bg": "#5E5E62",
        "neutral-bg-dark": "#0D0E11",
        "neutral-bg-light": "#F4F3F7",
        "neutral-action": "#ABABAF",
        "neutral-border": "#C7C6CA",
      },
      fontFamily: {
        roboto: ["Roboto"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
