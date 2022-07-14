import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.uttils";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILED = "FETCH_CATEGORIES_FAILED";


export const fetchCategories = () => {
    return { type: FETCH_CATEGORIES }
}

export const fetchCategoriesSuccess = (categories) => {
    return { type: FETCH_CATEGORIES_SUCCESS , payload: categories }
}

export const fetchCategoriesFailed = (error) => {
    return { type: FETCH_CATEGORIES_FAILED , payload: error }
}

export const fetchCategoriesAsync = () => async(dispatch) => {

    dispatch(fetchCategories())
    try {
        const categories = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categories))

    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }

}