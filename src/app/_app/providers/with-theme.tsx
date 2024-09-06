"use client";
import { createTheme, MantineProvider } from "@mantine/core";

export const theme = createTheme({
    /** Your theme override here */
    fontFamily: "var(--font-iranyekan)",
    colors: {
        "blue-custom": [
            "#E6F0FF", // Lightest blue
            "#B3D1FF", // Lighter blue
            "#80B3FF", // Light blue
            "#4D94FF", // Medium blue
            "#1A75FF", // Bright blue
            "#0056E0", // Base color
            "#0048C5", // Slightly darker than base color
            "#003699", // Dark blue
            "#00266C", // Darker blue
            "#001540", // Darkest blue
        ],
    },
    primaryColor: "blue-custom", // Set the name of the color as the primary color
    
});

interface IProps {
    children: React.ReactNode;
}

export const MantineThemeProvider = ({ children }: IProps) => {
    return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
