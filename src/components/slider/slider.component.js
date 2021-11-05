import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { imgContainer, container } from './slider.module.css';

const Slider = () => {
  return (
    <div>
      <div >
        <StaticImage className='img-hero' alt='logo' src='../../images/cover.png' />
      </div>
    </div>
  )
}

export default Slider;