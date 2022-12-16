import React from 'react';
import s from './Message.module.css'
import {MessageType} from "../../../redux/State";



export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            <img src='https://www.w3schools.com/howto/img_avatar.png'/>
            {props.message}
        </div>
    )
}

