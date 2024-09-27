/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Add paths where your components are located
    "./app/routes/**/*.{js,jsx,ts,tsx}", // Add paths to your routes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
