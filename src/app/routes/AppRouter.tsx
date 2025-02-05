import {Route, Routes} from "react-router-dom";
import DashboardPage from "../../page/DashboardPage.tsx";
import ErrorPage from "../../page/ErrorPage.tsx";
import ProfilePage from "../../page/ProfilePage.tsx";
import MegabotPage from "../../page/MegabotPage.tsx";
import BotMarketPage from "../../page/BotMarketPage.tsx";
import CoinPricesPage from "../../page/CoinPricesPage.tsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element={<DashboardPage/>} />
            <Route path={"/profile"} element={<ProfilePage/>} />
            <Route path={"/megabot"} element={<MegabotPage/>} />
            <Route path={"/bot-market"} element={<BotMarketPage/>} />
            <Route path={"/coin-prices"} element={<CoinPricesPage/>} />
            <Route path={"*"} element={<ErrorPage/>} />
        </Routes>
    )
}
export default AppRouter
