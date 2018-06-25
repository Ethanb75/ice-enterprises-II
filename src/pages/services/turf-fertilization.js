import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Footer from '../../components/Footer';

import cover from '../../assets/landscape-development.jpg';
import lm1 from '../../assets/weed-control.jpg';

const TurfFertilization = () => (
  <div>
    <Helmet
      title="Turf & Field Maintenance | ICE Enterprises"
    />
    <div className="subBackground">
      <img src={cover} />
    </div>
    <header className="sub">
      <div className="headerTitle">
        <h1>Turf Fertilization</h1>
        <p>We offer a wide range of custom solutions.</p>
      </div>
    </header>
    <main className="col">
      <div className="pagination">
        <Link to="/">Home</Link> > <Link to="/services">Services</Link> > Turf Fertilization
      </div>
      <img src={lm1} alt="Turf & Field maintenance project in Wisconsin" />
      <h3>Advanced nutrition management</h3>
      <p>
        Turf Fertilization is a maintenance solution that requires advanced nutrient management in order to allow the growth of thick + healthy grass. It’s a solution that’s helpful for all customers from small residential plots to professional athletic fields.
      </p>
      <h3>Tailored Fertilzation</h3>
      <p>
        Every lawn gets a specialized solution and treatment. Many companies offer a ‘1 size fits all’ solution that throws away the potential of your lawn. At ICE we believe in maximizing your lawns potential to grow the thickest and healthiest grass possible. Our solutions range from the basic, to multiple applications with aerations and pesticides.
      </p>
      <p>
        <a href="mailto:estimates@ice2010.com" target="__blank">Contact us today</a> to see how we can help your lawn
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

export default TurfFertilization;