import s from "./Post.module.css";
import React from "react";
import {PostType} from "../../../../redux/State";


export const Post: React.FC<PostType> = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://www.w3schools.com/howto/img_avatar.png'/>
                {props.post}
            </div>
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    )
}