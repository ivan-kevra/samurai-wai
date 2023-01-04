import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {
    description: string
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div className={s.description}>{props.description}</div>
    );
};

