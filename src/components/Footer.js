import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/logo.png';

import './Footer.css'

const Footer = ({ color }) => (
  <footer style={color ? { backgroundColor: '#702c91' } : {}}>
    <div className={color ? "footLogo purp" : "footLogo"}>
      <img src={logo} alt="Ice enterprises logo" />
      <p>Email@address.com</p>
      <p>(815) 271-0368</p>
    </div>
    <div className={color ? "footLinks purp" : "footLinks"}>
      <ul>
        <li><Link to="/">Turf Management</Link></li>
        <li><Link to="/">Landscaping</Link></li>
        <li><Link to="/">Snow Plowing</Link></li>
        <li><Link to="/">DeIcing</Link></li>
        <li><Link to="/">Weed Control</Link></li>
        <li><Link to="/">Retaining walls</Link></li>
        <li><Link to="/">Patio Installation</Link></li>
      </ul>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Projects</Link></li>
        <li><Link to="/">Services</Link></li>
      </ul>
    </div>
    <div className={color ? "meta purp" : "meta"}>
      <span>Copyright @ICE Enterprises</span>
      <span>Site by Ethan B</span>
      <span>Top</span>
    </div>
  </footer>
);

export default Footer;