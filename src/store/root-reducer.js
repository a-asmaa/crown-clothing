import { combineReducers } from "redux";
import {cartReducer} from './Reducers/cart'
import {userReducer} from './Reducers/user'


export const rootReducer = combineReducers({ 
    user: userReducer,
    cart: cartReducer
});