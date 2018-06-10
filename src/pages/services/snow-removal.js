import React from 'react';
import Link from 'gatsby-link';

import Footer from '../../components/Footer';

import cover from '../../assets/serv2.1-comp.jpg';
import lm1 from '../../assets/sr.jpg';

const TurfFertilization = () => (
  <div>
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
        <Link to="/">Home</Link> > <Link to="/services">Services</Link> > Snow Removal
      </div>
      <img src={lm1} />
      <h3>Professional snow removal & salting</h3>
      <p>
        Snow removal and salting improves the safety of your commercial property. Ensure peace of mind this winter by hiring a professional and budget friendly team.
        ICE offers seasonal contracts paid monthly where snowfall is estimated. As well as per push projects which is charged based on the amount of snowfall.
      </p>
      <h3>Snow Relocation</h3>
      <p>
        ICE offers relocation, which involves moving large bodies of snow to new location to clear up space. We can move the snow to another location on the property. Or we can incorporate a dump truck to bring the snow to an offsite location.
      </p>
      <h3>Salting</h3>
      <p>
        Salting and DeIcing of roadways and sidewalks involves applying chemicals to remove ice and prevent and delay reformation of ice.
        ICE provides salting for projects of any scale. We offer basic salting as well as solutions made for -30deg. We also offer specialized solutions like triple melt.
      </p>
      <p>
        <a href="mailto:estimates@ice2010.com" target="__blank">Contact us today</a> to talk about our tailored salting plans.
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