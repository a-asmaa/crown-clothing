import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles'


function Spinner() {
  return (
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
  )
}

export default Spinner