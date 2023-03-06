import React from 'react'
import { Link } from 'react-router-dom';
import "../HomePage/TopPicks.css";


const TopCards = ({item,id,handleCartClick}) => {
  const {title,image,price,desc,rating} = item

  const toIndian = (number)=>{
    let x=number.toString();
    let lastThree = x.substring(x.length-3);
    let otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    return res;
  }

  

  // const myData = {
  //   item: item,
  //   handleCartClick: handleCartClick,
  // };
  return (
    
    <div className="col-sm-3 mb-3 mb-sm-0 topPicks_cards ">
      <Link to= {'/product-details'} state={item}>
      <div className="card topPicks_card" style={{width: "286px"}}>
      <img src= {image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="card-text">{`Rs. ${toIndian(price*80)}`}</p>
        <div className="rating">
        {rating.rate}
      </div>
      </div>
      </div>
      </Link>
    </div>


    
  )
}

export default TopCards