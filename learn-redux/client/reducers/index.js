/**
 * Created by jorgecruz on 3/18/17.
 */
// We are going to combine all of our reducers in this page

import { combineReducers } from 'redux'
import { routerReact } from 'react-router-redux'

import post from './post'
import comment from './comment'

const rootReducers = combineReducers({post, comment,
    router: routerReducer});

export default rootReducers;