import { FETCH_CATEGORIES, FETCH_CATEGORIES_FAILED, FETCH_CATEGORIES_SUCCESS } from "../Actions/categoriesAction";


const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
}


export const categoriesReducer = (state= INITIAL_STATE , action= {}) => {

    const {type, payload} = action;

    switch(type){

        case FETCH_CATEGORIES:
            return  {...state, isLoading: true}

        case FETCH_CATEGORIES_SUCCESS:
            return  {...state, categories: payload, isLoading: false}

        case FETCH_CATEGORIES_FAILED:
            return  {...state, error: payload, isLoading: false}
        default: 
            return state;
    }
}