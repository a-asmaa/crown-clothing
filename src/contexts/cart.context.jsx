import { useEffect } from "react";
import { createContext, useState } from "react";


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


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    deleteItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0
});


export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setTotal] = useState(0)

    useEffect(()=>{

        const newCartCount = cartItems.reduce((total, cartItem)=> total+ cartItem.quantity, 0);
        setCartCount(newCartCount)

    }, [cartItems])

    useEffect(()=>{

        const newCarTotal = cartItems.reduce((total, cartItem)=> total+ cartItem.price * cartItem.quantity, 0);
        setTotal(newCarTotal)

    }, [cartItems])




    const addItemToCart = (productToAdd)=> {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const deleteItemFromCart = (productToDelete)=> {
        setCartItems(deleteCartItem(cartItems, productToDelete))
    }

    const clearItemFromCart = (productToDelete)=> {
        setCartItems(clearCartItem(cartItems, productToDelete))
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount,
         setCartCount, deleteItemFromCart, clearItemFromCart, cartTotal}


    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}

