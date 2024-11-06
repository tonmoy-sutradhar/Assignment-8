/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./assets/Banner.jpg')",
        bannerTwo: "linear-gradient(#a855f7, #a855f7)",
      },
    },
  },
  plugins: [require("daisyui")],
};
