import "../css/sidebar.css";
import SidebarRow from "./sidebarRow";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StorefrontIcon from "@material-ui/icons/Storefront";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import {UseStateValue} from './stateProvider'
const Sidebar = () => {
	const [{user}, dispatch] = UseStateValue();
	return (
		<div className="sidebar">
			<SidebarRow
				src={user.photoURL}
				title={user.displayName}
			/>
			<SidebarRow
				Icon={LocalHospitalIcon}
				title="Covid 19 Information Center"
			/>
			<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
			<SidebarRow Icon={PeopleIcon} title="Friends" />
			<SidebarRow Icon={ChatIcon} title="Messenger" />
			<SidebarRow Icon={StorefrontIcon} title="Marketplace" />
			<SidebarRow Icon={VideoLibraryIcon} title="Videos" />
			<SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
		</div>
	);
};
export default Sidebar;
