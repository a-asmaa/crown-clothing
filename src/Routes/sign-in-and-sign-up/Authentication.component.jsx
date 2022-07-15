import React from 'react'
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from '../../utils/firebase/firebase.uttils'
import {getRedirectResult} from 'firebase/auth'
import { useEffect } from 'react'
import SignInForm from '../../components/signin/signin.component'
import SignUpForm from '../../components/signup/signup.component'
import './authentication.style.jsx'
import { AuthenticationContainer } from './authentication.style.jsx'


function Authentication() {

  return (
    <AuthenticationContainer>
        <SignInForm/>
        <SignUpForm />

    </AuthenticationContainer>
  )
}

export default Authentication