import { Avatar, IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../css/post.css";
const Post = ({ Profilepic, image, username, timestamp, message }) => {
	return (
		<div className="post">
			<div className="post__top">
				<Avatar src={Profilepic} className="post__avatar" />
				<div className="post__topInfo">
					<h3>{username}</h3>
					<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
				</div>
			</div>
			<div className="post__bottom">
				<p>{message}</p>
			</div>
			<div className="post__image">
				<img src={image} alt="profile" />
			</div>
			<div className="post__options">
				<div className="post__option">
					<IconButton >
						<ThumbUpIcon />
					</IconButton>
					<p>Like</p>
				</div>
				<div className="post__option">
					<IconButton>
						<ChatBubbleIcon />
					</IconButton>
					<p>Comment</p>
				</div>
				<div className="post__option">
					<IconButton>
						<NearMeIcon />
					</IconButton>
					<p>Share</p>
				</div>
				<div className="post__option">
					<IconButton>
						<ExpandMoreIcon />
					</IconButton>
					<IconButton>
						<AccountCircleIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};
export default Post;
