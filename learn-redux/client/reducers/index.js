/**
 * Created by jorgecruz on 3/18/17.
 */
// We are going to combine all of our reducers in this page

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import post from './post'
import comments from './comments'

const rootReducers = combineReducers({post, comments,
    routing: routerReducer});

export default rootReducers;