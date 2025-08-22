import React from 'react';
import logo from '../public/img/logo.png';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar-fixed-top">
    <div className="header-content">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <nav className="header-nav">
        <ul className="primary-nav">
          <li><a href="/gallery">Gallery & Events</a></li>
          <li><a href="/#instagram">Our Instagram</a></li>
          <li><a href="/shop">Our Shop</a></li>
          <li><a href="/#map">Location</a></li>
          <li className="hidden-sm hidden-xs"><a href="/#video-bg">Explore the city</a></li>
        </ul>
        <ul className="member-actions">
          <li><a href="/#rsvp" className="btn-white btn-small">RSVP</a></li>
        </ul>
      </nav>
    </div>
  </nav>
);

export default Navbar;
