import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, ProfilePageType, updateNewPostText} from "../../Redux/State";


export const Profile: React.FC<ProfilePageType> = (props) => {
    return (
        <div>
            <ProfileInfo description={'ava+description'}/>
            <MyPosts posts={props.posts}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     newPostText={props.newPostText}
            />
        </div>
    );
};

