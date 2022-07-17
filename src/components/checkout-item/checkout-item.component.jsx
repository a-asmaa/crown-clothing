import React, { memo } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/Actions/cartActions';
import { selectCartItems } from '../../store/selector/cartSelector';
import { Arrow, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, BaseSpan, Value } from './checkout-item.styles';


const CheckoutItem = memo(({Item}) => {

    const {name, price, imageUrl, quantity} = Item;
    // const {addItemToCart, deleteItemFromCart, clearItemFromCart} = useContext(CartContext)
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)


    const handleAdd = () => dispatch(addItemToCart(cartItems, Item))
    const handleDelete = () => dispatch(removeItemFromCart(cartItems, Item))
    const handleClear = () => dispatch(clearItemFromCart(cartItems, Item))
    

  return (
    <CheckoutItemContainer>
        <ImageContainer> 
            <img src={imageUrl} alt={name} />
        </ImageContainer>

        <BaseSpan> {name} </BaseSpan>
        <Quantity> 
            <Arrow onClick={handleDelete}> &#10094;</Arrow>  
            <Value>{quantity} </Value>  
            <Arrow onClick={handleAdd}> &#10095;</Arrow>
         </Quantity>
        <BaseSpan>{price}</BaseSpan>
        <RemoveButton onClick={handleClear}>&#10005;</RemoveButton>

    </CheckoutItemContainer>
  )
})

export default CheckoutItem