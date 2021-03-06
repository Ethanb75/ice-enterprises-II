import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Footer from '../../components/Footer';

import cover from '../../assets/landscape-development.jpg';
import lm1 from '../../assets/retaining-walls-illinois-wisconsin.jpg';
import rw from '../../assets/retaining-wall-wisconsin.jpg';

const RetainingWalls = () => (
  <div>
    <Helmet
      title="Retaining Walls & Patio's | ICE Enterprises"
    />
    <div className="subBackground">
      <img src={cover} alt="" />
    </div>
    <header className="sub">
      <div className="headerTitle">
        <h1>Retaining Walls & Patio's</h1>
        <p>ICE enterprises not only provides landscaping maintenance, but also development. We provide professional solutions that are under budget and on time.</p>
      </div>
    </header>
    <main className="col">
      <div className="pagination">
        <Link to="/">Home</Link> > <Link to="/services">Services</Link> > Retaining Walls & Patios
      </div>
      <img src={lm1} alt="Patio project from ICE enterprises" />
      <h3>Patio's</h3>
      <p>Concerned about the market value of your home? Increase the value of your house tremendously with one project. Adding a deck provides a high return on investment at 74 percent for composite and 87 percent for wood.</p>
      <p>On top of increasing the value of your home, adding a deck adds ‘WOW’ factor that’s unmatched. Entertain your friends and family with an outdoor installment that’s perfect for relaxation, cooking, game days, and hosting.</p>
      <img src={rw} style={{ marginTop: '2rem' }} />
      <h3>Retaining walls</h3>
      <p>Retaining walls are rigid walls used to retain soil at different levels on both sides. They contain soil to a slope that wouldn’t occur naturally.</p>
      <p>Retaining walls are thought of as mostly utilitarian, but can be incorporated into your existing architecture to create a beautiful multi-use outdoor living space. Using unique shapes, terracing, and intricate designs make for beautiful outdoor solutions that add value to your home or property.</p>
      <p>Need an architetural solution that's not listed? <a href="mailto:estimates@ice2010.com" target="__blank">Contact us</a> today for a custom solution.</p>
      <h3>Manufacturers we use</h3>
      <p style={{ marginBottom: "5px" }}>
        <a href="http://rohestercp.com/outdoor-living-kits">Rocheser Living Kits</a>
      </p>
      <p style={{ marginBottom: "5px" }}>
        <a href="https://www.belgard.com">Belgard Pavers</a>
      </p>
      <p style={{ marginBottom: "5px" }}>
        <a href="https://unilock.com">Unilock Pavers</a>
      </p>
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
);

export default RetainingWalls;