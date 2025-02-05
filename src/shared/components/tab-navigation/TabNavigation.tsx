import styles from "./tabNavigation.module.css"
import DashboardTabButton from "../tab-buttons/buttons/DashboardTabButton.tsx";
import MegabotTabButton from "../tab-buttons/buttons/MegabotTabButton.tsx";
import MarketTabButton from "../tab-buttons/buttons/MarketTabButton.tsx";
import CoinPricesTabButton from "../tab-buttons/buttons/CoinPricesTabButton.tsx";
import ProfileTabButton from "../tab-buttons/buttons/ProfileTabButton.tsx";

const TabNavigation = () => {
    return (
        <nav className={styles.navigation}>
            <DashboardTabButton/>
            <MegabotTabButton/>
            <MarketTabButton/>
            <CoinPricesTabButton/>
            <ProfileTabButton/>
        </nav>
    )
}
export default TabNavigation
