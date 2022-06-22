import { async } from '@firebase/util';
import React from 'react'
import { useState } from 'react';
import { createAuthWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.uttils';
import Button from '../Button/button.component';
import InputForm from '../input-form/form-input';
import './signup.style.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  
  const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
  

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})

    }

    const handleSubmit = async(e) => {

        e.preventDefault();
        if(password !== confirmPassword) {
            alert('passwords do not match!!')
            return;
        }

        try {
            const {user} = await createAuthWithEmailAndPassword( email, password)
            console.log(user);
            // update display name 
            await createUserDocumentFromAuth(user, {displayName})

        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                    alert('email already in use')
            }else console.log(error);

        }
    }

  return (
   <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>

        <InputForm
            label='Display Name'
            type='text'
            required
            onChange={handleChange}
            name='displayName'
            value={displayName}
            />
        <InputForm
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
            />

            <InputForm
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
            />

            <InputForm
            label='Confirm Password'
            type='password'
            required
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
            />
            <Button buttonType="inverted" type='submit'>Sign Up</Button>
        </form>
    </div>
  )
}

export default SignUpForm