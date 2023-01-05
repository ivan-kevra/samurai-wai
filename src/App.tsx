import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {Navbar} from "./Components/Navbar/Navbar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {store, StoreType} from "./Redux/State";
import {Sidebar} from "./Components/Sidebar/Sidebar";


const App: React.FC<StoreType> = (props) => {
    const state = props._state
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Sidebar friends={state.sidebar.friends}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile/*' element={<Profile posts={state.profilePage.posts}
                                                                   newPostText={state.profilePage.newPostText}
                                                                   dispatch={props.dispatch}

                        />}/>
                        <Route path='/dialogs/*' element={<Dialogs users={state.messagesPage.users}
                                                                   messages={state.messagesPage.messages}
                                                                   newMessageText={state.messagesPage.newMessageText}
                                                                   dispatch={props.dispatch}
                        />}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/setting/*' element={<Settings/>}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
