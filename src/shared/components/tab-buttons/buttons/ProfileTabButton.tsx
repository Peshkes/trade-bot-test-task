import TabButton from "../TabButton.tsx";
import ProfileSVG from "../../../images/components/ProfileSVG.tsx";

const ProfileTabButton = () => <TabButton name="Profile" to={"/profile"} Icon={ProfileSVG} notifications={3}/>

export default ProfileTabButton
