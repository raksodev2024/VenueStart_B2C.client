"use client";

import "./CardSlider.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";

import Card from "../Card/Card";

type CardData = {
  venue?: string;
  imgLocation?: string;
  address?: string;
  subVenue?: string;
  section?: "VenueStartPicks" | "OurPartners";
  rating?: number;
};

type CardsSliderProps = {
  cards: CardData[];
  section?: "VenueStartPicks" | "OurPartners"; 
};

const CardsSlider = ({ cards, section = "VenueStartPicks" }: CardsSliderProps) => {
  const [slidesPerView, setSlidesPerView] = useState(5);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const updateSlides = () => {
      const w = window.innerWidth;
      if (w <= 480) setSlidesPerView(1);
      else if (w <= 768) setSlidesPerView(2);
      else if (w <= 1024) setSlidesPerView(3);
      else setSlidesPerView(5);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <div className="col-md-12 mb-3">
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
          <div className="d-flex">
            <button className="btn btn-link text-dark p-0 me-2" onClick={() => swiperRef.current?.slidePrev()}>
              <i className="bi bi-arrow-left-circle custom-icon"></i>
            </button>
            <button className="btn btn-link text-dark p-0 ms-2" onClick={() => swiperRef.current?.slideNext()}>
              <i className="bi bi-arrow-right-circle custom-icon"></i>
            </button>
          </div>
        )}

      </div>

      <div className="cards-slider-wrapper position-relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          loop
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true, el: ".external-pagination" }}
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <Card {...card} section={section} />
            </SwiperSlide>
          ))}
          <div className="external-pagination mt-4 text-center"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default CardsSlider;
