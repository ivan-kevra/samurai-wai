import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, store} from "./Redux/State";


const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App _state={store.getState()}
             _callSubscriber={store._callSubscriber}

             getState={store.getState}
             subscribe={store.subscribe}

             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());

