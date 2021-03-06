import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import { createUserDocumentFromAuth, signInAuthWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.uttils';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/button.component';
import InputForm from '../input-form/form-input';
import './signin.style.jsx'
import { ButtonsContainer, HeaderText, SignInContainer } from './signin.style.jsx';


const defaultFormFields = {
    email: '',
    password: '',
  };
  
  const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
  
    // const {setCurrentUser} = useContext(UserContext);

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
           const res = await signInAuthWithEmailAndPassword(email, password);

        //    setCurrentUser(res)
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
   <SignInContainer >
      <HeaderText>Already have an account?</HeaderText>
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

            <ButtonsContainer>
                <Button type='submit'>Sign in</Button>
                <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google Sign in  </Button>
            </ButtonsContainer>
           
        </form>
    </SignInContainer>
  )
}

export default SignInForm