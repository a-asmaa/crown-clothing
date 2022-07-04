import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/button.component'
import CartItem from '../cart-item/cart-item.component'
import {useSelector} from 'react-redux'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'


function CartDropDown() {

  // const {cartItems} = useContext(CartContext);
  const {cartItems} = useSelector(state => state.cart)

  const navigator = useNavigate();
  const handleToCheckOut = () => {
    navigator('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
          { cartItems.length === 0 ? 
            <EmptyMessage> Your cart is empty </EmptyMessage>
          :
            cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
          ))}
      </CartItems>
        <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={handleToCheckOut}> CHECK OUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropDown