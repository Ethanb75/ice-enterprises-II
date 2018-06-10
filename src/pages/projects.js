// this is a landing for the multiple other services
import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer';


import './css/projects.css'

import cover3 from '../assets/serv4.jpg';

function pageHeight() {
  return document.querySelector('body').getBoundingClientRect().height
}


const ProjectsPage = () => (
  <div>
    <div className="subBackground">
      <img src={cover3} />
    </div>
    <header className="sub">
      <div className="headerTitle">
        <h1>Projects</h1>
        <p>See some of the projects we're proud of.</p>
      </div>
    </header>
    <main className="projWrap">
      {/* <p>A few projects we're proud of from Grayslake Central High School to some beautiful retaining walls. </p> */}
      <h3 className="projIntro">Recent Projects</h3>
      <div className="project">
        {/* <h4>Grayslake Central HS</h4> */}
      </div>
      <div className="project">
        {/* <h4>Project name</h4> */}
      </div>
      <div className="project">
        {/* <h4>Project name</h4> */}
      </div>
      <div className="project">
        {/* <h4>Project name</h4> */}
      </div>
      <div className="project">
        {/* <h4>Project name</h4> */}
      </div>
      <div className="project">
        {/* <h4>Project name</h4> */}
      </div>
      <div className="project">
        {/* <h4>Project name</h4> */}
      </div>
      <div className="project">
        {/* <h4>Hampton Inn</h4> */}
      </div>
      <div className="project">
        {/* <h4>Project name</h4> */}
      </div>
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