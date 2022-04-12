import React from 'react'
import '../NavBar/index.css'
import {NavLink} from 'react-router-dom'
function NavBarWrapper() {
  return (
    <nav className='navbar NAVBAR navbar-expand-lg navbar-info bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand'>Product Crud App</a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
          
            <li className='nav-item Link '>
              <NavLink className='btn-primary Link rounded '  to={"/add"}>
                <strong>Add Products</strong>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBarWrapper