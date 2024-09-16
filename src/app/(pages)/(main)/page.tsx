import { OurServicesWidget, SpotlightWidget } from "@widgets/main";

export default async function Home() {
    return (
        <div className="container gap-24 flex flex-col">
            <div className="w-full">
                <SpotlightWidget />
            </div>
            <div className="w-full">
                <OurServicesWidget />
            </div>
        </div>
    );
}
