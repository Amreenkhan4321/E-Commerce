import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function Navbar() {
  const cart = useSelector(state=>state.cart)
  return (
    <nav className="navbar navbar-expand-lg bg-primary px-5  text-center">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to={"/Electronics"}>Electronics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Jwellary"}>Jwellary</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Accessories</a>
              </li>
              
            </ul>

            <Link to={"/cart"} className="btn btn-danger">
               cart  <span className="badge text-bg-secondary">{cart.length} </span>
              </Link>
          </div>
        </div>
      </nav>  )
}

export default Navbar