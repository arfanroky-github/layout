import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.blue[500],
          hover: colors.blue[600],
          border: colors.blue[600],
          text: colors.blue[600],
          active: colors.blue[700],
          dark: colors.blue[800],
          ["dark-hover"]: colors.blue[900],
          light: colors.white,
        },
      },
    },
  },
  plugins: [],
};
