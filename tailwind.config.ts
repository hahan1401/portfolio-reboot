import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    data: {
      active: 'active="true"',
    },
    extend: {
      colors: {
        primary: {
          0: 'rgb(var(--color-primary-0) / <alpha-value>)',
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
          'black': 'rgb(var(--color-primary-black) / <alpha-value>)',
        },
        secondary: {
          0: 'rgb(var(--secondary-color) / <alpha-value>)',
          800: 'rgb(var(--secondary-color-800) / <alpha-value>)',
          900: 'rgb(var(--secondary-color-900) / <alpha-value>)',
        },
        link: 'rgb(var(--text-link) / <alpha-value>)',
        background: 'rgb(var(--bg-color) / <alpha-value>)'
      },
      spacing: {
        350: '87.5rem',
      },
      boxShadow: {
        'shadow-card': 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(50%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-out-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out;',
        'fade-in-right': 'fade-in-right 1s ease-out;',
        'fade-up': 'fade-up 1s ease-out;',
        'fade-out-left': 'fade-out-left 1s ease-out;',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
