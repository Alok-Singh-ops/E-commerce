import React, { useState } from 'react'
import axios from "../../API/axios"
import requests from '../../API/request';
import TopCards from '../HomePage/TopCards'
import "./TopPicks.css";
import Loading from '../Loading';


const TopPicks = () => {
    const [cart,setCart] = useState([]);
    const handleCartClick = (id)=>{
      console.log(id);
    }


  const [loading,setLoading] = React.useState(false);
  const [topPicks,setTopPicks] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${requests.products.limitProducts}8`)
    .then(res=>{
      setTopPicks(res.data)
      setLoading(false);
    })
    
  }, [])
  return (
    <div className='container'>
      <div className="row">
      {loading ? <Loading/> : topPicks.map((item,index)=>{
        return <TopCards className = "row" index = {index} id = {item.id} item = {item} key = {index} handleCartClick = {()=>{handleCartClick(item.id)}}></TopCards>
      })}
      </div>
      
    </div>
  )
}

export default TopPicks