import {Routes, Route} from 'react-router-dom'
import { setCurrentUser } from './store/Actions/userAction';
import {useDispatch} from 'react-redux'
import { useEffect, lazy, Suspense } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.uttils';
import { GlobalStyle } from './global.styles';
import Spinner from './components/spinner/spinner.component';


const Checkout = lazy(()=> import('./Routes/Checkout/chechout.component'));
const Home = lazy(()=> import('./Routes/Home.component'))  ;
const Navigation = lazy(()=> import('./Routes/Navigation/Navigation.component'));
const Shop = lazy(()=> import('./Routes/Shop/shop.component'));
const Authentication = lazy(()=> import('./Routes/sign-in-and-sign-up/Authentication.component'));


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
    <>
      <GlobalStyle />
      <Suspense fallback={<Spinner />} >
        <Routes>
            <Route path="/" element={<Navigation />}>
                {/* Nested route  */} 
                <Route index element={<Home />}/>  {/* index == exact route */}
                <Route path="shop/*" element={<Shop />}/>
                <Route path="auth" element={<Authentication/>}/>
                <Route path="checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
