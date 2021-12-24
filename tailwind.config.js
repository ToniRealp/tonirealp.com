module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
