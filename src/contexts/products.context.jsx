import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import PRODUCTS from '../utils/shop-data.json'


export const ProductContext = createContext({
    products: [],
    setProducts : ()=> null
})


export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState(PRODUCTS);
    const value = {products, setProducts}

    return <ProductContext.Provider value={value}> {children} </ProductContext.Provider>
}