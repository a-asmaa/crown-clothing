import { createSelector } from "reselect";


export const selectCart = state => state.cart


export const selectCartItems = createSelector([selectCart], cart => cart.cartItems) 
export const selectCartOpen = createSelector([selectCart], cart => cart.isCartOpen) 
export const selectCartCount = createSelector([selectCart], cart => cart.cartCount) 
export const selectCartTotal = createSelector([selectCart], cart => cart.cartTotal) 

