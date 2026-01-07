/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {colors: {
        'visyon-gold': '#A68B67',
        'visyon-dark': '#1C1C1C',
        'visyon-gray': '#7A7A7A',
        'visyon-light': '#F9F7F4',
      },}
    },
    plugins: []
};
 