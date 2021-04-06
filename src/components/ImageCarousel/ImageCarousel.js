import "./ImageCarousel.css";
import "./bootstrap.css";

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="bootstrap-iso">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((image, idx) => {
          return (
            <Carousel.Item interval={5000} key={idx}>
              <div className="carousel-image-container">
                <img
                  className="carousel-image"
                  src={image.default}
                  alt={"image-" + idx}
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
