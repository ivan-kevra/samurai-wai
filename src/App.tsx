import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {NavBar} from "./Components/NavBar";
import {Profile} from "./Components/Profile";


export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

