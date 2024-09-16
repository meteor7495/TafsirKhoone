import { Icon, ServiceCard, Text, Title } from "@shared/ui";
import { IProps } from "../model";
import styles from "./spotlight.module.scss";
import Image from "next/image";

export const Spotlight = ({ data }: IProps) => {
    return (
        <div className={styles.spotlight}>
            <div className="flex flex-col gap-4 justify-center">
                <div>
                    <Title size={"64"} order={1}>
                        {data.title}
                    </Title>
                </div>
                <div>
                    <Text size={"lg"}>{data.text}</Text>
                </div>
            </div>
            <div>
                <div>
                    <Image
                        width={335}
                        height={392}
                        src={data.image}
                        alt={data.title}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 justify-center">
                <ServiceCard>
                    تفسیر آزمایش ساده <Icon icon="chevron-left" />
                </ServiceCard>
                <ServiceCard>
                    تفسیر آزمایش قند و فشار <Icon icon="chevron-left" />
                </ServiceCard>
                <ServiceCard>
                    تفسیر آزمایش کامل <Icon icon="chevron-left" />
                </ServiceCard>
                <ServiceCard>
                    بررسی تداخل های دارویی <Icon icon="chevron-left" />
                </ServiceCard>
            </div>
        </div>
    );
};
