import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Footer from '../../components/Footer';

import cover from '../../assets/serv2.1-comp.jpg';
import lm1 from '../../assets/trim3.jpg';

const LandscapeMaintenance = () => (
  <div>
    <Helmet
      title="landscape maintenance | ICE Enterprises"
    />
    <div className="subBackground">
      <img src={cover} alt="landscape maintenance project" />
    </div>
    <header className="sub">
      <div className="headerTitle">
        <h1>Landscape Maintenance</h1>
        <p>We offer a wide range of custom solutions.</p>
      </div>
    </header>
    <main className="col">
      <div className="pagination">
        <Link to="/">Home</Link> > <Link to="/services">Services</Link> > Landscape Maintenance
      </div>
      <img src={lm1} alt="landscape maintenance project from ICE enterprises" />
      <p>Landscape maintenance is a mostly commercial solution that aims to maintain and improve. The state of your landscape speaks wonders about the state of the company or individuals residing on the property.</p>
      <h3>Family Landscaping</h3>
      <p>We’re a family owned company that goes a step further than the competitor because we have more invested in every project. Because of this we can offer specialized maintenance solutions that are tailored to a specific projects needs.</p>
      <h3>Maintenance at every level</h3>
      <p>One of our most popular solutions is the general maintenance solution. This includes premium fertilization, weeding, mowing, mulching and more. We offer the general solution on a monthly basis vs. the one time payment for specialized maintenance solutions.</p>
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

export default LandscapeMaintenance;