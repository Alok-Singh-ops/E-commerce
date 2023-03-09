import React from 'react'
import useAuth  from "../src/custom-hooks/useAuth"
import { Navigate } from 'react-router-dom'


const ProtectedRoutes = ({children}) => {
  const {currentUser} = useAuth();
  console.log(currentUser);

  return currentUser ? children : <Navigate to  = 'login'/>
}

export default ProtectedRoutes