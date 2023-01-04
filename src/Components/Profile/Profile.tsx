import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";


export const Profile: React.FC<ProfilePageType> = (props) => {
    return (
        <div>
            <ProfileInfo description={'ava+description'} />
            <MyPosts posts={props.posts} />
        </div>
    );
};

