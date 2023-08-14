/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    backgroundImage: {
      hero: "url('/hero.jpg')",
      footer: "url('/footer.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
