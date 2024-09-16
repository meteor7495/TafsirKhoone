import { Title as MantineTitle } from "@mantine/core";
import { ITitleProps } from "./title.interface";

export const Title = ({ children, ...rest }: ITitleProps) => {
    return <MantineTitle {...rest}>{children}</MantineTitle>;
};
