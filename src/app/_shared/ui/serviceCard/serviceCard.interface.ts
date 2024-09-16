import { ComponentBase } from "../../types";
import { HTMLAttributes } from "react";

export interface IServiceCardProps
    extends ComponentBase,
        HTMLAttributes<HTMLElement> {
    hoverTo?: "top" | "left";
}
