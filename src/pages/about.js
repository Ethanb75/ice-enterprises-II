import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';


import './css/about.css'

import cover3 from '../assets/serv5.jpg';
import abt from '../assets/abt_crop2.jpg';

const AboutPage = () => (
  <div>
    <Helmet
      title="ICE Enterprises | About Us"
    />
    <div className="subBackground">
      <img src={cover3} />
    </div>
    <header className="sub">
      <div className="headerTitle">
        <h1>About Us</h1>
        <p>Learn about the team that's dedicated to bringing you the best service.</p>
      </div>
    </header>
    <main className="abtWrap">
      <img src={abt} />
      <h3>A family owned business that's been helping businesses and individuals for over 20 years</h3>
      <p>
        ICE enterprises started after a fellow contractor refused service to a local business during a trying time because the project wasn't big enough.
        Since then ICE has opperated on the idea that every job is important no matter how small.
      </p>
      <p>
        ICE Enterprises offers a proven track record of creative, proffessional, and prompt landscape design and maintenance. We have a reputation for being the go-to landscaping company for difficult and precise projects. Because of our hard work, we've become a market leader in Wisconsin. We're working owners that care about each project individually.
      </p>
      <p></p>
    </main>
    <section className="caller">
      <div>
        <h3>Contact us today and learn about our team</h3>
      </div>
      <div>
        <button>(815) 271-0368</button>
        <a className="button" href="mailto:estimates@ice2010.com">estimates@ice2010.com</a>
      </div>
    </section>
    <Footer color="purple" />
  </div>
)

export default AboutPage