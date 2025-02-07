import {useEffect} from "react";
import {useBalance} from "../../features/balance/useBalance.ts";
import {useBots} from "../../features/bots/useBots.ts";
import DashboardHeader from "./DashboardHeader.tsx";
import Balance from "./balance/Balance.tsx";
import TimeRange from "./time-range/TimeRange.tsx";
import Bots from "./bots/Bots.tsx";
import Chart from "./chart/Chart.tsx";

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
            <Chart/>
            <Bots/>
            <TimeRange/>
        </div>
    )
}
export default DashboardPage
