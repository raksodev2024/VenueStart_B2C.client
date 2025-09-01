"use client";

import "./index.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";

import Card from "../card";

type CardData = {
  venue?: string;
  imgLocation?: string;
  address?: string;
  subVenue?: string;
  rating?: number;
  title?: string;
  description?: string;
  stepno?: number;
};

type CardsSliderProps = {
  cards: CardData[];
  section?:
    | "FeaturedVenues"
    | "ExplorebyCategory"
    | "BrandsWeWorkWith"
    | "PlanYourEventin5Steps"
    | "HowItWorks"
    | "WhyListWithUs"
    | "FAQ"
    | "Testimonial"
    | "Contact";
  useSlider?: boolean;
};

const CardsSlider = ({
  cards,
  section = "FeaturedVenues",
  useSlider = true,
}: CardsSliderProps) => {
  const [slidesPerView, setSlidesPerView] = useState(5);
  const swiperRef = useRef(null);
  const colClass =
    section === "WhyListWithUs"
      ? "col-12 col-sm-6 col-md-4"
      : section === "FeaturedVenues"
      ? "col-12 col-sm-6 col-md-3"
      : section === "Contact"
      ? "col-12 col-sm-6 col-md-4"
      : section === "FAQ"
      ? "col-12 col-sm-6 col-md-12"
      : "col-12 col-sm-6 col-md-3";

  useEffect(() => {
    if (!useSlider) return;
    const updateSlides = () => {
      const w = window.innerWidth;
      if (section === "Testimonial") {
        setSlidesPerView(1);
        return;
      }
      if (w <= 480) setSlidesPerView(1);
      else if (w <= 768) setSlidesPerView(2);
      else if (w <= 1024) setSlidesPerView(3);
      else setSlidesPerView(4);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <div className="col-md-12 mb-3">
      <div className="d-flex justify-content-between align-items-center mb-3 bg-transparent">
        <div>
          {section === "FeaturedVenues" ? (
            <p className="lh-1 fw-bold mb-2 homepageTitle">Featured Venues</p>
          ) : section === "WhyListWithUs" ? (
            <p className="lh-1 fw-bold mb-2 homepageTitle">Why List With Us</p>
          ) : section === "FAQ" ? (
            <p className="lh-1 fw-bold mb-2 homepageTitle">
              Frequently Asked Questions
            </p>
          ) : section === "BrandsWeWorkWith" ? (
            <p className="lh-1 fw-bold mb-2 homepageTitle">
              Brands We Work With
            </p>
          ) : section === "PlanYourEventin5Steps" ? (
            <p className="lh-1 fw-bold mb-2 homepageTitle">
              Plan Your Event in 5 Steps
            </p>
          ) : section === "HowItWorks" ? (
            <>
              <p className="lh-1 fw-bold mb-2 homepageTitle">How It Works</p>
              <p className="lh-1">
                Listing your venue is simple, Just follow the 4 easy steps and
                star accepting bookings
              </p>
            </>
          ) : null}
        </div>
        {section === "FeaturedVenues" && (
          <div className="d-flex">
            <button
              className="btn btn-link text-dark p-0 me-2"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <i className="bi bi-arrow-left-circle custom-icon"></i>
            </button>
            <button
              className="btn btn-link text-dark p-0 ms-2"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <i className="bi bi-arrow-right-circle custom-icon"></i>
            </button>
          </div>
        )}
      </div>

      <div className="cards-slider-wrapper position-relative">
        {useSlider ? (
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={slidesPerView}
            spaceBetween={10}
            loop={cards.length >= slidesPerView}
            autoplay={cards.length >= slidesPerView ? { delay: 2000 } : false}
            allowTouchMove={cards.length >= slidesPerView}
            pagination={{ clickable: true, el: ".external-pagination" }}
            centeredSlides={cards.length < slidesPerView}
            centerInsufficientSlides={true}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i}>
                <Card {...card} section={section} />
              </SwiperSlide>
            ))}
            <div className="external-pagination mt-4 text-center"></div>
          </Swiper>
        ) : (
          <div className="row g-3">
            {cards.map((card, i) => (
              <div className={colClass} key={i}>
                <Card {...card} section={section} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsSlider;
