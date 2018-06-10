import React, { Component } from 'react';
import './Carousel.css';

import cover1 from '../assets/iceCover-2000.jpg';
import cover2 from '../assets/serv5.jpg';
import cover3 from '../assets/serv2.1-comp.jpg';

export default class Carousel extends Component {
  render() {
    const { currentSlide } = this.props;
    return (
      <div className="carouselWrap">
        <img style={currentSlide === 0 ? { opacity: 1 } : {}} src={cover1} />
        <img style={currentSlide === 1 ? { opacity: 1 } : {}} src={cover2} />
        <img style={currentSlide === 2 ? { opacity: 1 } : {}} src={cover3} />
      </div>
    )
  }
}