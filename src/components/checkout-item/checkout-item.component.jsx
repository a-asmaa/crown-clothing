import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/Actions/cartActions';
import { Arrow, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, SpanText, Value } from './checkout-item.styles';


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

        <SpanText> {name} </SpanText>
        <Quantity> 
            <Arrow onClick={handleDelete}> &#10094;</Arrow>  
            <Value>{quantity} </Value>  
            <Arrow onClick={handleAdd}> &#10095;</Arrow>
         </Quantity>
        <SpanText>{price}</SpanText>
        <RemoveButton onClick={handleClear}>&#10005;</RemoveButton>

    </CheckoutItemContainer>
  )
}

export default CheckoutItem