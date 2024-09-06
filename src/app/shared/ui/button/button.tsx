import { Button as MantineButton } from "@mantine/core";
import { IProps } from "./button.types";
import styles from "./button.module.scss";

export const Button = ({
    children,
    variant = "filled",

    ...rest
}: IProps) => {
    return (
        <MantineButton className={styles.btn} variant={variant} {...rest}>
            {children}
        </MantineButton>
    );
};
