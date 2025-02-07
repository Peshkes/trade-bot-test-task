import {Interval} from "../../../features/bots/botsTypes.ts";
import TimeRangeButton from "./time-range-button/TimeRangeButton.tsx";
import styles from "./timeRange.module.css"
import {useBots} from "../../../features/bots/useBots.ts";

const TimeRange = () => {
    const selectedInterval = useBots((state) => state.selectedInterval);
    const setInterval = useBots((state) => state.setInterval);
    return (
        <div className={styles.container}>
            <div><p>Time Range:</p></div>
            <div className={styles.buttons}>
                {Object.keys(Interval)
                    .slice(0, -1) // Убираем последний элемент, так как "all_time" идет последним
                    .map((timeRange) => (
                        <TimeRangeButton key={timeRange} title={timeRange.endsWith("d") ? `${timeRange}ays` : timeRange}
                                         onClick={() => setInterval(timeRange as Interval)} isActive={selectedInterval === timeRange}/>
                    ))}
            </div>
            <div className={styles.last}>
                <TimeRangeButton title="All Time" onClick={() => setInterval(Interval.all_time)} isActive={selectedInterval === Interval.all_time}/>
            </div>
        </div>
    )
}
export default TimeRange
