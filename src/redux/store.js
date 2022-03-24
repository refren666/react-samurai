// STORE --> OOP (інкапсулюєм)
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  // '_' - private property
  _state: {

    profilePage: {
      // posts
      usersPosts: [
        {id: 1, message: 'Продам гараж в Бердичеві', likes: 125},
        {id: 2, message: 'Дівчата привіт', likes: 3},
        {id: 3, message: 'Шо там?)', likes: 4758},
        {id: 4, message: 'Один лайк і я сьогодні не йду в школу', likes: 1}
      ],
      newPostText: ''
    },

    messagesPage: {
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
    },

    sidebar: {}

  },
  // заглушка (тут буде передана нова функція)
  _callSubscriber() {

  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // action - is an object which contains type property
  dispatch(action) { // f.e. action - { type: 'ADD-POST', postText: 'Abracadabra' }
    // new profilePage, messagesPage, sidebar (after changing in reducer)
    this._state.profilePage = profileReducer(this._state.profilePage, action); // бере частину _state, міняє(action) і випльовує
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state); // ЗАНОВО ПЕРЕМАЛЬОВУЄ ВЖЕ З ЗМІНЕНИМИ ДАНИМИ!

    /*switch (action.type) {
      case ADD_POST:
        const newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likes: 0
        };

        this._state.profilePage.usersPosts.push(newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText = '';
        break;

      case CHANGE_POST_INPUT:
        this._state.profilePage.newPostText = action.postText; // action.postText - нова пропертя action, звідки дістанем текст (postText: 'Abracadabra')
        this._callSubscriber(this._state); // ЗАНОВО ПЕРЕМАЛЬОВУЄ ВЖЕ З ЗМІНЕНИМИ ДАНИМИ!
        break;

      case SEND_MESSAGE:
        const newMessage = {
          id: 6,
          message: this._state.messagesPage.newMessageText
        };

        this._state.messagesPage.usersMessages.push(newMessage);
        this._callSubscriber(this._state);
        this._state.messagesPage.newMessageText = '';
        break;

      case CHANGE_MESSAGE_INPUT:
        this._state.messagesPage.newMessageText = action.messageText;
        this._callSubscriber(this._state);
        break;

      default:

    }*/

  }

}

export default store;
window.store = store; // Щоб можна було через консольку побачити