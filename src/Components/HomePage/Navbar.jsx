import React from 'react'
import '../HomePage/navbar.css'
import logo from '../../assests/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width="30" height="40"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Men</a></li>
                <li><a className="dropdown-item" href="#">Women</a></li>
                <li><a className="dropdown-item" href="#">Shoes</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Deals</a></li>
            <li className="nav-item"><a className="nav-link" href="#">What's New</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Delivery</a></li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search Products" aria-label="Search" />
            <ul className='navbar-nav'>
              <li className="nav-item"><a className="nav-link" href="#">Account</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Cart</a></li>
            </ul>
          </form>
        </div>
      </div>
  </nav>
    </>
  )
}

export default Navbar