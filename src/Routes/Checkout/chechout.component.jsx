import React from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {useSelector} from 'react-redux'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx'
import { selectCartItems, selectCartTotal } from '../../store/cartSelector'
import PaymentForm from '../../components/payment-form/payment.component'



function Checkout() {

    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock>
               <span>Product</span> 
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span> 
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span> 
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span> 
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>

        {cartItems.map(item => <CheckoutItem key={item.id} Item={item}  />) }

        <Total> Total: ${cartTotal}</Total>


        <PaymentForm />
    </CheckoutContainer>
  )
}

export default Checkout