import React from 'react';

import {Carousel} from 'react-bootstrap';

function Slider() {
  return <div className="m-3 carosule-header">
      <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.bewakoof.com/uploads/category/desktop/Inside-Banner-Desktop-Oversized-Sweatshirt-Common-1640694140.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.bewakoof.com/uploads/grid/app/valentine-s-day-inside-banner-desktop-1643300079.jpg"
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.bewakoof.com/uploads/category/desktop/Inside-Banner-Desktop-Cargo-Joggers-Men-1639746126.jpg"
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
  </div>;
}

export default Slider;
