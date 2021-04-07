import "./PortfolioItem.css";

import React, { useState, useLayoutEffect } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

import Sienna_MP4 from "../../files/portfolio_data/19_sienna_single_cover/instagram-story.mp4";
import Metro_PDF from "../../files/portfolio_data/17_la_metro_rebrand/project.pdf";
import Roots_PDF from "../../files/portfolio_data/16_roots_line/project.pdf";
import CE_Lookbook_PDF from "../../files/portfolio_data/15_center_earth/lookbook.pdf";
import CE_Project_PDF from "../../files/portfolio_data/15_center_earth/project.pdf";
import AS_Project_PDF from "../../files/portfolio_data/14_anna_sui/project.pdf";
import AS_Instagram_MP4 from "../../files/portfolio_data/14_anna_sui/instagram-ad.mp4";
import Microbe_OTF from "../../files/portfolio_data/4_microbe/Microbe.otf";

function PortfolioItem({
  id,
  size,
  title,
  year,
  body,
  linkURL,
  linkText,
  linkType,
  secondaryLinkURL,
  secondaryLinkText,
  secondaryLinkType,
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
          <ImageCarousel images={images} height={height} />
        </div>
        <div className="portfolio-body" style={{ height: height }}>
          <div className="portfolio-description">{body}</div>
          <div>
            <div className="portfolio-info">
              {linkURL !== "" && linkType === "href" ? (
                <div>
                  <b>PROJECT LINK #1: </b>
                  <a
                    className="portfolio-link"
                    href={linkURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {linkText}
                  </a>
                </div>
              ) : (
                <></>
              )}
              {linkURL !== "" && linkType === "metro_pdf" ? (
                <div>
                  <b>PROJECT LINK #1: </b>
                  <a
                    className="portfolio-link"
                    href={Metro_PDF}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {linkText}
                  </a>
                </div>
              ) : (
                <></>
              )}
              {linkURL !== "" && linkType === "roots_pdf" ? (
                <div>
                  <b>PROJECT LINK #1: </b>
                  <a
                    className="portfolio-link"
                    href={Roots_PDF}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {linkText}
                  </a>
                </div>
              ) : (
                <></>
              )}

              {linkURL !== "" && linkType === "ce_lookbook_pdf" ? (
                <div>
                  <b>PROJECT LINK #1: </b>
                  <a
                    className="portfolio-link"
                    href={CE_Lookbook_PDF}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {linkText}
                  </a>
                </div>
              ) : (
                <></>
              )}

              {linkURL !== "" && linkType === "as_project_pdf" ? (
                <div>
                  <b>PROJECT LINK #1: </b>
                  <a
                    className="portfolio-link"
                    href={AS_Project_PDF}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {linkText}
                  </a>
                </div>
              ) : (
                <></>
              )}

              {linkURL !== "" && linkType === "microbe_otf" ? (
                <div>
                  <b>PROJECT LINK #1: </b>
                  <a
                    className="portfolio-link"
                    href={Microbe_OTF}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {linkText}
                  </a>
                </div>
              ) : (
                <></>
              )}
              {secondaryLinkURL !== "" && secondaryLinkType === "href" ? (
                <div>
                  <b>PROJECT LINK #2: </b>
                  <a
                    className="portfolio-link"
                    href={secondaryLinkURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {secondaryLinkText}
                  </a>
                </div>
              ) : (
                <></>
              )}
              {secondaryLinkURL !== "" && secondaryLinkType === "sienna_mp4" ? (
                <div>
                  <b>PROJECT LINK #2: </b>
                  <a
                    className="portfolio-link"
                    href={Sienna_MP4}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {secondaryLinkText}
                  </a>
                </div>
              ) : (
                <></>
              )}
              {secondaryLinkURL !== "" &&
              secondaryLinkType === "ce_project_pdf" ? (
                <div>
                  <b>PROJECT LINK #2: </b>
                  <a
                    className="portfolio-link"
                    href={CE_Project_PDF}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {secondaryLinkText}
                  </a>
                </div>
              ) : (
                <></>
              )}

              {secondaryLinkURL !== "" &&
              secondaryLinkType === "as_instagram_mp4" ? (
                <div>
                  <b>PROJECT LINK #2: </b>
                  <a
                    className="portfolio-link"
                    href={AS_Instagram_MP4}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {secondaryLinkText}
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
