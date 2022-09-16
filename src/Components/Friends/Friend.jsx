import React from 'react';
import s from './Friends.module.css';

const Friend = (props) => {
    return <div>
            <img className={s.img} src={props.avatar} alt='alt' />
            {props.name}
           </div>
}

export default Friend