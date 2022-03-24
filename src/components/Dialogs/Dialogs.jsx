import React from "react";

import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";

const Dialogs = (props) => {
  const state = props.dialogsPage;
  // debugger

  const users = state.usersData.map(
    (user, index) => <DialogItem key={index} name={user.name} id={user.id} photo={user.photo}/>
  );

  const userMessages = state.usersMessages.map(
    (message, index) => <Message key={index} message={message.message}/>
  );

  const newMessageElement = React.createRef();
  const messageBody = state.newMessageText;

  const addNewMessage = () => {
    if (state.newMessageText) {
      props.sendMessage();
    }
  }

  const onMessageInput = (e) => {
    // const messageText = newMessageElement.current.value;
    // OR
    let messageText = e.target.value; // Те, що в textarea
    props.updateNewMessageText(messageText)
  }

  return (
    <div className={classes.dialogs}>
      <div>
        {users}
      </div>

      <div className={classes.messages}>
        {userMessages}
        <div>
                    <textarea
                      onChange={onMessageInput}
                      name="messageTextArea"
                      ref={newMessageElement}
                      cols="60" rows="3"
                      placeholder={'Enter message'}
                      value={messageBody}/>
        </div>
        <button onClick={addNewMessage}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs;