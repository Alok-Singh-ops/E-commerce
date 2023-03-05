import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../HomePage/Navbar'
import '../ProductDetails/productDetails.css'
import Footer from "../HomePage/Footer"


const ProductDetails = () => {

  const location = useLocation()
  console.log(location);
  const {state} = location
  // console.log(state);
  
  const [count, setCount] = useState(0);

  //This will handle the decrement of the no of product
  const handleDecrement = ()=>{
    setCount(preValue =>{
      if (preValue < 1) {
        return 0;
      }
      return preValue = preValue-1;
    })
    
  }
  //This will handle the increment of the no of product

  const handleIncrement = ()=>{
    setCount(preValue => {
      return preValue = preValue+1;
    })
  }
  // Putting the commas in Rs
  const toIndian = (number)=>{
    let x=number.toString();
    let lastThree = x.substring(x.length-3);
    let otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers !== '')
        lastThree = ',' + lastThree;
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }

  // handleCartClick(state);

  


  return (
    <div className='product-details'>
      <Navbar/>
      <div className="container">
        <div className="product-detail">
          <div className="product-image">
            <img src={state.item.image} alt="" />
          </div>
          <div className="product-info">
            <div className="product-title">
              <h3> {state.item.title} </h3>
            </div>
            <div className="desciption">
                {state.item.description}
            </div>
            <div className="rating">
              {state.item.rating.rate}
            </div>
            <div className="product-price">
              <h3>Rs. {toIndian(state.item.price*80)} </h3>
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
                  <button type="button" className="btn btn-primary btn-lg">Add to Cart</button>
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