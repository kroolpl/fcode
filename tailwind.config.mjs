/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B2D42',
          dark: '#E5E7EB',
        },
        secondary: {
          DEFAULT: '#8D99AE',
          dark: '#9CA3AF',
        },
        accent: {
          DEFAULT: '#EF233C',
          dark: '#EF4444',
        },
        background: {
          DEFAULT: '#EDF2F4',
          dark: '#111827',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1F2937',
        },
        text: {
          DEFAULT: '#2B2D42',
          dark: '#E5E7EB',
        },
        cta: {
          DEFAULT: '#00b4d8',
          dark: '#48CAE4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        light: '0 4px 6px rgba(0, 0, 0, 0.1)',
        dark: '0 4px 6px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #EDF2F4, #8D99AE)',
        'gradient-dark': 'linear-gradient(135deg, #111827, #1F2937)',
      },
    },
  },
  plugins: [],
}