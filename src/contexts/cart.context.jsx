import { createContext, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
    
    let existingItem = cartItems.find(item => item.id === productToAdd.id)

    if(existingItem) 
        return cartItems.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity +1} : item)
        
    return [...cartItems, {...productToAdd, quantity: 1}]
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});


export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const addItemToCart = (productToAdd)=> {
        setCartItems(addCartItem(cartItems, productToAdd))
        setCartCount(cartItems.length)
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, setCartCount}


    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}

