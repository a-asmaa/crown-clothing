import { combineReducers } from "redux";
import {cartReducer} from './Reducers/cart'
import { categoriesReducer } from "./Reducers/categories";
import {userReducer} from './Reducers/user'


export const rootReducer = combineReducers({ 
    user: userReducer,
    cart: cartReducer,
    categories: categoriesReducer
});