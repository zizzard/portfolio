import "./PortfolioItem.css";

import React, { useState, useLayoutEffect } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

// import img1 from "../../files/image-one.jpg";
// import img2 from "../../files/image-two.jpg";
// let images = [img1, img2];
//
// let imageURLs = [
//   require("../../files/image-one.jpg"),
//   require("../../files/image-two.jpg"),
// ];
//
// let start_idx = "01";
// let end_idx = "21";
// let title = "Fantasy Meets Reality";
// let year = "2021";
// let body =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam lacus, mollis vel felis a, suscipit tempus justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam pellentesque in lacus eu hendrerit. Vestibulum efficitur neque lectus, vel ornare velit tincidunt non. Quisque non ex massa. Sed rutrum nec sapien ac bibendum. Curabitur cursus pulvinar rhoncus. Nam porttitor metus ut mattis pulvinar. Sed tempor sapien ac mi pulvinar blandit at sit.";
// let linkURL = "https://google.com";
// let linkText = "Google";
// let category = "Photography";
// let tags = ["Photography", "Film"];

function PortfolioItem({
  id,
  size,
  title,
  year,
  body,
  linkURL,
  linkText,
  category,
  tags,
  images,
}) {
  const [height, setHeight] = useState("");

  useLayoutEffect(() => {
    function handleResize() {
      let height = ((window.innerWidth - 310) * 0.6 - 20) * (2 / 3) + 11;
      setHeight(height + "px");
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  let idx = size - id + 1;

  let start_idx = "";
  if (idx < 10) start_idx = "0";
  start_idx += idx;

  return (
    <div className="portfolio-item-container">
      <div className="portfolio-header">
        <div className="portfolio-header-left">
          <div className="portfolio-id">
            {start_idx}/{size}
          </div>
          <div className="portfolio-title">{title}</div>
        </div>
        <div className="portfolio-year">{year}</div>
      </div>
      <div className="portfolio-content">
        <div className="portfolio-carousel">
          <ImageCarousel images={images} />
        </div>
        <div className="portfolio-body" style={{ height: height }}>
          <div className="portfolio-description">{body}</div>
          <div>
            <div className="portfolio-info">
              {linkURL !== "" ? (
                <div>
                  <b>PROJECT LINK: </b>
                  <a className="portfolio-link" href={linkURL}>
                    {linkText}
                  </a>
                </div>
              ) : (
                <></>
              )}
              <div>
                <b>CATEGORY:</b> {category}
              </div>
              <div>
                <b>TAGS: </b>
                {tags.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
