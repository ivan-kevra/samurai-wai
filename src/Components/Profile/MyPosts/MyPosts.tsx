import React from 'react'
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/State";


export const MyPosts: React.FC<ProfilePageType> = (props) => {

    return (
        <div className={s.posts}>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <h2>My posts</h2>
            {props.posts.map((post) => {
                return <Post message={post.postMessage} likesCount={post.likesCount}/>
            })}
        </div>
    );
};

