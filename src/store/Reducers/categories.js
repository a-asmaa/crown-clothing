import { SET_CATEGORIES } from "../Actions/categoriesAction";

const INITIAL_STATE = {}


export const categoriesReducer = (state= INITIAL_STATE , action) => {


    const {type, payload} = action;

    switch(type){

        case SET_CATEGORIES:
            return  payload

        default: 
            return state;
    }
}