import "../css/messengerSender.css";
import { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import {UseStateValue} from './stateProvider'
import { Avatar } from "@material-ui/core";
import firebase from 'firebase'
import db from '../firebase'
const MessengerSender = () => {
	const [{user}, dispatch] = UseStateValue();
	const [input, setInput] = useState("");
	const [imgURL, setImgURL] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		db.collection('posts').add({
			message: input,
			image: imgURL,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			username: user.displayName,
			profilePic: user.photoURL
		})

		setImgURL("");
		setInput("");
	};
	const onChange = (e) => {
		setInput(e.target.value);
	};
	const changeImgURL = (e) => {
		setImgURL(e.target.value);
	};
	return (
		<div className="messengerSender">
			<div className="messageSender__top">
				<Avatar className="messageSender__avatar" src={user.photoURL} />
				<form>
					<input
						value={input}
						onChange={onChange}
						type="text"
						name=""
						id="first__input"
						placeholder={`What's in your mind , ${user.displayName}?`}
					/>
					<input
						value={imgURL}
						onChange={changeImgURL}
						type="text"
						name=""
						id="second__input"
						placeholder="Image URL (optional)"
					/>
					<button onClick={handleSubmit} type="submit">
						Hidden Button
					</button>
				</form>
			</div>
			<div className="messageSender__bottom">
				<div className="messageSender__option">
					<VideocamIcon style={{ color: "red" }} />
					<h5>Photo/Video</h5>
				</div>
				<div className="messageSender__option">
					<PhotoLibraryIcon style={{ color: "green" }} />
					<h5>Live Video</h5>
				</div>
				<div className="messageSender__option">
					<InsertEmoticonIcon style={{ color: "orange" }} />
					<h5>Feeling/Activity</h5>
				</div>
			</div>
		</div>
	);
};
export default MessengerSender;
