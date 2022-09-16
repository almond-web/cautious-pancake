import React from 'react';
import s from './Dialogs.module.css';
import Message from '../Message/Message';
import User from '../User/User';

const Dialogs = (props) => {
    let userMapArray = props.state.userData.map(user=><User name={user.name} id={user.id} avatar={user.avatar}/>)
    let messageMapArray = props.state.messageData.map(message=><Message message={message.message} />)
    
    let addMassege = () => {
        let text=newMessage.current.value;
        alert(text)};

    let newMessage=React.createRef();

    return (
        
        <div className={s.dialogs}>
            <div>
                {userMapArray}
            </div>
            <div>
                {messageMapArray}
            </div>
            <div> 
              <textarea ref={newMessage}></textarea>
            </div>
           <div><button onClick={addMassege}>Add message</button></div>
       
        </div>
    )
}

export default Dialogs