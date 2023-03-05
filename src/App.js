import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ScrollToTop from './Components/ScrollTop';
import Cart from './Components/Cart/Cart';


function App() {


  return (
    <ScrollToTop>

    <div className="App">

      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path = '/product-details' element = {<ProductDetails/>}/>
        <Route path = '/cart' element = {<Cart/>} />
      </Routes>


    </div>
    </ScrollToTop>
  );
}

export default App;
