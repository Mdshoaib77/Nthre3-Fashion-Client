/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Dark mode controlled by class

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* COLORS
         Brand hues are unchanged (terracotta + warm neutrals). Surface colors
         are CSS variables (see src/index.css) so light / dark stay in sync. */

      colors: {
        primary: "rgb(var(--c-primary) / <alpha-value>)",
        secondary: "rgb(var(--c-secondary) / <alpha-value>)",
        tertiary: "#211C19",

        paper: "rgb(var(--c-paper) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",

        /* Warm neutral scale: every existing gray-* class picks up the
           brand temperature. */
        gray: {
          10: "#F4EEE8",
          20: "#B8AFA4",
          30: "#6E645C",
          50: "#FAF7F3",
          90: "#1C1917",
          100: "#F3EEE8",
          200: "#E6DED5",
          300: "#D2C8BD",
          400: "#857B71",
          500: "#6E645C",
          600: "#5A514A",
          700: "#463E38",
          800: "#2E2824",
          900: "#1E1916",
        },

        /* DARK MODE SUPPORT COLORS */

        darkbg: "#15110F",
        darkcard: "#201A17",
        darktext: "#F4EDE6",
        darkmuted: "#B9AEA3",
      },

      /* TYPOGRAPHY */

      fontFamily: {
        sans: ['"Manrope"', "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ['"Cormorant Garamond"', '"Playfair Display"', "Didot", "Georgia", "serif"],
      },

      /* BREAKPOINTS */

      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },

      /* BACKGROUND IMAGES */

      backgroundImage: {
        hero: "url(/src/assets/bg.png)",
        banner: "url(/src/assets/banner.png)",
      },

      /* ELEVATION + MOTION */

      boxShadow: {
        soft: "0 1px 2px rgb(33 28 25 / 0.04), 0 6px 18px -8px rgb(33 28 25 / 0.10)",
        brand: "0 8px 20px -6px rgb(176 83 42 / 0.55)",
        card: "0 1px 2px rgb(33 28 25 / 0.04), 0 8px 24px -8px rgb(33 28 25 / 0.10)",
        lift: "0 2px 4px rgb(33 28 25 / 0.05), 0 22px 44px -16px rgb(33 28 25 / 0.22)",
        btn: "0 10px 24px -10px rgb(176 83 42 / 0.65)",
      },

      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },

  plugins: [],
}
