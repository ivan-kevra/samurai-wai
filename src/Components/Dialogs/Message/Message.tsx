import React from 'react';
import {MessagesType} from "../../../Redux/State";


export const Message: React.FC<MessagesType> = (props) => {
    return (
        <div className="message" id={props.id}>{props.message}</div>
    );
};

