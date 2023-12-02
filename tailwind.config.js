/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      serif: ['Rubik', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          // primary: '#ffffff',
          // secondary: '#100F3d',
          // accent: '#3671e9',
          // neutral: '#ffff',
          // info: '#aaeeff',
          // success: '#10b981',
          // warning: '#eab308',
          // error: '#ef4444',
          // purple: '#643abd',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#020121',
          secondary: '#100F3d',
          accent: '#3671e9',
          neutral: '#ffffff',
          info: '#aaeeff',
          success: '#10b981',
          warning: '#eab308',
          error: '#ef4444',
          purple: '#643abd',
          lime: '#072b75',
          greenlight: '#0dd0bd',
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
