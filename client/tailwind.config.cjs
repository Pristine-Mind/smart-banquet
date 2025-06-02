module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          playfair: ['Playfair Display', 'serif'],
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          scroll: 'scroll 20s linear infinite',
        },
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
};
