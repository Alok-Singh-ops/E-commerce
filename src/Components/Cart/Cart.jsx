import React from 'react'
import { useLocation } from 'react-router-dom'


const Cart = () => {

  const location = useLocation()
  const {state} = location


  return (
    <div className='cart'>
        {state.title}
    </div>
  )
}

export default Cart