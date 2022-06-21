import {Routes, Route} from 'react-router-dom'
import Home from './Routes/Home.component';
import Navigation from './Routes/Navigation/Navigation.component';
import SignIn from './Routes/Sign-in/SignIn.component';

const App = () => {

  const Shop = () => {
    return (
      <div>Shop </div>
    )
  }
  

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
          {/* Nested route  */} 
          <Route index element={<Home />}/>  {/* index == exact route */}
          <Route path="shop" element={<Shop/>}/>
          <Route path="sign-in" element={<SignIn/>}/>
     
      </Route>
    </Routes>
  );
}

export default App;
