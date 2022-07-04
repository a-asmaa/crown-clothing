import React from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {useSelector} from 'react-redux'
import './checkout.styles.scss'



function Checkout() {

    const {cartItems, cartTotal} = useSelector(state => state.cart)

  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
               <span>Product</span> 
            </div>
            <div className='header-block'>
                <span>Description</span> 
            </div>
            <div className='header-block'>
                <span>Quantity</span> 
            </div>
            <div className='header-block'>
                <span>Price</span> 
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        {cartItems.map(item => <CheckoutItem key={item.id} Item={item}  />) }

        <span className='total'> Total: ${cartTotal}</span>

    </div>
  )
}

export default Checkout