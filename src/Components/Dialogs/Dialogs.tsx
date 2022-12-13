import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = './dialogs/1' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Andrey'} id={2}/>
                <DialogItem name={'Sveta'} id={3}/>
                <DialogItem name={'Sahsha'} id={4}/>
                <DialogItem name={'Viktor'} id={5}/>
                <DialogItem name={'Valera'} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
};

