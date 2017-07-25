import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav,Button}  from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Header = () =>(
   <Nav className="navbar navbar-inverse">
     <div className="container-fluid">
       <div className="navbar-header">
         <Navbar.Brand className="nav navbar-nav navbar-left">
           <Link to='/'>MyExapmles</Link>
         </Navbar.Brand>
       </div>
       <div className="collapse navbar-collapse" id="myNavbar">
         <ul className="nav navbar-nav">
           <li><Link to='/'><span className="glyphicon glyphicon-home"></span></Link></li>
           <li><Link to='/MoviePortal'>MoviePortal</Link></li>
           <li><Link to='/DataFilter'>DataFilter</Link></li>
         </ul>
         <ul className="nav navbar-nav navbar-right">
             <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
         </ul>
       </div>
    </div>
 </Nav>
)

export default Header
