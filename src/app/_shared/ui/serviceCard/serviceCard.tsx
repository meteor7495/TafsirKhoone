import { Size } from "../../types";
import classNames from "classnames";
import { IServiceCardProps } from "./serviceCard.interface";
import styles from "./serviceCard.module.scss";

const sizeClasses: Record<Size, string> = {
    tiny: "h-12 w-[300px]",
    small: "h-16 w-[350px]",
    normal: "h-20 w-[300px]",
    large: "h-24 w-[400px]",
};

const hoverOption: Record<string, string> = {
    left: "hover:left-6",
    top: "hover:-top-6",
};

export const ServiceCard = ({
    size = "normal",
    className,
    hoverTo = "left",
    children,
}: IServiceCardProps) => {
    const classes = classNames(
        sizeClasses[size],
        className,
        "gradient-reverse",
        styles.root,
        hoverOption[hoverTo],
    );
    return <div className={`${classes}`}>{children}</div>;
};
