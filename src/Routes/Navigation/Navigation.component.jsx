import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.uttils'


function Navigation() {

   const {currentUser} = useContext(UserContext);

  // const handleSignOut = async() => {
  //   await signOutUser();
  //   // setCurrentUser(null);
  // }

  return (
    <>
    <div className='navigation'>

    <Link to={"/"}> 
      <div className='logo-container'> 
        <CrownLogo className='logo'/>
      </div>
    </Link>
    <div className='nav-links-container'>

      <Link className='nav-link' to={'shop'}> SHOP </Link>

      { currentUser ? 
        <span className='nav-link' onClick={signOutUser}> SIGN OUT </span>
        : 
        <Link className='nav-link' to={'auth'}> SIGN IN </Link>
      }
     
    </div>
    </div>
      <Outlet /> 
   </>
  )
}

export default Navigation