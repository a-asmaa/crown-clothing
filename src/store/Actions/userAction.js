export const SET_CURRENT_USER = "SET_CURRENT_USER";
// action 

// action creator => will be dispatched
export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}