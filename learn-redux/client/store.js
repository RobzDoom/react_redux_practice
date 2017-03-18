/**
 * Created by jorgecruz on 3/17/17.
 */
import { createStore, compose } from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router'

//import a root reducer
import rootReducer from './reducer/index';

//import the data needed for App
import comments from './data/comments'
import post from './data/posts'

//Have to create an object for the default data

const defaultState = {
    post,             // This is ES6 syntax. Same as post: post
    comments
};

const store = createStore(rootReducer, defaultState);

const history = syncHistoryWithStore(browserHistory);

export default store;