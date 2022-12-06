import React from "react";
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3-full-169.jpg'/>
            </div>
            <div>ava+description</div>
            <div>
                my posts
                <div>new post</div>
                <div className={s.posts}>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                </div>

            </div>
        </div>
    )
}