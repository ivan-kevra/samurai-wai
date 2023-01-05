import React, {ChangeEvent, useRef} from 'react'
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../Redux/State";

type MessageType = {
    newPostText: string
    posts: Array<PostsType>
    addPost: (postText: string) => void
    updateNewPostText: (newPostText: string) => void
}
export const MyPosts: React.FC<MessageType> = (props) => {


    const addPostHandler = () => {
        props.addPost(props.newPostText)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.posts}>
            <div>
                <textarea onChange={onChangeHandler} value={props.newPostText}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <h2>My posts</h2>
            {props.posts.map((post) => {
                return <Post message={post.postMessage} likesCount={post.likesCount}/>
            })}
        </div>
    );
};

