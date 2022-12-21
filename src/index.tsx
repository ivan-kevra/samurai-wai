import state, {subscribe} from "./redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {RootStateType} from "./redux/State";


export const renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App dialogsPage={state.dialogsPage} profilePage={state.profilePage} />,
        document.getElementById('root')
    );
}


renderEntireTree(state);
subscribe(renderEntireTree);