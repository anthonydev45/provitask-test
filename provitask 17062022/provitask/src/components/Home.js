import React from 'react'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Button from 'react-bootstrap/Button';
import { Outlet,Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import htw from '../assets/img/htw.png'
import ios from '../assets/img/ios.png'
import android from '../assets/img/android.png'
import help from '../assets/img/help.png'
import '../assets/css/home-style.css'
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Home() {
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



<div className='container divflex'>
  <div>
    <h1 className='bynt'>Book Your Next Task</h1>
  </div>
  <div>
    <InputGroup className="mb-3">
    <input className='src-style' placeholder="Write the task you need help with"  aria-label="Write the task you need help with" />
    </InputGroup>
  </div>

  <table responsive className='noBorder'>
    <tr>
      <td><Button variant="primary">Primary</Button></td>
      <td><Button variant="primary">Primary</Button></td>
      <td><Button variant="primary">Primary</Button></td>
      <td><Button variant="primary">Primary</Button></td>
    </tr>
    <tr>
      <td><Button variant="primary">Primary</Button></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>

  <div className='categories-container'>
    <table responsive className='categories'>
      <tr>
        <td><button className='btn-categories2' type="text">Furnituri Assembly</button></td>
        <td><button className='btn-categories2' type="text">Mounting</button></td>
        <td><button className='btn-categories2' type="text">Cleaning</button></td>
        <td><button className='btn-categories2' type="text">Delivery</button></td>
      </tr>
      <tr>
        <td colSpan={4} className='btn-unique'><button className='btn-categories2' type="text">Home reapirs</button></td>
      </tr>
    </table>
  </div>
  
  

  <div className='second'>
    <div className='secondlogo'>
      <img className='provitask1' src={htw} />
    </div>
    <div className='secondtext'>

    <h1>How Provitask Works</h1>
    <h5>Select below to receive special offers</h5>


    
    <table className='tblbtn'>
    <tr>
      <td><Button variant="primary">Primary</Button></td>
      <td><Button variant="primary">Primary</Button></td>
      <td><Button variant="primary">Primary</Button></td>
    </tr>
    <tr>
      <td colSpan={3}><Button variant="primary">Primary</Button></td>
    </tr>
    </table>


    
    <table className='tblbtn2'>
      <tr>
        <td><button className='btn-provitask2' type="text">Personal</button></td>
        <td><button className='btn-provitask2' type="text">Business</button></td>
        <td><button className='btn-provitask2' type="text">Both</button></td>
        <td><button className='btn-dismiss2' type="text">Dismiss</button></td>
      </tr>
    </table>
    </div>
  </div>
  <div className='separator'></div>
  <div className='third'>
    <div className='star'>
      900+ thousands review
    </div>
    <div className='ios'>
      <img  src={ios} />
    </div>
    <div className='google'>
      <img  src={android} />
    </div>
  </div>
  <div className='carousel'>
    <Carousel variant="dark" style={{ width: '100%' }}>
      <Carousel.Item interval={1000}>
        <div className='carousel-style'>
          <div className='card-style1'>
            1
          </div>
          <div className='card-style2'>
            2
          </div>
          <div className='card-style3'>
            3
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className='carousel-style'>
          <div className='card-style1'>
            4
          </div>
          <div className='card-style2'>
            5
          </div>
          <div className='card-style3'>
            6
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-style'>
          <div className='card-style1'>
            7
          </div>
          <div className='card-style2'>
            8
          </div>
          <div className='card-style3'>
            9
          </div>
        </div>
      </Carousel.Item>
  </Carousel>
  </div>
  <div className='help-container'>
    <img className='btn-help' src={help} />
  </div>
  
  <div className='footer'>
      
  </div>

  <footer>
    klfgdifvgbcvhfdbgfdjbjfbvjifbfgb
  </footer>
  <section>
    <Outlet></Outlet>
  </section>
</div>


</>
  )
}

export default Home