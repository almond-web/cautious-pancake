import React from 'react';
import Friend from './Friend'

const Friends = (props) => {
    let newArrayFriends=props.state.friend.map(friend=><Friend avatar={friend.avatar} name={friend.name} />)
    return <div>
        Friends
        <div>
            {newArrayFriends}
        </div>
    </div>
}

export default Friends