import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Footer from '../../components/Footer';

import cover from '../../assets/serv2.1-comp.jpg';
import lm1 from '../../assets/tf.jpg';

const WeedControl = () => (
  <div>
    <Helmet
      title="Weed Control | ICE Enterprises"
    />
    <div className="subBackground">
      <img src={cover} alt="" />
    </div>
    <header className="sub">
      <div className="headerTitle">
        <h1>Weed Control</h1>
        <p>pest control that attempts to halt noxious or injurious weeds..</p>
      </div>
    </header>
    <main className="col">
      <div className="pagination">
        <Link to="/">Home</Link> > <Link to="/services">Services</Link> > Weed Control
      </div>
      <img src={lm1} alt="Weed Control project in Illinois" />
      <h3>halting weeds quickly, and thoroughly</h3>
      <p>Weed control is a category of pest control that attempts to halt noxious or injurious weeds. While looking ugly, weeds can also compete with desired flora and fauna and cause complications. </p>
      <p>ICE utilizes only the highest quality pesticides in ALL projects. Other companies pesticides can take up to a week, Our solution ensures results in only 3 - 4 days. Our pesticides cover 120 - 170 different types of weeds versus the competitions 100 different types.</p>
      <p>
        <a href="mailto:estimates@ice2010.com" target="__blank">Contact us today</a> to learn more about our advanced weed control approach.
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

export default WeedControl;