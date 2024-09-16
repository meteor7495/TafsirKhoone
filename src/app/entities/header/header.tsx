import { Logo } from "../../_shared/ui";
import styles from "./header.module.scss";
import { MainMenu } from "./mainMenu";

export const Header = () => {
    return (
        <header className={`container ${styles.root}`}>
            <div>
                <Logo />
            </div>
            <div className="flex-1">
                <MainMenu />
            </div>
            <div></div>
        </header>
    );
};
