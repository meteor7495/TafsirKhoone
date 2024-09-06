import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface IProps extends LinkProps {
    children: ReactNode;
}
