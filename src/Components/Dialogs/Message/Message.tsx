import React, {useRef} from 'react';
import s from './Message.module.css'
import {MessageType} from "../../../redux/State";


export const Message: React.FC<MessageType> = (props) => {

    let newMessageElement = useRef<HTMLTextAreaElement>(null)

    const addMesage = () => {
        if (newMessageElement.current !== null) {
            alert(newMessageElement.current.value)
        }
    }

    return (
        <div className={s.message}>
            <img src='https://www.w3schools.com/howto/img_avatar.png'/>
            {props.message}
            <button onClick={addMesage}>send</button>
            <textarea ref={newMessageElement}></textarea>
        </div>
    )
}

