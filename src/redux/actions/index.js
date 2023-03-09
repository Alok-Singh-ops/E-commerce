import {actionTypes} from '../types'

export const addCart = (product)=>{
  return {
    type: "ADDITEM",
    payload: product
  }
}

export const delCart = (product)=>{
  return {
    type: "DELITEM",
    payload: product
  }
}

export const handleIncrement = (product) =>{
  return {
    type: "INC",
    payload: product
  }
}

// export const formData = (formData)=>{
//   return {
//     type: "FORMDATA",
//     pa
//   }
// }
