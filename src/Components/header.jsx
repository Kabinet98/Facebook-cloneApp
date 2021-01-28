import "../css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import {UseStateValue} from './stateProvider'
const Header = () => {
	const [{user}, dispatch] = UseStateValue();
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg"
					alt="facebook logo"
				/>
				<div className="header__left__input">
					<SearchIcon id="search__icon" />
					<input type="text" name="" id="input__left" placeholder="Rechercher sur Facebook" />
				</div>
				<div className="header__left__input__mobile">
					<IconButton id="ib">
						<SearchIcon />
					</IconButton>
				</div>
			</div>
			<div className="header__middle">
				<div className="header__option header__option__active">
					<HomeIcon fontSize="default" />
				</div>
				<div className="header__option">
					<FlagIcon fontSize="default" />
				</div>
				<div className="header__option">
					<SubscriptionsOutlinedIcon fontSize="default" />
				</div>
				<div className="header__option">
					<StorefrontOutlinedIcon fontSize="default" />
				</div>
				<div className="header__option">
					<SupervisedUserCircleOutlinedIcon fontSize="default" />
				</div>
			</div>
			<div className="header__right">
				<div className="header__info">
					<Avatar src={user.photoURL} />
					<h4>{user.displayName} </h4>
				</div>
				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
            <div className="app__body">
                
            </div>
		</div>
	);
};
export default Header;
