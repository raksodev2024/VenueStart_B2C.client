import CardsSlider from "../../components/card-slider";
import Hero from "../../components/hero";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getContact } from "../../actions/home/get-contact";

export default async function contact() {
  const contacts = await getContact();
  return (
    <>
      <Hero image="/ContactBanner.png" title="home">
        <div className="container p-5 h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <div className="custom-heading">
            <h1 className="fw-bold text-white font-serif display-4 display-md-2">
              How can we help?
            </h1>
          </div>
          <form className="w-100">
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search..."
              />
              <button className="btn btn-primary btn-lg" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </Hero>
      <div className="container px-5">
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <CardsSlider cards={contacts} section="Contact" useSlider={false} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <p className="lh-1 fw-bold mb-2 homepageTitle">Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
}
