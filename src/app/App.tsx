import './App.css'
import AppRouter from "./routes/AppRouter.tsx";
import TabNavigation from "../shared/components/tab-navigation/TabNavigation.tsx";

function App() {

    return (
        <div className={"app"}>
            <AppRouter/>
            <TabNavigation/>
        </div>
    )
}

export default App
