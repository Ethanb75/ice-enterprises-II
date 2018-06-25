// this is a landing for the multiple other services
import React from 'react';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';


import './css/projects.css'

import cover3 from '../assets/turf-fertilization.jpg';


const ProjectsPage = () => (
  <div>
    <Helmet
      title="Projects | ICE Enterprises"
    />
    <div className="subBackground">
      <img src={cover3} alt="Turf maintenance project" />
    </div>
    <header className="sub">
      <div className="headerTitle">
        <h1>Projects</h1>
        <p>See some of the projects we're proud of.</p>
      </div>
    </header>
    <main className="projWrap">
      <h3 className="projIntro">Recent Projects</h3>
      <div className="project"></div>
      <div className="project"> </div>
      <div className="project"></div>
      <div className="project"></div>
      <div className="project"></div>
      <div className="project"></div>
      <div className="project"></div>
      <div className="project"></div>
      <div className="project"></div>
      <div className="projectEnd">
        <h4>See our <a href="https://www.facebook.com/icesnowlandscape/">facebook</a> for more great examples.</h4>
      </div>
    </main>
    <section className="caller">
      <div>
        <h3>Contact us to learn about our capabilities.</h3>
      </div>
      <div>
        <button>(815) 271-0368</button>
        <a className="button" href="mailto:estimates@ice2010.com">estimates@ice2010.com</a>
      </div>
    </section>
    <Footer color="purple" />
  </div>
)

export default ProjectsPage