import React from "react";
import {connect} from "react-redux";

import {sendMessageActionCreator, onMessageInputActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

/*const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState().messagesPage;

          const addNewMessage = () => {
            // УВАГА! ВИКЛИКАЄМ БО ПОТРІБНО ПЕРЕДАТИ РЕЗУЛЬТАТ ВІДПРАЦЮВАННЯ! ФУНКЦІЯ ПОВЕРТАЄ ОБ'ЄКТ ДІЇ (action)!
            store.dispatch(sendMessageActionCreator()) // dispatch(action Object) Object - in store (action creator)
          }

          const onMessageInput = (messageText) => {
            store.dispatch(onMessageInputActionCreator(messageText)); // dispatch(Object) Object - in store (action creator)
          }
          return <Dialogs
            updateNewMessageText={onMessageInput}
            sendMessage={addNewMessage}
            dialogsPage={state}
          />
        }
      }
    </StoreContext.Consumer>
  )
}*/

// HERE IS CODE WHICH DO SAME THING AS ABOVE BUT USING REACT-REDUX LIBRARY!
const mapStateToProps = (state) => {
  return {
    // state info
    dialogsPage: state.messagesPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    },
    updateNewMessageText: (messageText) => {
      dispatch(onMessageInputActionCreator(messageText));
    }
  }
}
// WITH 2 FUNCTIONS ABOVE WE CONFIGURED OUR 'CONNECT'
// First I invoked connect function, it'll return another function, and we invoke function returned by connect on Dialogs component!
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); // here we connected Dialogs component to our store! connect(PROPS)!!!

export default DialogsContainer;