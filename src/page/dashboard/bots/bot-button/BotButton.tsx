import {BotNames} from "../../../../features/bots/botsTypes.ts";
import SVG from "../../../../shared/images/components/BotSVG.tsx"
import styles from "./botButton.module.css"
import {useBots} from "../../../../features/bots/useBots.ts";

type Props = {
    name: BotNames
    percents: string | number
}

const BotButton = ({name, percents}: Props) => {
    const setSelectedBot = useBots(state => state.setSelectedBot);
    const selectedBot = useBots(state => state.selectedBot);

    const removeBotSuffix = (str: string): string => str.endsWith('_bot') ? str.slice(0, -4) : str;
    const color = removeBotSuffix(name);
    const percentClass =
        typeof percents === "string"
            ? styles.stringPercents
            : percents >= 0
                ? styles.positivePercents
                : styles.negativePercents;

    return (
        <button className={styles.button + " " + (selectedBot === name ? styles.active : '')} onClick={() => setSelectedBot(name)}>
            <SVG color={color}/>
            <p>{BotNames[name]}</p>
            <p className={percentClass}>{percents}%</p>
        </button>
    )
}
export default BotButton
