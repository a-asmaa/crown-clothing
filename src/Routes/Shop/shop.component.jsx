import React from 'react'
import { useContext } from 'react';
import ProductCard from '../../components/product/product.component';
import { ProductContext } from '../../contexts/products.context'
import SHOP_DATA from "../../utils/shop-data.json"
import './shop.style.scss'

function Shop() {

  const {products} = useContext(ProductContext)

  return (
    <div className='products-container'>
        {products.map(product =>  <ProductCard key={product.id} product={product} />
        )}
    </div>
  )
}

export default Shop