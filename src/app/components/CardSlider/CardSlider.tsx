"use client";

import "./CardSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef } from "react";

import Card from "../Card/Card";
import React from "react";
import Slider from "react-slick";

type CardData = {
  venue?: string;
  imgLocation?: string;
  address?: string;
  subVenue?: string;
  section?: "VenueStartPicks" | "OurPartners";
};

type CardsSliderProps = {
  cards: CardData[];
  section?: "VenueStartPicks" | "OurPartners"; 
};

const CardsSlider = ({ cards, section = "VenueStartPicks" }: CardsSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };
  const sliderRef = useRef<Slider>(null);
  useEffect(() => {
  sliderRef.current?.slickPlay();

  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 100);
}, []);

  return (
     <div className="col-md-12 mb-3" >
      <div className="d-flex justify-content-between align-items-center mb-3 bg-transparent">
        <div>
          {section === "VenueStartPicks" ? (
            <>
              <p className="lh-1 fw-bold mb-2 homepageTitle">Venue Start Picks</p>
              <p className="lh-1">Simply better places to gather</p>
            </>
          ) : (
            <>
              <p className="lh-1 fw-bold mb-2 homepageTitle">Our Partners</p>
              <p className="lh-1">Trusted by global brands and local leaders</p>
            </>
          )}
        </div>

        {section === "VenueStartPicks" && (
          <div className="d-flex pe-5">
            <button className="btn btn-link text-dark p-0 me-2" onClick={() => sliderRef.current?.slickPrev()}>
              <i className="bi bi-arrow-left-circle" style={{ fontSize: '3rem' }}></i>
            </button>
            <button className="btn btn-link text-dark p-0 ms-2" onClick={() => sliderRef.current?.slickNext()}>
              <i className="bi bi-arrow-right-circle" style={{ fontSize: '3rem' }}></i>
            </button>
          </div>
        )}
      </div>

      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, i) => (
          <div key={i} className="px-2" >
            <Card venue={card.venue} imgLocation={card.imgLocation} address={card.address} subVenue={card.subVenue} section={section} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardsSlider;
