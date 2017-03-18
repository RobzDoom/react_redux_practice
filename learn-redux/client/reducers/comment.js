/**
 * Created by jorgecruz on 3/18/17.
 */
// A reducer takes in two things

// 1. The action (info about what happened)

// 2. Copy pf current state

function comment (state = [], action){
    console.log(state, action);
    return state;

}

export default comment;
