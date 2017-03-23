/**
 * Created by jorgecruz on 3/18/17.
 */
// A reducer takes in two things

// 1. The action (info about what happened)

// 2. Copy pf current state
// The reducer does the editing of the state.
// Every reducer runs everytime there is an action

function post (state = [], action){
    switch(action.type){
        case 'INCREMENT_LIKES' :
            //update the state
            console.log('Incrementing Likes, Yo!')
            const i = action.index;
            return [
                //I NEED to ask questions about this code and if it can be done in an easier manner. 
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1),
            ]
        default: 
            return state;
    }
}

export default post;
