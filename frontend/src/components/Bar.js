import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../images/logo.jpg'

export default function Bar() {
  return (
    <div className="header">
    <Navbar expand="lg" className="container-fluid">
        &nbsp;
        &nbsp;
          <Navbar.Brand className="brand"> <Nav.Link href="/"><img
              src={logo}
              alt="logo"
              height="70"
              width="85"
              style={{borderRadius:'5px'}}
            /></Nav.Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
          <br/>
          <Navbar.Collapse>
            
            <Nav className="ms-auto justify-content-center p-1 navbar">
              <strong>
                <Nav.Link href="/" className="" >Home</Nav.Link>
              </strong>
              <strong>
                <Nav.Link href="/About" >About</Nav.Link>
              </strong>
              <strong>
                <Nav.Link href="/Products" >Products</Nav.Link>
              </strong>
              <strong>
                <Nav.Link href="/Login" >Login</Nav.Link>
              </strong>
              {/* <strong>
                <Nav.Link href="/Account" >My Account</Nav.Link>
              </strong> */}
              <strong>
                {/* <Nav.Link href="/Register" >Register</Nav.Link> */}
              </strong>
              {/* <strong>
                <Nav.Link href="/Login" >Products</Nav.Link>
              </strong> */}
              <strong>
                <Nav.Link href="/Contact" >Contact</Nav.Link>
              </strong>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
