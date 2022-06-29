import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { auth, createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from '../utils/firebase/firebase.uttils'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser : ()=> null
})


export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    useEffect(()=>{

        const unsubscribe = onAuthStateChangedListener(user=> {

            if(user) createUserDocumentFromAuth(user)
            console.log(user)
            setCurrentUser(user)
        })

        return unsubscribe  // when unmount - cleanup this method

    }, [])



    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}