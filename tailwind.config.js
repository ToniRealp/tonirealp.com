module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
    plugins: [],
};
