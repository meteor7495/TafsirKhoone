import { Button as MantineButton } from "@mantine/core";
import { IButtonProps } from "./button.types";
import styles from "./button.module.scss";

export const Button = ({
    children,
    variant = "filled",

    ...rest
}: IButtonProps) => {
    return (
        <MantineButton className={styles.btn} variant={variant} {...rest}>
            {children}
        </MantineButton>
    );
};
