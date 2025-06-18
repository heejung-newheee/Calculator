/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /bg-(red|green|blue)-(100|200|300)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /max-(w|h)-*/,
    },
    {
      pattern: /min-(w|h)-*/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        normal: ['Pretendard-Regular', 'sans-serif'],
        bold: ['Pretendard-Bold', 'sans-serif'],
        'semi-bold': ['Pretendard-SemiBold', 'sans-serif'],
        head: ['Hyundai-Sans-Head', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          title: 'var(--background-title)',
          'title-hover': 'var(--background-title-hover)',
          'title-active': 'var(--background-title-active)',
        },
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        teriary: 'var(--teriary)',
        error: 'var(--error)',
        gray: {
          1: 'var(--gray-1)',
          2: 'var(--gray-2)',
          3: 'var(--gray-3)',
          4: 'var(--gray-4)',
          5: 'var(--gray-5)',
        },
        outline: 'var(--outline)',
        disable: 'var(--disable)',
        white: 'var(--white)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
