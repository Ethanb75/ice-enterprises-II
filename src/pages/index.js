import React, { Component } from 'react';
import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

import './css/index.css';

//icons below
import landscape from '../assets/icons/landscape.svg';
import plow from '../assets/icons/plow.svg';
import turf from '../assets/icons/turf.svg';
import dot from '../assets/icons/dot.svg';
import quote from '../assets/icons/quote1.svg';

//images
import fam1 from '../assets/abt2.jpg';
import fam2 from '../assets/truck2.jpg';
import fam3 from '../assets/serv1.jpg';
import fam4 from '../assets/serv3.jpg';
import trim from '../assets/trim3.jpg';

let carouselInterval;

function pageHeight() {
  return document.querySelector('body').getBoundingClientRect().height
}

export default class IndexPage extends Component {
  state = { carouselSlide: 0 }
  startCarousel() {
    // function is called to setInterval
    // on manual change, interval is reset and image stage changes
    carouselInterval = setInterval(() => {
      let oldSlide = this.state.carouselSlide;
      console.log(oldSlide);
      return this.state.carouselSlide === 2 ? this.setState({ carouselSlide: 0 }) : this.setState({ carouselSlide: this.state.carouselSlide + 1 });
    }, 8000);
  }
  manualCarouselSelect(selectionNumber) {
    this.setState({ carouselSlide: selectionNumber });
    clearInterval(carouselInterval);
    this.startCarousel();
  }
  componentDidMount() {
    this.startCarousel();
  }
  componentWillUnmount() {
    clearInterval(carouselInterval);
  }
  render() {
    const { carouselSlide } = this.state;
    return (
      <div>
        <Helmet
          title="ICE Enterprises | Illinois & Wisconsin Landscaping and Salting"
        />

        <div className="background">
          <Carousel currentSlide={carouselSlide} />
          <div>
            <span>enterprise landscaping</span>
          </div>
        </div>

        <header>
          <div className="carouselControls">
            <span>
              <div style={carouselSlide === 0 ? { opacity: 1 } : {}}>Grayslake Central HS</div>
              <div style={carouselSlide === 1 ? { opacity: 1 } : {}}>Grant HS</div>
              <div style={carouselSlide === 2 ? { opacity: 1 } : {}}>Local Home</div>
            </span>
            <button onClick={() => this.manualCarouselSelect(0)} className={carouselSlide === 0 ? 'cActive' : ''}>1</button>
            <button onClick={() => this.manualCarouselSelect(1)} className={carouselSlide === 1 ? 'cActive' : ''}>2</button>
            <button onClick={() => this.manualCarouselSelect(2)} className={carouselSlide === 2 ? 'cActive' : ''}>3</button>
          </div>
          <div className="headerTitle">
            <h1><span>ICE</span> Enterprises</h1>
            <p>A Wisconsin & Illinois company specializing in snow removal and landscape planning, engineering, and architecture.</p>
            <div>
              <button onClick={() => window.scrollTo({ top: pageHeight(), behavior: 'smooth' })}>Contact Us</button>
            </div>
          </div>
        </header>
        <section id="heroServ">
          <div>
            <div>
              <h3><span>20</span> years of professional service</h3>
              <p>For over 20 years ICE enterprises has made happy customers in the greater Wisconsin area. we offer a wide range of services to suite corporations of all sizes.</p>
            </div>
            <div>
              <img src={trim} />
            </div>
          </div>
          <div className="subTitleWrap">
            <h3>We offer <span>tailored</span> solutions for every budget</h3>
            <p>In our 20 years of business we've offered many complex solutions for every project. Visit the services page or contact us today to learn about all the tailored solutions we offer.</p>
          </div>
          <div className="heroServices">
            <div>
              <img src={turf} />
              <h3>Turf Management</h3>
              <p>Advanced nutrient management in order to allow the growth of thick + healthy grass.</p>
            </div>
            <div>
              <img src={landscape} />
              <h3>Landscaping</h3>
              <p>One of our most popular solutions is the general maintenance solution. This includes premium fertilization, weeding, mowing, mulching and more.</p>
            </div>
            <div>
              <img src={plow} />
              <h3>Snow Plowing & Salting</h3>
              <p>Ensure peace of mind this winter by hiring a professional and budget friendly team.</p>
            </div>
          </div>
          <div>
            <button className="main button" onClick={() => navigateTo('/services')}>see all services</button>
          </div>
        </section>
        <section className="heroAbout">
          <div>
            <img src={fam2} />
          </div>
          <div>
            <img src={fam4} />
          </div>
          <div className="habtText">
            {/* <h3>Experienced in delivering consistent excellence</h3> */}
            <h3>Experienced in consistent excellence</h3>
            <p>We're experienced in bringing you the top commercial landscaping services. Regardless of previous condition, we consistently make amazing products. </p>
            <Link to="/projects" className="main button">see our projects</Link>
          </div>
          <div>
            <img src={fam3} />
          </div>
          <div>
            <img src={fam1} />
          </div>
        </section>
        <section className="quote">
          <div>
            <img src={quote} />
            <h3>We had a short timeline and a small budget, other companies declined our project but ICE helped us deIce for the season.</h3>
            {/* <em>Company Name</em> */}
          </div>
        </section>
        <section className="caller">
          <div>
            <h3>Contact us today and join our team of happy customers</h3>
          </div>
          <div>
            <button>(815) 271-0368</button>
            <a className="button" href="mailto:estimates@ice2010.com">estimates@ice2010.com</a>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
