import { SET_CART_ITEMS, SET_IS_CART_OPEN } from "../Actions/cartActions";

const INITIAL_STATE = {
    cartTotal: 0,
    isCartOpen: false,
    cartItems: [],
    cartCount: 0
}

export const cartReducer = (state=INITIAL_STATE, action) => {

    const {type, payload} = action;

    switch(type) {

        case  SET_CART_ITEMS: 
        return {
            ...state, 
            ...payload
        }

        case SET_IS_CART_OPEN:
            return { ...state, isCartOpen: payload}

        default: 
            return state;
    }
}