import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.uttils'

function SignIn() {


    const logGooglelUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userRef = await createUserDocumentFromAuth(user)
        console.log(userRef);
    }

  return (
    <div>SignIn.component


    <button onClick={logGooglelUser}> Sign in</button>

    </div>
  )
}

export default SignIn