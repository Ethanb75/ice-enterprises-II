import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/logo.png';

import './Footer.css'

const Footer = ({ color }) => (
  <footer style={color ? { backgroundColor: '#702c91' } : {}}>
    <div className={color ? "footLogo purp" : "footLogo"}>
      <img src={logo} alt="Ice enterprises logo" />
      <p>Contact Jayne or Gene for a quote</p>
      <p>
        <a href="mailto:jayne@ice2010.com">jayne@ice2010.com</a> | <a href="mailto:gene@ice2010.com">gene@ice2010.com</a>
      </p>
      <p>
        <a href="tel:8152710368">(815) 271-0368</a>
      </p>
      <p>
        <a href="https://www.facebook.com/icesnowlandscape/">Facebook</a>
      </p>
    </div>
    <div className={color ? "footLinks purp" : "footLinks"}>
      <ul>
        <li><Link to="/services/turf-fertilization">Turf Management</Link></li>
        <li><Link to="/services/landscape-maintenance">Landscaping</Link></li>
        <li><Link to="/services/snow-removal">Snow Plowing</Link></li>
        <li><Link to="/services/snow-removal">DeIcing</Link></li>
        <li><Link to="/services/weed-control">Weed Control</Link></li>
        <li><Link to="/services/retaining-walls+patios">Retaining walls</Link></li>
        <li><Link to="/services/retaining-walls+patios">Patio Installation</Link></li>
      </ul>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </div>
    <div className={color ? "meta purp" : "meta"}>
      <span>© ICE Enterprises</span>
      <span>Icons by <a href="https://www.flaticon.com/authors/pixelmeetup" title="pixelmeetup">pixelmeetup</a> from <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a></span>
      <span>Site by <a href="https://www.worldwidebusinessllc.com" target="__blank">World Wide Business LLC</a></span>
    </div>
  </footer>
);

export default Footer;