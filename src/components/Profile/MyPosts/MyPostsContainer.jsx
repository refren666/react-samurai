//  object with classes
import React from "react";
import {connect} from "react-redux";

import {addPostActionCreator, onTextInputActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

/*const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState().profilePage;

          const addNewPost = () => {
            store.dispatch(addPostActionCreator()); // dispatch(action); action - object with type
          }

          const onTextInput = (newPostText) => {
            store.dispatch(onTextInputActionCreator(newPostText)); // dispatch(action)
          }

          return <MyPosts
            updateNewPostText={onTextInput}
            addPost={addNewPost}
            posts={state.usersPosts}
            newPostText={state.newPostText}
          />
        }
      }
    </StoreContext.Consumer>
  )
}*/

const mapStateToProps = (state) => {
  // debugger
  return {
    // state info
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (newPostText) => {
      dispatch(onTextInputActionCreator(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;