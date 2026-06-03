/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ember: '#f04438',
        saffron: '#f7b733',
        charcoal: '#120708',
        card: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(240, 68, 56, 0.22)',
      },
      backgroundImage: {
        'hero-food':
          "linear-gradient(135deg, rgba(18,7,8,0.92), rgba(18,7,8,0.62)), url('https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?auto=format&fit=crop&w=1800&q=80')",
      },
    },
  },
  plugins: [],
};
