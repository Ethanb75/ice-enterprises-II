import React, { Component } from 'react'
import Link from 'gatsby-link'

import './Header.css'
import logo from '../assets/logo.png';

function pageHeight() {
  return document.querySelector('body').getBoundingClientRect().height
}

export default class Header extends Component {
  state = {
    menu: false
  }
  render() {
    const { menu } = this.state;
    return (
      <div className="nav">
        <div className="navTitle">
          <h1>
            <Link
              to="/"
              style={{
                textDecoration: 'none'
              }}
            >
              <img src={logo} alt="Ice enterprises" />
            </Link>
          </h1>
        </div>
        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li onMouseEnter={() => console.log('hova')}>
            <Link to="/services">Services</Link>
          </li>
          <li className="num">
            <a href="tel:8152710368">(815) 271-0368</a>
          </li>
          <li>
            <button className="main" onClick={() => window.scrollTo({ top: pageHeight(), behavior: 'smooth' })}>Contact Us</button>
          </li>
        </ul>

        {/* mobile nav */}
        <div className={menu ? "mobileNav active" : "mobileNav"}>
          <ul>
            <li>
              <Link to="/" onClick={() => this.setState({ menu: false })}>Home</Link>
            </li>
            <li><Link to="/projects" onClick={() => this.setState({ menu: false })}>Projects</Link></li>
            <li><Link to="/about" onClick={() => this.setState({ menu: false })}>About</Link></li>
            <li>
              <Link to="/services" onClick={() => this.setState({ menu: false })}>Services</Link>
            </li>
            <li className="num"><a href="tel:8152710368">(815) 271-0368</a></li>
            <li>
              <a href="mailto:estimates@ice2010.com">estimates@ice2010.com</a>
            </li>
          </ul>
        </div>
        <button className={menu ? "mobileBtn active" : "mobileBtn"} onClick={() => this.setState({ menu: !menu })}>
          {menu ? 'close' : 'menu'}
        </button>
      </div>
    )
  }
}
