/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'text': '#1b1913',
                'text-dark': '#eae8e1',
                'background': '#eae8e1',
                'background-dark': '#1b1913',
                'primary': '#d1ccbd',
                'secondary': '#e6e3db',
                'secondary-dark': '#181611',
                'accent': '#908564',
                'accent-dark': '#d1cbbc',
            }
        },
    },
    plugins: [],
}

