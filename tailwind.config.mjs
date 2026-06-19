/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ReportMate brand identity, derived from the logo:
        // primary "ReportMate Blue" (the laptop + chart) and the accent
        // "ReportMate Orange" (the chart bars / clipboard).
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36adf8',
          500: '#0c93e9',
          600: '#0074c7',
          700: '#015da1',
          800: '#064f85',
          900: '#0b426e',
          950: '#072a49',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#fedba9',
          300: '#fdc072',
          400: '#fb9c3a',
          500: '#f08a00',
          600: '#dd7000',
          700: '#b75406',
          800: '#92420d',
          900: '#76380e',
          950: '#401a04',
        },
      },
    },
  },
  plugins: [],
};
