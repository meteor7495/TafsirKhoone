import { IData, Spotlight } from "@features/spotlight";

export const SpotlightWidget = () => {
    const data: IData = {
        title: "تفسیر نویــــــــــن",
        text: "تفسیر نوین یک سامانه هوشمند خدمات پزشکی است که امکانات مختلفی مانند تفسیر پیشرفته آزمایش، بررسی تداخل های دارویی و... را برای عموم افراد جامعه فراهم می کند.",
        image: "/images/spotlight/person.png",
    };
    return (
        <div>
            <Spotlight data={data} />
        </div>
    );
};
