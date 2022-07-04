import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import {useSelector} from 'react-redux'


function CartDropDown() {

  // const {cartItems} = useContext(CartContext);
  const {cartItems} = useSelector(state => state.cart)

  console.log(cartItems);

  const navigator = useNavigate();
  const handleToCheckOut = () => {
    navigator('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
        
        {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}

        <Button buttonType='' onClick={handleToCheckOut}> CHECK OUT</Button>
    </div>
  )
}

export default CartDropDown