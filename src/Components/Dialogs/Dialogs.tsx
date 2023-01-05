import React, {ChangeEvent, useRef} from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    addMessageAC,
    MessagesPageType,
    MessagesType,
    updateNewMessageTextAC,
    UsersType
} from "../../Redux/State";

type DialogsPropsType = {
    messages: MessagesType[]
    users: UsersType[]
    newMessageText: string
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {


    const sendMessageHandler = () => {
        props.dispatch(addMessageAC(props.newMessageText))
    }
    const updateNewMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{props.users.map((user) => {
                return <DialogItem name={user.name} id={user.id}/>
            })}</div>
            <div className={s.messages}>{props.messages.map((message) => {
                return <Message message={message.message} id={message.id}/>
            })}</div>
            <div>
                <textarea placeholder={'Enter your message'}
                          onChange={updateNewMessageTextHandler}
                          value={props.newMessageText}/>
                <button onClick={sendMessageHandler}>Add Message</button>
            </div>
        </div>
    );
};

