import "../css/story.css";
import { Avatar } from "@material-ui/core";
const Story = ({ img, profileSrc, title }) => {
	return (
		<div className="story" style={{ backgroundImage: `url(${img})` }}>
			<Avatar src={profileSrc} className="story__avatar" />
			<h4>{title} </h4>
		</div>
	);
};
export default Story;
