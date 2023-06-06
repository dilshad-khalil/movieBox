/** @type {import('tailwindcss').Config} */
module.exports = {
    modern: ['class', '[data-mode="modern"]'],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                secondaryColor: '#C1C1C1',
                ratinColor: '#E8CC6B',
                buttonBg: '#7189DD'
            }
        },
    },
    plugins: [],
}