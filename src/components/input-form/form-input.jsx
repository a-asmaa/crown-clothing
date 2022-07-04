import React from 'react'
import { FormInput, FormLabel, Group } from './form-input.styles'
function InputForm({ label, ...otherProps}) {



  return (
    <Group>
        <FormInput {...otherProps} />
        <FormLabel shrink={otherProps.value.length} > {label} </FormLabel>
    </Group>
  )
}

export default InputForm