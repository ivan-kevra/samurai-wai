import React, {useRef} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../Redux/State";


export const Dialogs: React.FC<MessagesPageType> = (props) => {

    let usersElements = props.users.map((user) => {
        return <DialogItem name={user.name} id={user.id}/>
    })
    let messagesElements = props.messages.map((message) => {
        return <Message message={message.message} id={message.id}/>
    })
    let newMessageElement = useRef<HTMLTextAreaElement>(null)
    const onClickHandler = () => {
        if (newMessageElement.current !== null) {
            alert(newMessageElement.current.value)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{usersElements}</div>
            <div className={s.messages}>{messagesElements}</div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={onClickHandler}>Add Message</button>
            </div>
        </div>
    );
};

