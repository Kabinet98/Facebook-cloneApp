import "../css/fedd.css";
import MessengerSender from "./messengerSender";
import Post from "./post";
import StoryReel from "./storyReel";
import db from "../firebase";
import { useState, useEffect } from "react";
const Fedd = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
	db.collection("posts")
	.orderBy('timestamp', 'desc') 
	.onSnapshot((snapshot) =>
      setPost(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__storyReel">
        <StoryReel />
	  	<MessengerSender />
      </div>
      {post.map((posts) => (
        <Post
          key={posts.id}
          Profilepic={posts.data.profilePic}
          image={posts.data.image}
          username={posts.data.username}
          timestamp={posts.data.timestamp}
          message={posts.data.message}
        />
      ))}
    </div>
  );
};
export default Fedd;
