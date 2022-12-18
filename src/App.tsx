import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {StateType} from "./redux/State";
import {Friends} from "./Components/Friends/Friends";

export const App: React.FC<StateType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                  messages={props.state.dialogsPage.messages}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>}/>

                    {/*<Route path={'/news'} component={News}/>*/}
                    {/*<Route path={'/music'} component={Music}/>*/}
                    {/*<Route path={'/settings'} component={Settings}/>*/}
                </div>

            </div>
        </BrowserRouter>
    );
}

