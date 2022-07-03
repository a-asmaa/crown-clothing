import { ADD_ITEM_TO_CART, OPEN_CART, CLEAR_ITEM_FROM_CART, DELETE_ITEM_FROM_CART } from "../Actions/cartActions";

const INITIAL_STATE = {
    cartTotal: 0,
    isCartOpen: false,
    cartItems: [],
    cartCount: 0
}

export const cartReducer = (state=INITIAL_STATE, action) => {

    const {type, payload} = action;

    switch(type) {

        case ADD_ITEM_TO_CART: 

        let existingItem = state.cartItems.find(item => item.id === payload.id)

        if(existingItem) 
            return {...state, cartItems: state.cartItems.map(item => item.id === payload.id ? {...item, quantity: item.quantity +1} : item),
                cartCount: state.cartCount + 1,
                cartTotal: state.cartTotal + payload.price * payload.quanti
            }
            
        return {
            ...state, cartItems: [...state.cartItems, {...payload, quantity: 1}],
            cartCount: state.cartCount + 1,
        }

        case CLEAR_ITEM_FROM_CART:
            return {...state, 
                cartItems: state.cartItems.filter(item => item.id !== payload.id)
            }

        case DELETE_ITEM_FROM_CART:
            if(payload.quantity === 1)
            return {...state, cartItems: state.cartItems.filter(item => item.id !== payload.id)}

            return {...state, cartItems: state.cartItems.map(item => item.id === payload.id ? {...item, quantity: item.quantity -1} : item)}

        case OPEN_CART:
            return { ...state, isCartOpen: !state.isCartOpen }

        default: 
            return state;
    }
}