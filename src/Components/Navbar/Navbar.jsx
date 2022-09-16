
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import Friends from '../Friends/Friends';


const Navbar = (props) => {
    return <nav className={s.nav}>
      <div className={s.item}>
     <NavLink className= {(navData) => navData.isActive ? s.active : '' } to='/profile' >Profile</NavLink>
    </div>

    <div className={s.item}>
    <NavLink className= {(navData) => navData.isActive ? s.active : '' } to='/dialogs'>Dialogs</NavLink>
    </div>

    <div className={`${s.item} ${s.active}`}>
    <NavLink className= {(navData) => navData.isActive ? s.active : '' } to='/news'>News</NavLink>
    </div>

    <div className={s.item}>
    <NavLink className= {(navData) => navData.isActive ? s.active : '' } to='/music'>Music</NavLink>
    </div>

    <div className={s.item}>
    <NavLink className= {(navData) => navData.isActive ? s.active : '' } to='/settings'>Settings</NavLink>
    </div>

    <div className={s.item}>
    <Friends state={props.state}/>
    </div>

  </nav>

}

export default Navbar