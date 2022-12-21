import React from 'react';
import s from './Message.module.css'
import {MessageType} from "../../../redux/State";



export const Message: React.FC<MessageType> = (props) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessageHandler = () => {
        if (newMessageElement.current !== null) {
            
            alert(newMessageElement.current.value)
        }
    }
    return (
        <div className={s.message}>
            <img src='https://www.w3schools.com/howto/img_avatar.png'/>
            {props.message}
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessageHandler}>Add post</button>
        </div>
    )
}

