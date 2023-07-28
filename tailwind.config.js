/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 4px 2px -2px rgb(0 0 0 / 0.05)',
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: 'rgb(37 99 235)',
        secondary: '#CA8A04',
      },
    },

    plugins: [],
  },
}
