import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../HomePage/Navbar'
import '../ProductDetails/productDetails.css'
import Footer from "../HomePage/Footer"


const ProductDetails = () => {

  const location = useLocation()
  const {state} = location
  
  const [count, setCount] = useState(0)
  const handleDecrement = ()=>{
    setCount(preValue =>{
      if (preValue < 1) {
        return 0;
      }
      return preValue = preValue-1;
    })
    
  }

  const handleIncrement = ()=>{
    setCount(preValue => {
      return preValue = preValue+1;
    })
  }

  const toIndian = (number)=>{
    let x=number.toString();
    let lastThree = x.substring(x.length-3);
    let otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers !== '')
        lastThree = ',' + lastThree;
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }

  const handleCartClick = ()=>{
    
  }

  return (
    <div className='product-details'>
      <Navbar/>
      <div className="container">
        <div className="product-detail">
          <div className="product-image">
            <img src={state.image} alt="" />
          </div>
          <div className="product-info">
            <div className="product-title">
              <h3> {state.title} </h3>
            </div>
            <div className="desciption">
                {state.description}
            </div>
            <div className="rating">
              {state.rating.rate}
            </div>
            <div className="product-price">
              <h3>Rs. {toIndian(state.price*80)} </h3>
            </div>
            <div className="counter">
              <span>
              <button type="button" className="btn btn-light" onClick={handleDecrement}>-</button>
              </span>
              <span>
              <button type="button" className="btn btn-light">{count}</button>

              </span>
              <span>
              <button type="button" className="btn btn-light" onClick={handleIncrement}>+</button>
              </span>
              <div className="buying">
                <div className="buy">
                  <button type="button" className="btn btn-primary btn-lg">Buy Now</button>
                </div>
                <div className="addtocart">
                  <button type="button" className="btn btn-primary btn-lg" onClick={handleCartClick}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ProductDetails