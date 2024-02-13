import React, {useState, useEffect} from "react";
const Community = () => {
    // Hook managing the state of the community posts,
    // initial value of an empty array
const [posts, setPosts] = useState([]);

// Hook managing state of newPosts by user, inital value of empty string
const [newPost, setNewPost] = useState("");

// Note;
// localStorage can only store data as strings
// When you try to store an array or an object directly using localStorage.setItem, JavaScript will implicitly call toString() on the array or object, resulting in a string representation that may not be useful when retrieving the data later.
// By using JSON.stringify(posts), you are converting the array of posts into a JSON-formatted string. JSON (JavaScript Object Notation) is a text-based data interchange format that is widely supported. It provides a way to represent complex data structures, like arrays and objects, as strings. When you need to retrieve the data from localStorage, you can then use JSON.parse to convert the JSON string back into a JavaScript object or array.
// Parse through localstorage retrieving posts or an empty array if there are no posts, set the posts to savedPosts 
useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("communityPosts")) || [];
    setPosts(savedPosts);
}, []);

// function to update the newPost state as the user types in the input field.
const handlePostChange = (e) => {
    setNewPost(e.target.value)
}

// function to submit post when user is ready. Creates new post object, updates the post state, saves the post to local storage, then clears the input field
const handlePostSubmit = () => {
    const post = {
        content: newPost,
        author: "Anonymous Goblin", // Can Add user authentication to get actual user name
        timestamp: new Date().toLocaleString()
    };

    setPosts((prevPosts) => [post, ...prevPosts]);
// localstorage mdn.;
    // sessionStorage data gets cleared when the page session ends — that is, when the page is closed.
    // localStorage is similar to sessionStorage, except that while localStorage data has no expiration time

 // Save posts to local storage, converts the posts array to a JSON string 
localStorage.setItem("communityPosts", JSON.stringify([post, ...posts]));
// Clear input
setNewPost("");
};


// 1- input for user to type in and said input is assigned to newPost
// 2- handlePostChange triggers when user posts
// 3-  Post button triggers handlePostSubmit
// 4- mapped posts array is used to display each post along with its author and timestamp
// 5- 
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