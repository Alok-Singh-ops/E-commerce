import React, { useState } from 'react'
import '../HomePage/navbar.css'
import logo from '../../assests/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from "../../Firebase/firebase"
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { getAuth,signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";



const Navbar = () => {

  const [currentUser,setCurrentUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      console.log(user);
      if (user) {
        setCurrentUser(user)
      }
      else{
        setCurrentUser(null)
      }
    })  
  }, [])

  const handleSignOut = ()=>{
    const auth = getAuth();
    signOut(auth)
    .then(() => {
      toast.success("Logged Out succesfully",{
        position: toast.POSITION.TOP_LEFT
      } )
      
      console.log("success");
    })
    .catch((error) => {
      toast.error("Some error has occured",{
        position: toast.POSITION.TOP_LEFT
      } )
});
  }


  const state = useSelector((state)=>state.handleCart)


  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width="30" height="40"/>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-2">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Deals</a></li>
            <li className="nav-item"><a className="nav-link" href="#">What's New</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Delivery</a></li>
          </ul>
            <ul className='navbar-nav'>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a>
              <ul className="dropdown-menu">
                {
                  currentUser 
                  ? 
                    <li><a className="dropdown-item" href="#" onClick={handleSignOut}>Sign Out</a></li>
                  :
                    <li><Link to = {"/login"}className="dropdown-item" href="#">Sign In</Link></li>
                }
              </ul>
            </li>
              <Link to = "/cart" className="nav-link" href="#">
                <li className="nav-item cart" >
                  <span>Cart</span>
                  <span>({state.length})</span>
                </li>
              </Link>
            </ul>
        </div>
      </div>
      <ToastContainer/>
  </nav>
    </>
  )
}

export default Navbar