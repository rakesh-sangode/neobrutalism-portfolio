/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: 'var(--main)',
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
    },
  },
  plugins: [require("tailwindcss-animate")],
}
