// this is a landing for the multiple other services
import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';


import './css/services.css'

import cover3 from '../assets/serv2.1-comp.jpg';

function pageHeight() {
  return document.querySelector('body').getBoundingClientRect().height
}


const ServicesPage = () => (
  <div>
    <Helmet
      title="ICE Enterprises | Services"
    />
    <div className="subBackground">
      <img src={cover3} />
    </div>
    <header className="sub">
      <div className="headerTitle">
        <h1>Services</h1>
        <p>We offer a wide range of custom solutions.</p>
      </div>
    </header>
    <main className="servWrap">
      <div>
        <h2>We provide a wide range of services</h2>
        <p> After 20 years of experience, ICE offers a wide range of solutions to accomplish projects of every size.
          If your service isn't listed, <span onClick={() => window.scrollTo({ top: pageHeight(), behavior: 'smooth' })}>contact</span> us today for a custom solution.</p>
      </div>
      <div>
        <div className="service">
          <h3>Landscape Maintenance <span>Including mulching, irrigation, aeration</span></h3>
          <Link to="/services/landscape-maintenance">Learn about landscape maintenance &#8594;</Link>
        </div>
        <div className="service">
          <h3>Turf Fertilization <span>the number 1 sports field care specialists</span></h3>
          <Link to="/services/turf-fertilization">Learn about turf fertilization &#8594;</Link>
        </div>
        <div className="service">
          <h3>Weed Control <span>control and prevention of weeds</span></h3>
          <Link to="/services/weed-control">Learn about weed control &#8594;</Link>
        </div>
        <div className="service">
          <h3>Retaining Walls & Patio's <span>architecture & soil retention</span></h3>
          <Link to="/services/retaining-walls+patios">Learn about retaining walls &#8594;</Link>
        </div>
        <div className="service">
          <h3>Snow Removal & Salting <span>snow removal, relocation, and deIcing</span></h3>
          <Link to="/services/snow-removal">Learn about snow removal &#8594;</Link>
        </div>
      </div>
    </main>
    <section className="caller">
      <div>
        <h3>Contact us today and learn more</h3>
      </div>
      <div>
        <button>(815) 271-0368</button>
        <a className="button" href="mailto:estimates@ice2010.com">estimates@ice2010.com</a>
      </div>
    </section>
    <Footer color="purple" />
  </div>
)

export default ServicesPage
