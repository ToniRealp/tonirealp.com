/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
            },
            colors: {
                primary: "#3730a3",
                "primary-500": "#6366f1",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
