import React from 'react'
import './cart-icon.style.jsx'
import {useSelector, useDispatch} from 'react-redux'
import { setIsCartOpen } from '../../store/Actions/cartActions'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.style.jsx'


function CartIcon() {

  // const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
  const {isCartOpen, cartCount} = useSelector(state => state.cart)
  const dispatch = useDispatch() 
    const handleCartClick = () => {
        // setIsCartOpen(!isCartOpen)
        dispatch(setIsCartOpen(!isCartOpen))
        
    }

  return (
    <CartIconContainer onClick={handleCartClick}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCount> {cartCount} </ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon