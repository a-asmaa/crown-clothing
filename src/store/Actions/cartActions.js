export const SET_CART_ITEMS = "SET_CART_ITEMS"
export const SET_IS_CART_OPEN = "SET_IS_CART_OPEN"
export const SET_CART_TOTAL = "SET_CART_TOTAL";
export const SET_CART_COUNT = "SET_CART_COUNT"

const addCartItem = (cartItems, productToAdd) => {
    let existingItem = cartItems.find(item => item.id === productToAdd.id)
    if(existingItem) 
        return cartItems.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity +1} : item)
        
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const deleteCartItem = (cartItems, productToDelete) => {
    if(productToDelete.quantity === 1)
        return cartItems.filter(item => item.id !== productToDelete.id)

    return cartItems.map(item => item.id === productToDelete.id ? {...item, quantity: item.quantity -1} : item)
}

const clearCartItem = (cartItems, productToClear) => cartItems.filter(item => item.id !== productToClear.id)

export const setIsCartOpen = (boolean) => {
    return { type: SET_IS_CART_OPEN, payload: boolean}}


export const addItemToCart = (cartItems, productToAdd) => {

    const newCartItems = addCartItem(cartItems, productToAdd);
   return {
    type: SET_CART_ITEMS,
    payload: {
        cartItems: newCartItems, 
        cartTotal: newCartItems.reduce((total, cartItem)=> total+ cartItem.price * cartItem.quantity, 0),
        cartCount: newCartItems.reduce((total, cartItem)=> total+ cartItem.quantity, 0)
    }
    }
}

export const clearItemFromCart = (cartItems, productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return {
     type: SET_CART_ITEMS,
     payload: {
        cartItems: newCartItems, 
        cartTotal: newCartItems.reduce((total, cartItem)=> total+ cartItem.price * cartItem.quantity, 0),
        cartCount: newCartItems.reduce((total, cartItem)=> total+ cartItem.quantity, 0)
    }
    }
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = deleteCartItem(cartItems, productToRemove);
    return {
     type: SET_CART_ITEMS,
     payload: {
        cartItems: newCartItems, 
        cartTotal: newCartItems.reduce((total, cartItem)=> total+ cartItem.price * cartItem.quantity, 0),
        cartCount: newCartItems.reduce((total, cartItem)=> total+ cartItem.quantity, 0)
    }
}
}
 