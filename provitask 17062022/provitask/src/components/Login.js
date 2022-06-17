import React from 'react'
import '../assets/css/LogInorSignIn-style.css'
import help from '../assets/img/help.png'
import provitaskLogo from '../assets/img/provitaskLogo.png'
import Form from 'react-bootstrap/Form'
import { NavDropdown,Navbar,Nav,Container } from 'react-bootstrap'
import { Outlet,Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <style type="text/css">
    {`
    body {
      background: rgb(185,175,254);
      background: -moz-linear-gradient(180deg, rgba(185,175,254,0.31416316526610644) 0%, rgba(255,255,255,0.5886729691876751) 54%);
      background: -webkit-linear-gradient(180deg, rgba(185,175,254,0.31416316526610644) 0%, rgba(255,255,255,0.5886729691876751) 54%);
      background: linear-gradient(180deg, rgba(185,175,254,0.31416316526610644) 0%, rgba(255,255,255,0.5886729691876751) 54%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#b9affe",endColorstr="#ffffff",GradientType=1);
    }
    `}
    </style>
    
    <div className='form-container'>
        <div className=''>
            <img className='logo-provitask' src={provitaskLogo} />
        </div>
        <div className='inputs-container'>     
           <input className='inputs' type="text" placeholder='Email address'/>
        </div>
        <div className='inputs-container'>     
           <input className='inputs' type="text" placeholder='Password'/>
        </div>
        <div className='reset'>
          <Nav.Link className='reset-link' as={Link} to="#">Did you forget your password?</Nav.Link>
        </div>
        <div className='flex-container'>
            <button className='btn-sign' type="">Sign Up</button>
        </div>
        <div className='flex-container'>
            <button className='btn-login' type="">Log In</button>
        </div>
        <div className='flex-container'>
            <p className='normal-txt'>
                By signing up you agree to our
                <span className='styled-txt'>
                    Terms of Use and Privacy Policy.
                </span> 
            </p>
        </div>
    </div>
    <div className='help-container'>
        <img className='btn-help' src={help} />
    </div>
    <section>
        <Outlet></Outlet>
    </section>
    </>
  )
}

export default Login