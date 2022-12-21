import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/State";


export const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postsElements = props.posts.map((p) => <Post postMessage={p.postMessage} likesCount={p.likesCount} id={p.id}/>)

    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
            props.addPost()
    }
    const onPostChangeHandler = () => {
        if (postMessageRef.current !== null) {
            props.updateNewPostText(postMessageRef.current.value)
        }

    }
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <textarea ref={postMessageRef} value={props.newPostText} onChange={onPostChangeHandler}/>
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

