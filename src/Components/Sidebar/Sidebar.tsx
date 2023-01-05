import React from 'react';
import {SidebarType} from "../../Redux/State";
import s from './Sidebar.module.css'

export const Sidebar: React.FC<SidebarType> = (props) => {
    return (
        <div className={s.friend}>
            <h2>Friends</h2>
            {props.friends.map((friend, index) => {
                return <div key={index}>
                    {friend.name}
                    <img
                        src='https://img.freepik.com/premium-vector/calm-man-t-shirt-avatar-social-network-phlegmatic-type-temperament_499739-702.jpg?w=2000'/>
                </div>
            })}
        </div>
    );
};

