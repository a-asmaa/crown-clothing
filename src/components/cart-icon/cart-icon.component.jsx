import React from 'react'
import './cart-icon.style.scss'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {useSelector, useDispatch} from 'react-redux'
import { setIsCartOpen } from '../../store/Actions/cartActions'


function CartIcon() {

  // const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
  const {isCartOpen, cartCount} = useSelector(state => state.cart)
  const dispatch = useDispatch() 
    const handleCartClick = () => {
        // setIsCartOpen(!isCartOpen)
        dispatch(setIsCartOpen(!isCartOpen))
        

    }

  return (
    <div className='cart-icon-container' onClick={handleCartClick}>
        <ShoppingIcon className="shopping-icon" />
        <span className='item-count'> {cartCount} </span>
    </div>
  )
}

export default CartIcon