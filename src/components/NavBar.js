import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar() {

   
    return (
        <div className='navBar'>
          

            <div className='links'>
                <Link className='link' to={'/hero'}>hero</Link>
                <Link className='link' to={'/about'}>about</Link>
                <span className='nav-logo'>
                <Link className='logo' to={'/home'}><i className='fas fa-home fa-2x '/></Link>
              </span>
          
                <Link className='link' to={'/services'}>services</Link>
                <Link className='link' to={'/sign-up'}>contact</Link>

                </div>

             </div>
        
    )
}

export default NavBar
