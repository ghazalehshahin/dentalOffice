import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slideshow.styles.scss';

import dandun from './images/dandun.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${dandun})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${pic3})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${pic4})`}}>
            </div>
          </div>
        </Slide>
        
      </div>
    )
};
export default Slideshow;