/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarcolor: "#F0F2FA",
        mobileNavbarColor: "#CBE498",
        textcolor: "#1C1F29",
        hoverColor: "#036D19",
        textWhite: "#FFFFFF",
        footerBgColor: "#454854",
        homeBgColor:"#E6E2DF",
      },
      fontSize: {
        heading1: "3rem",
        heading2: "2.5rem",
        heading3: "2rem",
        heading4: "1.5rem",
        navbarText: "1.5rem",
        pText: "1.5rem",
        mobileHeading1: "2.5rem",
        mobileHeading2: "2rem",
        mobileHeading3: "1.5rem",
        mobileHeading4: "1rem",
        mobilePText: "1rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
