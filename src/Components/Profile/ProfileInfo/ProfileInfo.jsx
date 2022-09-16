

import React from 'react';
import p from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU' />
            </div>

            <div className={p.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}

export default ProfileInfo