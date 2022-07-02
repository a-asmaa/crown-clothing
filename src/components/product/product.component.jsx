import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../Button/button.component';
import './product.style.scss'




function ProductCard({product}) {

    const {name, imageUrl, price} = product;
    const {addItemToCart} = useContext(CartContext)

    const handleAddToCart = () => addItemToCart(product)

  return (
    <div className='product-card-container'>


        <img src={imageUrl} alt={name} />

        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={handleAddToCart}> ADD TO CART </Button>
    </div>
  )
}

export default ProductCard