import React from 'react'
import { NavDropdown,Navbar,Nav,Container } from 'react-bootstrap'
import { Outlet,Link } from 'react-router-dom'

function NavbarB() {
  return (
    <>
        <Navbar className='nav-concatainer' expand="lg">
        <Container>
            <Navbar.Brand className='nav-icon' as={Link} to="/">React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="me-auto flex-style">
                <div className='nav-left'>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/Locations">Locations</Nav.Link>
                  <Nav.Link as={Link} to="/Services">Services</Nav.Link>
                </div>
                <div className='nav-right'>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/BecomeTaskerDatos">Become Tasker Datos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/LogInorSignIn">Log In or Sign In</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/SignUp">Sign Up</Nav.Link>
                  <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                </div>                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
    </>
  )
}

export default NavbarB