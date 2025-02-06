import {useEffect} from "react";
import {useBalance} from "../../features/balance/useBalance.ts";
import {useBots} from "../../features/bots/useBots.ts";
import DashboardHeader from "./DashboardHeader.tsx";
import Balance from "./balance/Balance.tsx";

const DashboardPage = () => {
    const initializeBalanceData = useBalance((state) => state.initializeData);
    const initializeBotData = useBots((state) => state.initializeData);

    useEffect(() => {
        initializeBotData();
        initializeBalanceData();
    }, [initializeBalanceData, initializeBotData]);

    return (
        <div className={"page"}>
            <DashboardHeader/>
            <Balance/>
        </div>
    )
}
export default DashboardPage
