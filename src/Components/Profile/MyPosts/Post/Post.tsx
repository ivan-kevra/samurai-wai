import React from "react";
import s from './Post.module.css';

const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img
                src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/fotojet_-_2022-08-24t042314.766.jpg"></img>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    );
}

export default Post;