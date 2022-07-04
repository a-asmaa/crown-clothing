import React from 'react'
import {Outlet, Link, NavLink} from 'react-router-dom'
import { ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.uttils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-deopdown/cart-dropdown.component'
import {useSelector} from 'react-redux'
import { LogoContainer, NavigationContainer, NavLinkContainer, NavLinks } from './navigation.styles'

function Navigation() {

  // const {currentUser} = useContext(UserContext);
  // const {isCartOpen} = useContext(CartContext);

  const {currentUser} = useSelector(state => state.user);
  const {isCartOpen} = useSelector(state => state.cart);

  // const handleSignOut = async() => {
  //   await signOutUser();
  //   // setCurrentUser(null);
  // }

  return (
    <>
    <NavigationContainer>

    <LogoContainer to={"/"}> 
        <CrownLogo className='logo'/>
    </LogoContainer>
    <NavLinkContainer >

       <NavLinks to={'shop'}> SHOP </NavLinks>

      { currentUser ?
        <NavLinks as='span'  onClick={signOutUser}> SIGN OUT </NavLinks>
        : 
        <NavLinks to={'auth'}> SIGN IN </NavLinks>
      } 

      <CartIcon />
    </NavLinkContainer>
     
      { isCartOpen && <CartDropDown />   }
      
    </NavigationContainer>
      <Outlet /> 
   </>
  )
}

export default Navigation