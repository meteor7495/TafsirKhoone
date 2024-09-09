import { Typography } from "@shared/ui";
import { IProps } from "../model";
import styles from "./spotlight.module.scss";
import Image from "next/image";

export const Spotlight = ({ data }: IProps) => {
    return (
        <div className={styles.spotlight}>
            <div>
                <div>
                    <Typography>{data.title}</Typography>
                </div>
                <div>
                    <Typography>{data.text}</Typography>
                </div>
            </div>
            <div>
                <div>
                    <Image
                        width={535}
                        height={592}
                        src={data.image}
                        alt={data.title}
                    />
                </div>
            </div>
        </div>
    );
};
