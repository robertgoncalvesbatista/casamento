/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#dff2fe",
          200: "#b8e6fe",
          300: "#74d4ff",
          400: "#00bcff",
          500: "#0084d1",
          600: "#0069a8",
          700: "#00598a",
          800: "#024a70",
          900: "#052f4a",
        },
        secondary: {
          50: "#F5F8F2",
          100: "#E6EDE0",
          200: "#CDDCBC",
          300: "#BACDB0",
          400: "#9EB990",
          500: "#7CA46A",
          600: "#618553",
          700: "#4C6B42",
          800: "#3C5534",
          900: "#31462A",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
