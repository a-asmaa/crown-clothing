import React from 'react'
import './form-input.styles.scss'
function InputForm({ label, ...otherProps}) {



  return (
    <div className='group'>
        <input className='form-input' {...otherProps} />
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}> {label} </label>
    </div>
  )
}

export default InputForm