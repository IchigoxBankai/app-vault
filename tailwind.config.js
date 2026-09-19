/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          bg: '#F7F8F5',
          surface: '#FFFFFF',
          softSage: '#EAF1EC',
          sage: '#5B9C8D',
          teal: '#73B8AA',
          blue: '#8AAFC4',
          text: '#202522',
          textSecondary: '#6F7772',
          textMuted: '#9AA19C',
          border: '#E1E6E2',
          borderLight: '#EDF0ED',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(30, 45, 35, 0.06)',
        'soft-hover': '0 14px 38px rgba(30, 45, 35, 0.10)',
        'modal': '0 20px 60px rgba(30, 45, 35, 0.15)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
}
