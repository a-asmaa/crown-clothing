import React from 'react'
import {useDispatch} from 'react-redux'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/Actions/cartActions';
import './checkout-item.styles.scss'


function CheckoutItem({Item}) {

    const {name, price, imageUrl, quantity} = Item;
    // const {addItemToCart, deleteItemFromCart, clearItemFromCart} = useContext(CartContext)
    const dispatch = useDispatch()


    const handleAdd = () => dispatch(addItemToCart(Item))
    const handleDelete = () => dispatch(removeItemFromCart(Item))
    const handleClear = () => dispatch(clearItemFromCart(Item))
    

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