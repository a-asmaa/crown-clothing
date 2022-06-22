import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as CrownLogo} from '../../assets/crown.svg'


function Navigation() {
  return (
    <>
    <div className='navigation'>

    <Link to={"/"}> 
      <div className='logo-container'> 
        <CrownLogo className='logo'/>
      </div>
    </Link>
    <div className='nav-links-container'>

      <Link className='nav-link' to={'shop'}> Shop </Link>
      <Link className='nav-link' to={'auth'}> Sign in </Link>
     
    </div>
    </div>
      <Outlet /> 
   </>
  )
}

export default Navigation