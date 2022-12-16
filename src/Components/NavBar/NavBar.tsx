import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>

            <div className={s.item}>Friends</div>
            <div className={s.friend}>
                <div>
                    <img src='https://www.w3schools.com/howto/img_avatar.png'/>
                    Andrew
                </div>
                <div>
                    <img src='https://www.w3schools.com/howto/img_avatar.png'/>
                    Sasha
                </div>
                <div>
                    <img src='https://www.w3schools.com/howto/img_avatar.png'/>
                    Sveta
                </div>
            </div>

        </div>

    )
}