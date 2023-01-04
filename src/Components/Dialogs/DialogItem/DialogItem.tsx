import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../Redux/State";


export const DialogItem: React.FC<UsersType> = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={props.id}>{props.name}
                <img
                src='https://img.freepik.com/premium-vector/calm-man-t-shirt-avatar-social-network-phlegmatic-type-temperament_499739-702.jpg?w=2000'/>
            </NavLink>
        </div>
    );
};

