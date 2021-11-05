import * as React from 'react';
import SectionProducts from '../products/products.component';
import Slider from '../slider/slider.component';

const BodyLayout = () => {
  return (
    <>
      <Slider />
      <SectionProducts />
    </>
  )
}

export default BodyLayout;