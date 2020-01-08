import React from 'react';
import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    alt="HAVE A GOOD DAY"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
                 <img src='https://image.freepik.com/free-photo/image-human-brain_99433-298' alt= "YOUR PHOTO" />
            </div>
        </div>
    )
}

export default ProfileInfo;