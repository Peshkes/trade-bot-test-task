import styles from "./tabButton.module.css"
import NavButton from "../../ui/button/NavButton.tsx";
import {FC} from "react";

type Props = {
    Icon: FC;
    name: string;
    to: string;
    notifications?: number;
};

const TabButton = ({ Icon, name, to, notifications}: Props) => {
    return (
        <NavButton className={styles.button} to={to}>
            <Icon/>
            <p>{name}</p>
            {notifications && notifications > 0 && <div className={styles.notifications}>{notifications}</div>}
        </NavButton>
    );
};

export default TabButton
