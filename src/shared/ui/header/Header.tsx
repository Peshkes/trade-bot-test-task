import styles from "./header.module.css"
import {ReactNode} from "react";

type Props = {
    headerText?: string;
    leftChildren?: ReactNode;
    rightChildren?: ReactNode;
}

const Header = ({headerText, leftChildren, rightChildren}: Props) => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                {leftChildren}
            </div>
            <h2>{headerText}</h2>
            <div className={styles.right}>
                {rightChildren}
            </div>
        </header>
    )
}
export default Header
