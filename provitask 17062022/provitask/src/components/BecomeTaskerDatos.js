import React from 'react'
import '../assets/css/BecomeTaskerDatos-style.css'
import help from '../assets/img/help.png'
import Form from 'react-bootstrap/Form'

function BecomeTaskerDatos() {
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
        <div>
            <h1 className='title-acc'>Create your account</h1>
        </div>
        <div className='flex-container'>
            <p className='inf-acc'>
                Create an account to get started. Then we'll text you a link
                to download the Provitask app to complete your registration.
                Standard call, messaging, or dta rates apply.
            </p>
        </div>
        <div className='inputs-container'>     
           <input className='inputs' type="text" placeholder='Email'/>
        </div>
        <div className='inputs-container'>     
           <input className='inputs2' type="text" placeholder='First Name'/>
           <input className='inputs3' type="text" placeholder='Last Name'/>
        </div>
        <div className='inputs-container'>     
           <input className='inputs4' type="text" placeholder='First Name'/>
           <input className='inputs5' type="text" placeholder='Last Name'/>
        </div>
        <div className='inputs-container'>     
           <input className='inputs' type="text" placeholder='Create Password'/>
        </div>
        <div className='inputs-container'>     
           <input className='inputs' type="text" placeholder='Zip Code'/>
        </div>
        <div className='confirm'>
            <Form.Check className='check' aria-label="option 1" />
            <p>I acknowledge I am a sole propietor.</p>
        </div>
        <div className='flex-container'>
            <p className='normal-txt'>
                By clicking below and creating an account,
                <span className='styled-txt'>
                    I agree to Provitask's Terms of service and Privacy Policy.
                </span> 
            </p>
        </div>
        <div className='flex-container'>
            <button className='btn-create' type="">Create Account</button>
        </div>
        
    </div>
    <div className='help-container'>
        <img className='btn-help' src={help} />
    </div>
    </>
  )
}

export default BecomeTaskerDatos

