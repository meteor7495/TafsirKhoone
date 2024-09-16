import { IData, Spotlight } from "@features/spotlight";
import { Title } from "../../../../_shared/ui";

export const OurServicesWidget = () => {
    const data: IData = {
        title: "تفسیر نویــــــــــن",
        text: "تفسیر نوین یک سامانه هوشمند خدمات پزشکی است که امکانات مختلفی مانند تفسیر پیشرفته آزمایش، بررسی تداخل های دارویی و... را برای عموم افراد جامعه فراهم می کند.",
        image: "/images/spotlight/person.png",
    };
    return (
        <div>
            <div>
                <Title>خدمات ما</Title>
            </div>
            <Spotlight data={data} />
        </div>
    );
};
