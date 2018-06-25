import React, { Component } from 'react';
import './Carousel.css';

import cover1 from '../assets/turf-maintenance.jpg';
import cover2 from '../assets/turf-maintenance-2.jpg';
import cover3 from '../assets/landscape-development.jpg';

export default class Carousel extends Component {
  render() {
    const { currentSlide } = this.props;
    return (
      <div className="carouselWrap">
        <img style={currentSlide === 0 ? { opacity: 1 } : {}} src={cover1} alt="Grayslake landscaping project" />
        <img style={currentSlide === 1 ? { opacity: 1 } : {}} src={cover2} alt="Grant turf management project" />
        <img style={currentSlide === 2 ? { opacity: 1 } : {}} src={cover3} alt="landscaping maintenance project" />
      </div>
    )
  }
}