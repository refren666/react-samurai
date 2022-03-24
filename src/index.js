import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import App from './App';
import store from "./redux/redux-store";

// state = об'єкт з масивами даних і їх методами

// state = all data
const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App
          /*state={state}
          // bind повертає нову функцію!
          dispatch={store.dispatch.bind(store)}
          store={store}*/
        />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
  ;
}

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});

// console.log(store.getState())
// store.getState() - dialogsPage, messagesPage, sidebar
