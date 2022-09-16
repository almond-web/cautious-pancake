import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Dialogs.module.css';
import Message from '../Message/Message';
import User from '../User/User';

const Dialogs = (props) => {
    let userData = [{name:'Ira', id:'1'},{name:'Marina', id:'2'},{name:'Sveta', id:'3'}]
    let messageData = [{message:'Hi!', id:'1'},{message:'Hi! How are you?', id:'2'},{message:'Fine, thanks.', id:'3'}]

    let userNewArray = userData.map(user=><User name={user.name} id={user.id}/>)
    let messageNewArray = messageData.map(message=><Message message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div>
                {userNewArray}
            </div>
            <div>
                {messageNewArray}
            </div>
        </div>
    )
}

export default Dialogs