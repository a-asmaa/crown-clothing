import React, { memo } from 'react'
import './cart-item.styles.jsx'
import { CartItemContainer, ItemDetails, Name } from './cart-item.styles.jsx';



const CartItem = memo(({cartItem}) => {

    const {name, quantity, imageUrl, price} = cartItem;

  return (
    <CartItemContainer>
        <img src={imageUrl} alt={name}/>

        <ItemDetails>
            <Name> {name}</Name>
            <Name> {quantity} x ${price}</Name>
        </ItemDetails>
        
    </CartItemContainer>
  )
})

export default CartItem