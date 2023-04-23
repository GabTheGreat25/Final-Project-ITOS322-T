/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          default: "#EA2027",
          variant: "#ea2027e8",
          t2: "#ea2027c3",
          t3: "#ea20278f",
          t4: "#ea20275f",
          t5: "#ea202733",
        },
        secondary: {
          default: "#b33939",
          variant: "#b33939d8",
          t2: "#b33939bc",
          t3: "#b3393991",
          t4: "#b3393963",
          t5: "#b339392c",
        },
        neutral: {
          primary: "#212B36",
          secondary: "#5E738A",
          800: "#333F4D",
          700: "#425263",
          600: "#516579",
          500: "#5E738A",
          300: "#8D9DAE",
          200: "#ADB9C6",
          100: "#CCD5DE",
          50: "#F4F6F8",
        },
      },
    },
  },
  plugins: [],
};
