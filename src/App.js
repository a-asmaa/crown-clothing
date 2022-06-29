import {Routes, Route} from 'react-router-dom'
import Home from './Routes/Home.component';
import Navigation from './Routes/Navigation/Navigation.component';
import Shop from './Routes/Shop/shop.component';
import Authentication from './Routes/Sign-in/Authentication.component';

const App = () => {

  

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
          {/* Nested route  */} 
          <Route index element={<Home />}/>  {/* index == exact route */}
          <Route path="shop" element={<Shop />}/>
          <Route path="auth" element={<Authentication/>}/>
     
      </Route>
    </Routes>
  );
}

export default App;
