// Action types
const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_INPUT = 'CHANGE-MESSAGE-INPUT';

// result of getState()
const initialState = {
  // users
  usersData: [
    {
      id: 1,
      name: 'Kokos',
      photo: 'https://pm1.narvii.com/6058/6d8e5007656f2afa134b1321fbec5d26b2ffe501_hq.jpg'
    },
    {
      id: 2,
      name: 'Paltos',
      photo: 'https://pbs.twimg.com/profile_images/2901211112/da6416a8c160379bad0c33b48a25adb7_400x400.jpeg'
    },
    {
      id: 3,
      name: 'Kolhoz',
      photo: 'https://www.teahub.io/photos/full/33-339406_patrick-wallpaper-patrick-star-cute-face.jpg'
    }
  ],
  // messages
  usersMessages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'How was your day?'},
    {id: 4, message: 'Hope you are doing fine'},
    {id: 5, message: 'Take it easy'}
  ],
  newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 6,
        message: state.newMessageText
      };

      state.usersMessages.push(newMessage);
      state.newMessageText = '';
      break;

    case CHANGE_MESSAGE_INPUT:
      state.newMessageText = action.messageText;
      break;

    default:
      return state;
  }

  return state;

}

// Тут ті об'єкти, що ми передаєм в dispatched(action)
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const onMessageInputActionCreator = (text) => ({type: CHANGE_MESSAGE_INPUT, messageText: text})

export default dialogsReducer;