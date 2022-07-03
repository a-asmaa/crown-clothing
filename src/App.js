import {Routes, Route} from 'react-router-dom'
import Checkout from './Routes/Checkout/chechout.component';
import Home from './Routes/Home.component';
import Navigation from './Routes/Navigation/Navigation.component';
import Shop from './Routes/Shop/shop.component';
import Authentication from './Routes/Sign-in/Authentication.component';
import { setCurrentUser } from './store/Actions/userAction';
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.uttils';


const App = () => {

  const dispatch = useDispatch(); 

  useEffect(()=>{

    const unsubscribe = onAuthStateChangedListener(user=> {

        if(user) createUserDocumentFromAuth(user)
        console.log(user)
        dispatch(setCurrentUser(user))
      })

    return unsubscribe  // when unmount - cleanup this method

}, [])

// dispatch will never update so has no meaning to add dependency as dispatch 


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
          {/* Nested route  */} 
          <Route index element={<Home />}/>  {/* index == exact route */}
          <Route path="shop" element={<Shop />}/>
          <Route path="auth" element={<Authentication/>}/>
          <Route path="checkout" element={<Checkout/>}/>
     
      </Route>
    </Routes>
  );
}

export default App;
