import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../Button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'



function CartDropDown() {

  const {cartItems} = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
        
        {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}

        <Button buttonType='' > CHECK OUT</Button>
    </div>
  )
}

export default CartDropDown