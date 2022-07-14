import React from 'react'
import { BaseButton, InvertedButton, GoogleButton, LoadingSpinner } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
  };


  const getButton = (buttonType= BUTTON_TYPE_CLASSES.base) => 
    ({
      [BUTTON_TYPE_CLASSES.base]: BaseButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);
  

function Button({children, buttonType, isLoading, ...otherProps}) {

  const CustomButton = getButton(buttonType)

  return (
    <CustomButton disabled={isLoading} {...otherProps} >
    {isLoading ? <LoadingSpinner /> : children}
  </CustomButton>
  )
}

export default Button