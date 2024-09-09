import { Config } from "tailwindcss";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);

export function generateDarkenColorFrom(
    input: string,
    percentage = 0.07,
): string {
    return colord(input).darken(percentage).toHex();
}

export function generateForegroundColorFrom(
    input: string,
    percentage = 0.8,
): string {
    return colord(input)
        .mix(colord(input).isDark() ? "white" : "black", percentage)
        .toHex();
}

type ColorObject = {
    [key: string]: string;
};

export const tailwindColors: ColorObject = {
    current: "currentColor",
    transparent: "transparent",
    white: "#E5EAF5",
    primary: "#00A57E",
    "primary-content": "#FFFFFF",
    "primary-focus": generateDarkenColorFrom("#00A57E"),
    secondary: "#232D40",
    "secondary-content": "#FFFFFF",
    "secondary-focus": generateDarkenColorFrom("#232D40"),
    accent: "#40C897",
    "accent-content": "#FFFFFF",
    "accent-focus": generateDarkenColorFrom("#40C897"),
    neutral: "#FF6B00",
    "neutral-content": generateForegroundColorFrom("#FFFFFF"),
    "neutral-focus": generateDarkenColorFrom("#FF6B00", 0.03),
    "base-25": "#353d47",
    "base-50": "#2a323c",
    "base-75": "#20272e",
    "base-100": "#1d232a",
    "base-200": "#191e24",
    "base-300": "#15191e",
    "base-content": "#A6ADBB",
    info: "#0048C5",
    "info-content": generateForegroundColorFrom("#0048C5"),
    success: "#40C897",
    "success-content": generateForegroundColorFrom("#40C897"),
    warning: "#FF6B00",
    "warning-content": generateForegroundColorFrom("#FF6B00"),
    error: "#FF004D",
    "error-content": generateForegroundColorFrom("#FF004D"),
    "gradient-first": "#34eaa0",
    "gradient-second": "#0fa2e9",
    "link-color": "#1F2434",
};

const config: Config = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        colors: tailwindColors,
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                lg: "3rem",
                xl: "4rem",
            },
        },
        extend: {
            backgroundImage: {
                "hero-pattern": "url('/images/tile.svg')",
            },
            fontWeight: {
                "thin": "100",
                "light": "300",
                "normal": "400",
                "medium": "600",
                "bold": "700",
                "extrabold": "900",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
export default config;
