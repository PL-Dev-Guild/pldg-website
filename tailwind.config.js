/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Primary Colors
        black: '#000000',
        white: '#FFFFFF',
        steel: '#E6E6E6',
        // Accent Colors
        electric: '#0066FF',
        purple: '#6600CC',
        mint: '#00CC99',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderWidth: {
        '3': '3px',
      },
      gridTemplateColumns: {
        'isometric': 'repeat(auto-fit, minmax(320px, 1fr))',
      },
    },
  },
  plugins: [],
};