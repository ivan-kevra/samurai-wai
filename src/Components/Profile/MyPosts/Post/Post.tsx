import s from "./Post.module.css";
import React from "react";

type MypostPropsType = {
    message: string
    likeCount: number
}

export const Post = (props: MypostPropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://www.w3schools.com/howto/img_avatar.png'/>
                {props.message}
            </div>
            <div>
                <span>{props.likeCount} likes</span>
            </div>
        </div>
    )
}