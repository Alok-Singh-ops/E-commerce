import axios from '../../API/axios'
import React, { useState,useEffect } from 'react'
import requests from '../../API/request';
import Cards from '../HomePage/Cards';
import './cards.css'
import Loading from '../Loading';


const MainCategories = () => {
  const [getCategories,setGetCategories] = React.useState([]);
  const [loading,setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(requests.products.getAllCategories)
    .then(res =>{
      const categories = res.data;
      setGetCategories(categories);
      setLoading(false)
    })
  },[])

  return (
    <div className="topPicks">
      <div className="container">
        <div className='row'>
        <h2>Shop Our Top Categories</h2>
        {
          loading ? <Loading/> : getCategories.map((categories,index)=>{
          return (
            <Cards key={index} title = {categories}></Cards>
          )
          })}
        </div>
      </div>
    </div>
  )
}

export default MainCategories
