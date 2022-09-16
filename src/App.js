import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/DialogsPage/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Route, Routes} from 'react-router-dom';

const App = (props) => {
  return (
  
    <div className ='app-wrapper'>
   <Header/>
   <Navbar state={props.state.friends} />
  
   <div className = 'content'>
   <Routes>
    <Route path='/profile/*' element={<Profile state={props.state.profile} addPost={props.addPost} />}/>
    <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogs}/>}/>
    <Route path='/news/*' element={<News/>}/>
    <Route path='/music/*' element={<Music/>}/>
    <Route path='/settings/*' element={<Settings/>}/>
    </Routes>
   </div>
   
   </div>
  )
}

export default App;
