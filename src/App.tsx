import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";


export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

