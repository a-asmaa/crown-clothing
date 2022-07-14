import React from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/button.component'
import { FormContainer, PaymentButton, PaymentFormContainer } from './payment.styles'
import { PaymentElement, useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import { useState } from 'react';
import { selectCartTotal } from '../../store/cartSelector';
import {useSelector} from 'react-redux'



function PaymentForm() {

    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const {currentUser} = useSelector(state => state.user);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    
    const paymentHandler = async(e) => {

        e.preventDefault();

        if(!stripe || !elements) return;

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
          }).then((res) => {
            return res.json();
          });
      
          const clientSecret = response.paymentIntent.client_secret;
      
          const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: currentUser ? currentUser.displayName : 'Guest',
              },
            },
          });
      
          setIsProcessingPayment(false);
      
          if (paymentResult.error) {
            alert(paymentResult.error.message);
          } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
              alert('Payment Successful!');
            }
          }
        };


  return (
    <PaymentFormContainer>
        <h2> Credit Card Payment: </h2>
        <FormContainer onSubmit={paymentHandler}>
            <CardElement />
            <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted} isLoading={isProcessingPayment}> Pay now </PaymentButton> 
        </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm