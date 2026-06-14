export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        ink: '#04101f',
        panel: 'rgba(15, 23, 42, 0.72)',
        panelStrong: 'rgba(10, 16, 30, 0.88)',
        accent: '#f7b955',
        mint: '#5eead4',
      },
      boxShadow: {
        glow: '0 30px 80px rgba(0, 0, 0, 0.32)',
      },
    },
  },
  plugins: [],
};
