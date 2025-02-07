import {BotNames} from "../../../features/bots/botsTypes.ts";
import BotButton from "./bot-button/BotButton.tsx";
import styles from "./bots.module.css"
import {useBots} from "../../../features/bots/useBots.ts";

const Bots = () => {
    const {selectedInterval, botsData} = useBots();
    return (
        <div className={styles.gallery}>
            {Object.keys(BotNames).map((bot) => {
                let percent : string | number = "загрузка";
                if (botsData) {
                    const botData = botsData.find((b) => b.name === bot);
                    percent = botData ? botData[selectedInterval] ?? 0 : 0;
                }
                return <BotButton key={bot} name={bot as BotNames} percents={percent}/>;
            })}
        </div>
    )
}
export default Bots
