import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../Redux/State";



export const Dialogs: React.FC<MessagesPageType> = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.users.map((user) => {
                    return <DialogItem name={user.name} id={user.id}/>
                })}
            </div>
            <div className={s.messages}>
                {props.messages.map((message) => {
                    return <Message message={message.message} id={message.id}/>
                })}
            </div>
        </div>
    );
};

