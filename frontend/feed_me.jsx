import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchFeeds, fetchFeed, createFeed, deleteFeed, updateFeed } from './actions/feed_actions';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id },
            
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchFeeds = fetchFeeds;
    window.fetchFeed = fetchFeed;
    window.updateFeed = updateFeed;
    window.createFeed = createFeed;
    window.deleteFeed = deleteFeed;

    ReactDOM.render(<Root store={store}/>, root);
})


    // window.login = login;
    // window.RECEIVE_CURRENT_USER = RECEIVE_CURRENT_USER;
    // window.RECEIVE_ERRORS = RECEIVE_ERRORS;
    // window.receiveCurrentUser = receiveCurrentUser;
    // window.receiveErrors = receiveErrors;
    // demo: {username: "GuestDemo", password:"password"}