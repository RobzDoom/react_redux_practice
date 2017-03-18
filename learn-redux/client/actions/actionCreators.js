/**
 * Created by jorgecruz on 3/18/17.
 */
//increment the like button
export function increment (index) {
    //Actions are just objects!
    return{
        type: 'INCREMENT_LIKES',
        index
    }
}
//add comment
export function addComment (postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}
// remove comment
export function removeComment (postId, i) {
    return{
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}