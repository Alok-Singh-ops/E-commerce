import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ScrollToTop from './Components/ScrollTop';
import Cart from './Components/Cart/Cart';
import RegistrationForm from './Components/Registration/Registration.jsx';
import Login from './Components/Login/Login';
import ProtectedRoutes from './Routes/ProtectedRoutes';





function App() {
  
  return (
    <ScrollToTop>

    <div className="App">
      <Routes>
              <Route path='/' element = {<HomePage/>} />
              <Route path = '/product-details' element = {<ProductDetails/>}/>
              <Route 
                path = '/cart' 
                element = {
                  <ProtectedRoutes>
                  <Cart/>
                  </ProtectedRoutes>
                  } 
                />
              <Route path = '/register' element = {<RegistrationForm/>}/>
              <Route path = '/login' element = {<Login/>}/>
              <Route path = '/cart/login' element = {<Login/>}/>

        </Routes>
        


    </div>
    </ScrollToTop>
  );
}

export default App;
