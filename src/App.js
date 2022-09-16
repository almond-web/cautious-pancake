import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/DialogsPage/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
  
    <div className ='app-wrapper'>
   <Header/>
   <Navbar/>
  
   <div className = 'content'>
   <Routes>
    <Route path='/profile/*' render={ () => <Profile /> } />
    <Route path='/dialogs/*' element={<Dialogs/>}/>
    <Route path='/news/*' element={<News/>}/>
    <Route path='/music/*' element={<Music/>}/>
    <Route path='/settings/*' element={<Settings/>}/>
    </Routes>
   </div>
   
   </div>

   </BrowserRouter>
  )
}

export default App;
