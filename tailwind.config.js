/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "411px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#39B54A",
          variant: "#108043",
          t2: "#4DC15F",
          t3: "#62CC74",
          t4: "#76D889",
          t5: "#8AE39E",
        },
        secondary: {
          DEFAULT: "#FBB040",
          variant: "#DAB038",
          t2: "#FBBA59",
          t3: "#FBC472",
          t4: "#FAD8A5",
          t5: "#FAE2BE",
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
