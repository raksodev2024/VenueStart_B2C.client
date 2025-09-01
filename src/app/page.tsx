import CardsSlider from "../components/card-slider";
import Hero from "../components/hero";
import Image from "next/image";
import Link from "next/link";
import { getPartners } from "../actions/home/get-partners";
import { getSteps } from "../actions/home/get-steps";
import { getVenues } from "../actions/home/get-venues";
import styles from "./page.module.css";

export default async function Home() {
  const cards = await getVenues();
  const partners = await getPartners();
  const steps = await getSteps();
  return (
    <>
      <Hero image="/HomeBanner.jpg" title="home">
        <div
          className="position-absolute"
          style={{
            top: "35%",
            left: "10%",
            transform: "translateY(-35%)",
            maxWidth: "100%",
          }}
        >
          <div className="custom-heading" style={{ wordWrap: "normal" }}>
            <h1 className="fw-bold text-white font-serif display-5">
              Find and book the
              <br></br>
              <span
                style={{ fontFamily: "var(--font-playfair) ", color: "yellow", fontSize:"3rem" }}
              >
                perfect venue
              </span>
              <br></br>
              for your event
            </h1>
          </div>
        </div>
        <div id="mainPage" className={styles.mainPage}>
          {
            <div className="container mt-3">
              <div className="search-box shadow d-flex align-items-center rounded-3 bg-white p-2">
                <div className="flex-fill px-2 border-end">
                  <label className="form-label fw-bold small mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control border-0 p-0 shadow-none"
                    placeholder="City or venue location"
                  ></input>
                </div>
                <div className="flex-fill px-2 border-end">
                  <label className="form-label fw-bold small mb-1">Date</label>
                  <input
                    type="text"
                    className="form-control border-0 p-0 shadow-none"
                    placeholder="MM/DD/YYYY"
                  ></input>
                </div>
                <div className="flex-fill px-2">
                  <label className="form-label fw-bold small mb-1">
                    Guests
                  </label>
                  <input
                    type="text"
                    className="form-control border-0 p-0 shadow-none"
                    placeholder="Add guests"
                  ></input>
                </div>
                <Link
                  href="/search"
                  className="btn btn-success ms-3 d-flex align-items-center justify-content-center"
                >
                  <i className="bi bi-search text-white"></i>
                </Link>
              </div>
            </div>
          }
        </div>
      </Hero>
      <div className="container px-5">
        <br />
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <CardsSlider cards={cards} section="FeaturedVenues" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 mb-3">
            <CardsSlider cards={partners} section="BrandsWeWorkWith" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <CardsSlider cards={steps} section="PlanYourEventin5Steps" />
          </div>
        </div>
        <div className="row mt-3">
          <div className={`${styles.bglightgray} container p-5`}>
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <Image
                  src="/ThirdSectionBanner.jpg"
                  alt="Sample 1"
                  width={800}
                  height={400}
                  className="img-fluid rounded"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6 bg-white p-4">
                <h2 className="fw-bold">The Right Venue, Right Here</h2>
                <p>
                  Discover curated hotels and event spaces across the
                  Philippines - from boardrooms to beachfronts - all in one
                  place.
                </p>
                <h2 className="fw-bold">Local Presence, Full Support</h2>
                <p>
                  Headquartered in the Philippines, Venuestart provides more
                  than fast quotes - we assist with site inspections, food
                  tastings, and hands-on support until your event is complete.
                </p>
                <h2 className="fw-bold">
                  Transparent Pricing & Trusted Partners
                </h2>
                <p>
                  Get clear, upfront rates with no hidden fees, working only
                  with verified venues you can rely on.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className={`${styles.bglightgray} container p-5`}>
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <Image
                  src="/FourthSectionBanner.jpg"
                  alt="Sample 1"
                  width={800}
                  height={400}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>
              <div className="col-md-6 p-4">
                <h2 className="fw-bold">Turn Space</h2>
                <h2 className="fw-bold">Into Revenue</h2>
                <p>Sell your event spaces smarter.</p>
                <p>
                  All-in-one B2B platform for venue sales — built for hotels.
                </p>
                <p>No listing fees · No lock-ins · Direct corporate leads</p>
                <div className="mt-3 border border-dark-subtle rounded mx-auto p-3 text-center">
                  LIST YOUR VENUE
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3"></div>
      </div>
    </>
  );
}
