import React from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
    <header id="header">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">Medilab</a></h1>
      <nav id="navbar" className="navbar order-last order-lg-0">
      <NavLink className="nav-item" to={"/"}>
      <span>Home</span>
    </NavLink>
     <NavLink className="nav-item" to={"/About"}>
      <span>About</span>
    </NavLink> 
    <NavLink className="nav-item" to={"/ContactUs"}>
      <span> Contact-Us </span>
    </NavLink>
    
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>

    </div>
  </header>

    </div>
  );
};

export default Header;