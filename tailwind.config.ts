import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem', xl: '2.5rem' },
      screens: { '2xl': '1400px' },
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0A66FF',
          50: '#EAF1FF',
          100: '#D2E2FF',
          200: '#A5C5FF',
          300: '#78A8FF',
          400: '#4B8BFF',
          500: '#0A66FF',
          600: '#0852CC',
          700: '#063D99',
          800: '#042966',
          900: '#021533',
        },
        teal: {
          DEFAULT: '#00B7A8',
          50: '#E6FBF9',
          100: '#CCF7F3',
          200: '#99EFE7',
          300: '#66E7DB',
          400: '#33DFCF',
          500: '#00B7A8',
          600: '#009286',
          700: '#006E65',
          800: '#004943',
          900: '#002522',
        },
        gold: {
          DEFAULT: '#F4B400',
          50: '#FFF8E5',
          100: '#FEEFC0',
          200: '#FCDF82',
          300: '#FBCF43',
          400: '#F4B400',
          500: '#C28F00',
        },
        ink: '#0F172A',
        cloud: '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        dm: ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(10, 102, 255, 0.18)',
        glow: '0 0 60px rgba(10, 102, 255, 0.35)',
        glass: '0 8px 32px rgba(15, 23, 42, 0.08)',
        ring: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 50px -20px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'gradient-brand':
          'linear-gradient(135deg, #0A66FF 0%, #00B7A8 100%)',
        'gradient-aurora':
          'radial-gradient(60% 60% at 50% 0%, rgba(10,102,255,0.25) 0%, rgba(0,183,168,0.18) 35%, rgba(244,180,0,0.10) 60%, transparent 80%)',
        'gradient-sheen':
          'linear-gradient(120deg, rgba(255,255,255,0.0) 30%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.0) 70%)',
        grid:
          'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'marquee-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'scroll-indicator': {
          '0%': { transform: 'translateY(-6px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(6px)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        marquee: 'marquee-x 40s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'scroll-indicator': 'scroll-indicator 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
