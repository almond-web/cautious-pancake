import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';

const User = (props) => {
        let path='/dialogs/'+props.id;
        return  <div className={s.dialog + ' ' + s.active}>
                    <img className={s.img} src={props.avatar} alt='gh'/>
                    <NavLink className={(navData) => navData.isActive ? s.active : ''} to={path}>{props.name}</NavLink>
                </div>

}

export default User