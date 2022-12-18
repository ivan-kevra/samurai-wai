import s from "./MyPosts.module.css";
import React, {useRef} from "react";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/State";


export const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElements = props.posts.map((p) => <Post post={p.post} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current !== null) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

