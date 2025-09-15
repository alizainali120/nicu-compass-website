/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fefcf3',
          100: '#fef7e6',
          200: '#fdecc2',
          300: '#fcdda3',
          400: '#f9c578',
          500: '#f4b565',
          600: '#e8a055',
          700: '#d18a47',
          800: '#b8743a',
          900: '#9f5f2f',
        },
        accent: {
          50: '#f8f6f0',
          100: '#f0ebe0',
          200: '#e8dcc6',
          300: '#d4c5a6',
          400: '#c4a484',
          500: '#b08968',
          600: '#9a7456',
          700: '#836148',
          800: '#6d4f3a',
          900: '#5a402f',
        },
        lavender: {
          50: '#faf8ff',
          100: '#f4f0ff',
          200: '#e6d7ff',
          300: '#d0b8ff',
          400: '#b794f6',
          500: '#9f7aea',
          600: '#805ad5',
          700: '#6b46c1',
          800: '#553c9a',
          900: '#44337a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}