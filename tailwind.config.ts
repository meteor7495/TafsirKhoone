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
    secondary: "#66CCB1",
    "secondary-content": "#FFFFFF",
    "secondary-focus": generateDarkenColorFrom("#66CCB1"),
    accent: "#FFB74D",
    "accent-content": "#FFFFFF",
    "accent-focus": generateDarkenColorFrom("#FFB74D"),
    neutral: "#5F6368",
    "neutral-content": generateForegroundColorFrom("#FFFFFF"),
    "neutral-focus": generateDarkenColorFrom("#5F6368", 0.03),
    "base-25": "#353d47",
    "base-50": "#2a323c",
    "base-75": "#20272e",
    "base-100": "#1d232a",
    "base-200": "#191e24",
    "base-300": "#15191e",
    "base-content": "#A6ADBB",
    info: "#009385",
    "info-content": generateForegroundColorFrom("#009385"),
    success: "#40C897",
    "success-content": generateForegroundColorFrom("#40C897"),
    warning: "#FF6B00",
    "warning-content": generateForegroundColorFrom("#FF6B00"),
    error: "#FF004D",
    "error-content": generateForegroundColorFrom("#FF004D"),
    "gradient-first": "#009385",
    "gradient-second": "#00A57E",
    "link-color": "#1F2434",
};

const config: Config = {
    mode: "jit",
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx,cjs}"],
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
