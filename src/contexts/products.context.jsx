import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import SHOP_DATA from '../utils/shop-data'


export const ProductContext = createContext({
    products: [],
    setProducts : ()=> null
})


export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState(SHOP_DATA);
    const value = {products, setProducts}

    return <ProductContext.Provider value={value}> {children} </ProductContext.Provider>
}