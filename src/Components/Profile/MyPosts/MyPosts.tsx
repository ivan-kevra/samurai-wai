import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/State";


export const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElements = props.posts.map((p) => <Post post={p.post} likesCount={p.likesCount} id={p.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

