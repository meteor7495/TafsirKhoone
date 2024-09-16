import { Title as MantineTitle } from "@mantine/core";
import { IProps } from "./title.interface";

export const Title = ({ children, ...rest }: IProps) => {
    return <MantineTitle {...rest}>{children}</MantineTitle>;
};
