"use client";

import "./index.css";

import React, { useState } from "react";

import Image from "next/image";

type CardProps = {
  venue?: string;
  imgLocation?: string;
  address?: string;
  subVenue?: string;
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
  rating?: number;
  title?: string;
  description?: string;
  stepno?: number;
  colClass?: string;
};

const Card: React.FC<CardProps> = ({
  venue,
  imgLocation,
  address,
  subVenue,
  section = "FeaturedVenues",
  rating,
  title,
  description,
  stepno,
}) => {
  
    const [isOpen, setIsOpen] = useState(false);
  if (section === "FeaturedVenues") {
    return (
      <div>
        <div
          className="card text-white position-relative overflow-hidden"
          style={{ height: "500px", borderRadius: "15px" }}
        >
          <div
            className="card-image-wrapper"
            style={{ position: "relative", height: "100%" }}
          >
            <Image
              src={imgLocation}
              alt="alt"
              priority
              className="h-100 w-100"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
          <div
            className="position-absolute top-0 start-0 m-3 p-1 bg-light text-dark rounded fs-6"
            style={{ opacity: 0.8 }}
          >
            {rating} ⭐ (100 reviews)
          </div>
          <div className="card-footer text-dark">
            <div className="venue-subtitle shrink-text ">
              {venue} | {address}
            </div>
            <div className="venue-title">{subVenue}</div>
          </div>
        </div>
      </div>
    );
  } else if (section === "BrandsWeWorkWith") {
    return (
      <div
        className="card-full card d-flex align-items-center justify-content-center"
        style={{
          height: "150px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          backgroundColor: "#fff",
        }}
      >
        {imgLocation && (
          <Image
            src={imgLocation}
            alt={"alt"}
            priority
            className="image-fluid w-100"
            objectFit="contain"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              padding: "10px",
            }}
            fill
          />
        )}
      </div>
    );
  } else if (section === "PlanYourEventin5Steps") {
    return (
      <div>
        <div className="card p-1">
          <Image
            src={imgLocation}
            alt="alt"
            priority
            className="card-img-top p-2"
            style={{ objectFit: "contain" }}
            width={100}
            height={100}
          />
          <div className="card-body text-center">
            <p>
              {stepno && (
                <i className={`bi bi-${stepno}-circle-fill custom-icon`}></i>
              )}
            </p>
            <h5 className="card-title fw-bold shrink-text">{title}</h5>
            <p className="card-text shrink-text">{description}</p>
          </div>
        </div>
      </div>
    );
  } else if (section === "HowItWorks") {
    return (
      <div>
        <div className="col-md-12 d-flex">
          <div className="card shadow-sm ">
            <div className="card-header bg-global text-white">
              STEP {stepno}
            </div>
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">{title}</h5>
              <Image
                src={imgLocation}
                alt="alt"
                priority
                className="card-img-top p-2"
                style={{ objectFit: "contain" }}
                width={100}
                height={100}
              />
              <p className="card-text shrink-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (section === "WhyListWithUs") {
    return (
      <div>
        <div className="col-12 col-sm-6 col-md-12">
          <div className="card shadow-sm w-100">
            <div className="card-body text-center">
              <Image
                src={imgLocation}
                alt="alt"
                priority
                className="card-img-top p-2"
                style={{ objectFit: "contain" }}
                width={100}
                height={100}
              />
              <h5 className="card-title fw-bold shrink-text">{title}</h5>
              <p className="card-text shrink-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (section === "FAQ") {

    return (
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">{title || "FAQ Question"}</h5>
          <button className="btn btn-link" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "-" : "+"}
          </button>
        </div>
        {isOpen && (
          <div className="card-body">
            <p>{description || "FAQ Answer"}</p>
          </div>
        )}
      </div>
    );
  } else if (section === "Testimonial") {
    return (
      <div>
        <div className="col-12 col-sm-12 col-md-12">
          <div className="card shadow-sm w-100  bg-light p-5">
            <div className="card-body text-center">
              <p className="card-text">{description}</p>
              <h5 className="card-title fw-bold">{title}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (section === "Contact") {
    return (
      <div>
        <div className="col-12 col-sm-6 col-md-12">
          <div className="card shadow-sm w-100">
            <div className="card-body text-center">
              <Image
                src={imgLocation}
                alt="alt"
                priority
                className="card-img-top p-2"
                style={{ objectFit: "contain" }}
                width={100}
                height={100}
              />
              <h5 className="card-title fw-bold shrink-text">{title}</h5>
              <p className="card-text shrink-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
