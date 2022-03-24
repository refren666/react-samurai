import {Routes, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header/header';
import Navigation from "./components/Nav/nav";
import Profile from "./components/Profile/profile";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navigation/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/*'
                 element={<Profile />}/>
          <Route path='/dialogs/*'
                 element={<DialogsContainer />}/>
          <Route path='/news/*' element={<News/>}/>
          <Route path='/music/*' element={<Music/>}/>
          <Route path='/settings/*' element={<Settings/>}/>
          <Route path='/friends/*' element={<Friends/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
