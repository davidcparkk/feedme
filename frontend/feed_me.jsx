import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, RECEIVE_CURRENT_USER, receiveCurrentUser,receiveErrors, RECEIVE_ERRORS} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    
    

    ReactDOM.render(<Root store={store}/>, root);
})

// window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.login = login;
    // window.RECEIVE_CURRENT_USER = RECEIVE_CURRENT_USER;
    // window.RECEIVE_ERRORS = RECEIVE_ERRORS;
    // window.receiveCurrentUser = receiveCurrentUser;
    // window.receiveErrors = receiveErrors;