import { Text as MantineText } from "@mantine/core";
import { IProps } from "./text.interface";

export const Text = ({ children, ...rest }: IProps) => {
    return <MantineText {...rest}>{children}</MantineText>;
};
