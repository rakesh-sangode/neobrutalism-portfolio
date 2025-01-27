/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: 'var(--main)',
        bagcolor: '#212121',
        overlay: 'var(--overlay)',
        bg: 'var(--bg)',
        containerBg: 'var(--container-bg)',
        bw: 'var(--bw)',
        blank: 'var(--blank)',
        text: 'var(--text)',
        mtext: 'var(--mtext)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        ringOffset: 'var(--ring-offset)',
        themelight: '#DFE5F2',
        thememain: '#88AAEE',

        secondaryBlack: '#212121',
      },
      borderRadius: {
        base: '10px'
      },
      boxShadow: {
        shadow: 'var(--shadow)'
      },
      translate: {
        boxShadowX: '6px',
        boxShadowY: '5px',
        reverseBoxShadowX: '-6px',
        reverseBoxShadowY: '-5px',
      },
      fontFamily: {
        dm_sans: ['DM Sans', 'sans-serif'],
      },
      fontWeight: {
        normal: '500',
        heading: '700',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
