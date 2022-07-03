import { SET_CURRENT_USER } from "../Actions/userAction";


const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state= INITIAL_STATE, action) => {

    const {type, payload} = action;

    switch (type){
        case SET_CURRENT_USER:
            return { ...state,  currentUser: payload }

        default:
            return state;   // diff about reducer with context
    }
}