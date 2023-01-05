import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostsType, ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionsType) => void

}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo description={'ava+description'}/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch = {props.dispatch}
            />
        </div>
    );
};

