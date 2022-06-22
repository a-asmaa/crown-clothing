import React from 'react'
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from '../../utils/firebase/firebase.uttils'
import {getRedirectResult} from 'firebase/auth'
import { useEffect } from 'react'
import SignInForm from '../../components/signin/signin.component'
import SignUpForm from '../../components/signup/signup.component'
import './authentication.style.scss'


function Authentication() {

    // useEffect(()=> {
    //     async function Auth (){
    //         const res = await getRedirectResult(auth);
    //         console.log(res);
    //         if(res){
    //             const userRef = await createUserDocumentFromAuth(res.user)
    //             console.log(userRef);
    //         }
    //     }

    //     Auth()
    // }, [])


  return (
    <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm />

    </div>
  )
}

export default Authentication