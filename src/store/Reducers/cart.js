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

        // let existingItem = state.cartItems.find(item => item.id === payload.id)

        // if(existingItem) 
        //     return {...state, cartItems: state.cartItems.map(item => item.id === payload.id ? {...item, quantity: item.quantity +1} : item),
        //         cartCount: state.cartCount + 1,
        //         cartTotal: state.cartTotal + payload.price * payload.quanti
        //     }
            
        return {
            ...state, 
            ...payload
        }

        case SET_IS_CART_OPEN:
            return { ...state, isCartOpen: payload}

        //     return {...state, 
        //         cartItems: state.cartItems.filter(item => item.id !== payload.id)
        //     }

        // case DELETE_ITEM_FROM_CART:
        //     if(payload.quantity === 1)
        //     return {...state, cartItems: state.cartItems.filter(item => item.id !== payload.id)}

        //     return {...state, cartItems: state.cartItems.map(item => item.id === payload.id ? {...item, quantity: item.quantity -1} : item)}

        default: 
            return state;
    }
}