import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss'


function CheckoutItem({Item}) {

    const {name, price, imageUrl, quantity} = Item;
    const {addItemToCart, deleteItemFromCart, clearItemFromCart} = useContext(CartContext)


    const handleAdd = () => addItemToCart(Item)
    const handleDelete = () => deleteItemFromCart(Item)
    const handleClear = () => clearItemFromCart(Item)
    

  return (
    <div className='checkout-item-container'>
        <div className='image-container'> 
            <img src={imageUrl} alt={name} />
        </div>

        <span className='name'> {name} </span>
        <span className='quantity'> 
            <div className='arrow' onClick={handleDelete}> &#10094;</div>  
            <div className='value'>{quantity} </div>  
            <div className='arrow' onClick={handleAdd}> &#10095;</div> </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={handleClear}>&#10005;</div>

    </div>
  )
}

export default CheckoutItem