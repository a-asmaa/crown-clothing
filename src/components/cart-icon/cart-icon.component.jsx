import React from 'react'
import './cart-icon.style.scss'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


function CartIcon() {

    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen)
    }

  return (
    <div className='cart-icon-container' onClick={handleCartClick}>
        <ShoppingIcon className="shopping-icon" />
        <span className='item-count'> {cartCount} </span>
    </div>
  )
}

export default CartIcon