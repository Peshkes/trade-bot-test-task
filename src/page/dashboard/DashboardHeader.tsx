import Button from "../../shared/ui/button/Button.tsx";
import MenuSvg from "../../shared/images/components/MenuSVG.tsx";
import RefreshSvg from "../../shared/images/components/RefreshSVG.tsx";
import Header from "../../shared/ui/header/Header.tsx";

const DashboardHeader = () => {
    return (
        <Header headerText={"Dashboard"}
                leftChildren={
                    <Button>
                        <MenuSvg/>
                    </Button>
                }
                rightChildren={
                    <Button>
                        <RefreshSvg/>
                    </Button>
                }
        />
    )
}
export default DashboardHeader
