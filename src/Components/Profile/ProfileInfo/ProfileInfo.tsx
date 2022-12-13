import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3-full-169.jpg'/>
            </div>
            <div className={s.descriptionBlock}>ava+description</div>
        </div>
    );
};

