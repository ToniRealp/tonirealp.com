module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    purge: {
        options: {
            safelist: ["delay-1500", "delay-2000", "delay-2500", "delay-3000", "delay-3500", "delay-4000"],
        },
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
            },
            colors: {
                primary: "#3730a3",
                "primary-500": "#6366f1",
            },
            transitionDelay: {
                0: "0ms",
                1500: "1500ms",
                2000: "2000ms",
                2500: "2500ms",
                3000: "3000ms",
                3500: "3500ms",
                4000: "4000ms",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
