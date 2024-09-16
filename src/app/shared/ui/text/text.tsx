import { Text as MantineText } from "@mantine/core";
import { ITextProps } from "./text.interface";

export const Text = ({ children, ...rest }: ITextProps) => {
    return <MantineText {...rest}>{children}</MantineText>;
};
