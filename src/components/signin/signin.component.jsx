import React from 'react'
import { useState } from 'react';
import { createUserDocumentFromAuth, signInAuthWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.uttils';
import Button from '../Button/button.component';
import InputForm from '../input-form/form-input';
import './signin.style.scss'


const defaultFormFields = {
    email: '',
    password: '',
  };
  
  const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
  

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
           const res = await signInAuthWithEmailAndPassword(email, password)
           console.log(res);

        } catch (error) {

            switch(error.code){
                case "auth/wrong-password":
                    alert("incorrect password!!")
                break;
                case "auth/user-not-found":
                    alert("No user associated with this email!")
                break;
                default: 
                console.log(error);
            }
        }
    }

  return (
   <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>

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

            <div className='buttons-container'>
                <Button type='submit'>Sign in</Button>
                <Button type='button' buttonType="google" onClick={signInWithGoogle} >Google Sign in  </Button>
            </div>
           
        </form>
    </div>
  )
}

export default SignInForm