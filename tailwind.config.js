/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInRight: {
          from: {
            opacity: "0",
            transform: "translateX(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      colors: {
        "light-black": "rgba(15, 23, 42, 0.8)",
        "admin-green": "rgba(15, 23, 42, 0.8)",
        purple: "#5F0BDD",
        grey: "rgba(0, 0, 0, 0.5);",
        modalGrey: "rgba(0, 0, 0, 0.5);",
        green: "#00DA7A",
        black: "#262626",
        hoverBlue: "#EBF1FF",
        blue: {
          600: "#2D28FF",
          300: "#95ADFF",
          500: "#4852FF",
          200: "#BDCEFF",
          100: "#DAE5FF",
        },
        "hero-left": "rgba(139, 92, 213, 1)",
        "hero-right": "rgba(66, 7, 156, 1)",
        primary: "#1D19AF",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
        // You can add more custom font weights as needed
      },
      transitionProperty: {
        font: "font",
        spacing: "margin, padding",
      },
      boxShadow: {
        primary: "0px 3px 21px -3px rgba(29, 16, 40, 0.1)",
        activeShadow: "2px 2px 6px rgba(0, 0, 0, 0.25)",
        secondary: "0px 4px 15px rgba(0, 0, 0, 0.1), 0px 10px 64px rgba(17, 17, 17, 0.08)",
      },
      backgroundImage: {
        footerHero: "url('/footerHero.png')",
        authHero: "url('/respnseBgLg.png')",
        rectHero: "url('/rect.png')",
        icon1: "url('/heroIcon1.png')",
        icon2: "url('/heroIcon2.png')",
        icon3: "url('/heroIcon3.png')",
      },
      fontFamily: {
        primary: ["DegularVariable", "sans-serif"],
        secondary: ["GT-Flexa", "sans-serif"],
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "lower-roman",
      },
    },
  },
  plugins: [],
};
