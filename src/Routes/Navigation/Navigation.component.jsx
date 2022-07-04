import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.uttils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-deopdown/cart-dropdown.component'
import {useSelector} from 'react-redux'

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

      <CartIcon />
    </div>
     
      { isCartOpen && <CartDropDown />   }
      
    </div>
      <Outlet /> 
   </>
  )
}

export default Navigation