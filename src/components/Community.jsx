import React, {useState, useEffect} from "react";
const Community = () => {
const [posts, setPosts] = useState([]);
const [newPost, setNewPost] = useState("");


// Parse through localstorage retrieving saved posts or an empty array on component mount, set the posts to savedPosts 
useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("communityPosts")) || [];
    setPosts(savedPosts);
}, []);

// Navigating posts
const handlePostChange = (e) => {
    setNewPost(e.target.value)
}

const handlePostSubmit = () => {
    const post = {
        content: newPost,
        author: "Anonymous Goblin", // Can Add user authentication to get actual user name
        timestamp: new Date().toLocaleString()
    };
// setPosts will access prevPosts and then spread prevPosts into posts updating the state
    setPosts((prevPosts) => [post, ...prevPosts]);

    // sessionStorage data gets cleared when the page session ends — that is, when the page is closed.
    // localStorage is similar to sessionStorage, except that while localStorage data has no expiration time
 // Save posts to local storage
localStorage.setItem("communityPosts", JSON.stringify([post, ...posts]));

setNewPost("");
};




    return (
        <div>
            <h1>Welcome Family, What's on your mind today?</h1>
            <div>
                <input 
                type= "text"
                name= "createPost"
                className="zgT5"
                placeholder="Create Post"
                value={newPost}
                onChange={handlePostChange}
                />
                    <button onClick={handlePostSubmit}>Post</button>
                </div>
                <div>
                {posts.map((post, index) => (
        <div key={index}>
            <p>{post.content}</p>
            <span style={{ color: "#787C7E" }} className="2fcz">
            Posted by {post.author} on {post.timestamp}
            </span>
            </div>))}
            </div>
        </div>
    )

};

export default Community;