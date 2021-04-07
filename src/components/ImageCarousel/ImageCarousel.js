import "./ImageCarousel.css";
import "./bootstrap.css";

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// import LazyLoad from "react-lazyload";
import LazyLoad from "react-lazy-load";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const left = <FontAwesomeIcon icon={faChevronLeft} />;
const right = <FontAwesomeIcon icon={faChevronRight} />;

function ImageCarousel({ images, height }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (images.length !== 1) {
    return (
      <div className="bootstrap-iso">
        <LazyLoad height={height} offsetVertical={100} debounce={false}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            fade={true}
            indicators={false}
            prevIcon={left}
            nextIcon={right}
          >
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
        </LazyLoad>
      </div>
    );
  } else {
    return (
      <div className="bootstrap-iso">
        <LazyLoad height={height} offsetVertical={100} debounce={false}>
          <div className="carousel-image-container">
            <img
              className="carousel-image"
              src={images[0].default}
              alt={"image-" + images[0].idx}
            />
          </div>
        </LazyLoad>
      </div>
    );
  }
}

export default ImageCarousel;
