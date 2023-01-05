import React, {ChangeEvent, useRef} from 'react'
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsType, PostsType} from "../../../Redux/State";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const addPostHandler = () => {
        props.dispatch(addPostAC(props.newPostText))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.posts}>
            <div>
                <textarea onChange={onChangeHandler} value={props.newPostText}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <h2>My posts</h2>
            {props.posts.map((post, index) => {
                return <Post key={index} message={post.postMessage} likesCount={post.likesCount}/>
            })}
        </div>
    );
};

