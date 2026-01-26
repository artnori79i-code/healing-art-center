/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'playfair': ['Nanum Gothic', 'sans-serif'],
                'outfit': ['Nanum Gothic', 'sans-serif'],
                'pretendard': ['Nanum Gothic', 'sans-serif'],
                'nanum': ['Nanum Gothic', 'sans-serif'],
                'gothic': ['Nanum Gothic', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
