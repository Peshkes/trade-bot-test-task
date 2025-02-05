import styles from "./tabButton.module.css"
import NavButton from "../../ui/button/NavButton.tsx";
import {FC} from "react";

type Props = {
    Icon: FC;
    name: string;
    to: string;
};

const TabButton = ({ Icon, name, to}: Props) => {
    return (
        <NavButton className={styles.button} to={to}>
            <Icon/>
            <p>{name}</p>
        </NavButton>
    );
};

export default TabButton
