import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>new post</div>
            <div className={s.posts}>
                <Post message={'Hi how are you?'} likeCount={15}/>
                <Post message={'It`s my first post'} likeCount={20}/>
            </div>
        </div>
    )
}

