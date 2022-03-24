// Action types
const ADD_POST = 'ADD-POST';
const CHANGE_POST_INPUT = 'CHANGE-POST-INPUT';

// result of getState()
const initialState = {
  // posts
  usersPosts: [
    {id: 1, message: 'Продам гараж в Бердичеві', likes: 125},
    {id: 2, message: 'Дівчата привіт', likes: 3},
    {id: 3, message: 'Шо там?)', likes: 4758},
    {id: 4, message: 'Один лайк і я сьогодні не йду в школу', likes: 1}
  ],
  newPostText: ''
}
//                      initializing default value
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0
      };

      state.usersPosts.push(newPost);
      state.newPostText = '';
      break;

    case CHANGE_POST_INPUT:
      state.newPostText = action.postText; // action.postText - нова пропертя action, звідки дістанем текст (postText: 'Abracadabra')
      break;

    default:
      return state;
  }

  return state;

}

// Тут ті об'єкти, що ми передаєм в dispatched(action)
export const addPostActionCreator = () => ({type: ADD_POST}) // КРУГЛІ ДУЖКИ, БО ПОВЕРТАЄМ ОБ'ЄКТ!
export const onTextInputActionCreator = (newText) => ({type: CHANGE_POST_INPUT, postText: newText})

export default profileReducer;