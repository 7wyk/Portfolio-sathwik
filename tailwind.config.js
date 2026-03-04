/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background-color)",
                surface: "var(--surface-color)",
                navy: {
                    light: "var(--light-navy)",
                    lightest: "var(--lightest-navy)",
                },
                slate: {
                    dark: "var(--dark-slate)",
                    DEFAULT: "var(--slate)",
                    light: "var(--light-slate)",
                    lightest: "var(--lightest-slate)",
                },
                accent: "var(--theme-color)",
            },
            fontFamily: {
                inter: ["var(--inter)", "sans-serif"],
                mono: ["var(--fira-code)", "monospace"],
            },
        },
    },
    plugins: [],
};
