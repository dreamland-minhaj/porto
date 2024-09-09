/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'], // Custom sans-serif font
        serif: ['Georgia', 'serif'],              // Custom serif font
        mono: ['Menlo', 'monospace'],             // Custom monospace font
        shadows: ['"Shadows Into Light"', 'cursive'],
      },
      backgroundImage: {
        'slider1': "url('/src/Components/Slider/Images/slider1.jpg')",
        'slider2': "url('/src/Components/Slider/Images/slider2.jpg')",
        'slider3': "url('/src/Components/Slider/Images/slider3.jpg')",
        
      }
    },
  },
  plugins: [],
}

