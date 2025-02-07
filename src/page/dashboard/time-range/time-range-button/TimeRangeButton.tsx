import Button from "../../../../shared/ui/button/Button.tsx";
import styles from "./timeRangeButton.module.css"

type Props = {
    title: string;
    onClick: () => void;
    isActive?: boolean;
}

const TimeRangeButton = ({title, onClick, isActive}: Props) => {
    return <Button className={styles.button + " " + (isActive ? styles.active : '')}
                   isActive={isActive} onClick={onClick}>{title}</Button>
}

export default TimeRangeButton
