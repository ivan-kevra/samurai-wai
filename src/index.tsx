import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, state, subscribe} from "./Redux/State";


const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App profilePage={state.profilePage}
             messagesPage={state.messagesPage}
             sidebar={state.sidebar}

        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);