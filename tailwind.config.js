/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xs": "320px",
      },
    },
  },
  plugins: [],
};
