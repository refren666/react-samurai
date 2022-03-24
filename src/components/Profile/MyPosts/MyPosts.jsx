import React from "react";
//  object with classes
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  // debugger
  const usersPosts = props.profilePage.usersPosts;

  const posts = usersPosts.map(
    (post, index) => <Post key={index} message={post.message} likes={post.likes}/>
  )

//  Creating reference to the element (like id)
  const newPostElement = React.createRef();

  const addNewPost = () => {
    if (props.newPostText) {
      props.addPost();
    }
  }

  const onTextInput = () => {
    const newPostText = newPostElement.current.value;
    props.updateNewPostText(newPostText);
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>  {/*ref = id*/}
          <textarea
            onChange={onTextInput}
            name="postTextArea"
            ref={newPostElement}
            cols="70" rows="3"
            placeholder={'Enter text here'}
            value={props.newPostText}/>
        </div>
        <button onClick={addNewPost}>Add post</button>
      </div>

      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;