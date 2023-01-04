import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src='https://img.freepik.com/premium-vector/calm-man-t-shirt-avatar-social-network-phlegmatic-type-temperament_499739-702.jpg?w=2000'/>
                {props.message}
            </div>
            <div>
                {props.likesCount}
            </div>
        </div>
    );
};
