import {combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
// reducers - parts of a state and actions on them
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer
});

let store = createStore(reducers);

// console.log(store)
// store = dispatch(f), subscribe(f), getState(f)

export default store;