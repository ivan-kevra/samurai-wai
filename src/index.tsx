import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./Redux/State";


ReactDOM.render(
    <App profilePage={state.profilePage} messagesPage={state.messagesPage} sidebar={state.sidebar}/>,
  document.getElementById('root')
);