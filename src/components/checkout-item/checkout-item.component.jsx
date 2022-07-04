import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/Actions/cartActions';
import './checkout-item.styles.jsx'
import { CheckoutItemContainer, ImageContainer, Quantity, RemoveButton } from './checkout-item.styles.jsx';


function CheckoutItem({Item}) {

    const {name, price, imageUrl, quantity} = Item;
    // const {addItemToCart, deleteItemFromCart, clearItemFromCart} = useContext(CartContext)
    const dispatch = useDispatch()
    const {cartItems} = useSelector(state => state.cart)


    const handleAdd = () => dispatch(addItemToCart(cartItems, Item))
    const handleDelete = () => dispatch(removeItemFromCart(cartItems, Item))
    const handleClear = () => dispatch(clearItemFromCart(cartItems, Item))
    

  return (
    <CheckoutItemContainer>
        <ImageContainer> 
            <img src={imageUrl} alt={name} />
        </ImageContainer>

        <span className='name'> {name} </span>
        <Quantity> 
            <div className='arrow' onClick={handleDelete}> &#10094;</div>  
            <div className='value'>{quantity} </div>  
            <div className='arrow' onClick={handleAdd}> &#10095;</div>
         </Quantity>
        <span className='price'>{price}</span>
        <RemoveButton onClick={handleClear}>&#10005;</RemoveButton>

    </CheckoutItemContainer>
  )
}

export default CheckoutItem