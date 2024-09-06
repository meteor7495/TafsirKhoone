import NextLink from "next/link";
import styles from "./link.module.scss";
import { IProps } from "./link.interface";

export const Link = ({ children, ...rest }: IProps) => {
    return (
        <NextLink className={styles.root} {...rest}>
            {children}
        </NextLink>
    );
};
