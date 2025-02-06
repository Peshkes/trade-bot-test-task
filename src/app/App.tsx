import './App.css'
import AppRouter from "./routes/AppRouter.tsx";
import TabNavigation from "../shared/components/tab-navigation/TabNavigation.tsx";
import SunBackgroundEffect from "../shared/components/sun-background-effect/SunBackgroundEffect.tsx";

function App() {

    return (
        <div className={"app"}>
            <AppRouter/>
            <TabNavigation/>
            <SunBackgroundEffect/>
        </div>
    )
}

export default App
