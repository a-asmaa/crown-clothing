import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/button.component'
import CartItem from '../cart-item/cart-item.component'
import {useSelector} from 'react-redux'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'
import { selectCartItems } from '../../store/cartSelector'


function CartDropDown() {

  // const {cartItems} = useContext(CartContext);
  const cartItems = useSelector(selectCartItems)

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