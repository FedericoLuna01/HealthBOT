/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary))",
        muted: "hsl(var(--muted))",
        background: "hsl(var(--background))",
      },
    },
  },
  plugins: [],
};
