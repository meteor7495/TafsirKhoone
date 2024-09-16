import NextLink from "next/link";
import styles from "./link.module.scss";
import { ILinkProps } from "./link.interface";

export const Link = ({ children, ...rest }: ILinkProps) => {
    return (
        <NextLink className={styles.root} {...rest}>
            {children}
        </NextLink>
    );
};
