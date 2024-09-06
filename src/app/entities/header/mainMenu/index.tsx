import { Link } from "@shared/ui";
import styles from "./mainMenu.module.scss";

export const MainMenu = () => {
    return (
        <ul className={`${styles.root}`}>
            <li>
                <Link href="/">خانه</Link>
            </li>
            <li>
                <Link href="/">خدمات ما</Link>
            </li>
            <li>
                <Link href="/">درباره ما</Link>
            </li>
            <li>
                <Link href="/">تماس با ما</Link>
            </li>
        </ul>
    );
};
