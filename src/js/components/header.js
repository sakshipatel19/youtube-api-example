import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav,Button}  from 'react-bootstrap';
import { Link } from 'react-router-dom'
<<<<<<< HEAD

const Header = () => (
=======
const Header = () =>(
>>>>>>> 2b3cc4eb6b8f58f29f80708ff8efa535f48326f1
   <Nav className="navbar navbar-inverse">
     <div className="container-fluid">
       <div className="navbar-header">
         <Navbar.Brand className="nav navbar-nav navbar-left">
           <Link to='/'>myYoutube</Link>
         </Navbar.Brand>
       </div>
       <div className="collapse navbar-collapse" id="myNavbar">
         <ul className="nav navbar-nav">
           <li><Link to='/'><span className="glyphicon glyphicon-home"></span></Link></li>
         </ul>
         <ul className="nav navbar-nav navbar-right">
             <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
         </ul>
       </div>
    </div>
 </Nav>
)

export default Header
