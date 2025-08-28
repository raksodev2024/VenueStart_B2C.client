import CardsSlider from "../components/CardSlider/CardSlider";
import Hero from "../components/Hero/Hero";
import Image from "next/image";
import Link from "next/link";
import { getVenues } from "../actions/home/getVenues";
import { getpartners } from "../actions/home/getPartners";
import styles from "./page.module.css";

export default async function Home(){
  const cards = await getVenues();
  const partners = await getpartners();
  return (
    <>
      <Hero image="/HomeBanner.jpg" title="home">
        <div id="mainPage" className={styles.mainPage}>
          {
            <div className="container mt-3">
              <div className="search-box shadow d-flex align-items-center rounded-3 bg-white p-2">
                  <div className="flex-fill px-2 border-end">
                      <label className="form-label fw-bold small mb-1">Location</label>
                      <input type="text" className="form-control border-0 p-0 shadow-none" placeholder="City or venue location"></input>
                  </div>
                  <div className="flex-fill px-2 border-end">
                      <label className="form-label fw-bold small mb-1">Date</label>
                      <input type="text" className="form-control border-0 p-0 shadow-none" placeholder="Select a date"></input>
                  </div>
                  <div className="flex-fill px-2">
                      <label className="form-label fw-bold small mb-1">Guests</label>
                      <input type="text" className="form-control border-0 p-0 shadow-none" placeholder="Add guests"></input>
                  </div>
                  <Link href="/search" className="btn btn-success ms-3 d-flex align-items-center justify-content-center">
                      <i className="bi bi-search text-white"></i>
                  </Link>
              </div>
            </div>
          }
        </div>
      </Hero>
      <div className="container-fluid px-5">
        <br/>
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <CardsSlider cards={cards} section="VenueStartPicks" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <CardsSlider cards={partners} section="OurPartners" />
          </div>
        </div>
        <div className="row mt-3">
          <div className={`${styles.bglightgray} container p-5`}>
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="position-relative">
                  <Image src="/ThirdSectionBanner.jpg" className="img-fluid rounded w-100" alt="Sample 1" 
                    width={100}
                    height={100}/>
                </div>
              </div>
              <div className="col-md-6 bg-white p-4">
                <h2 className="fw-bold">The Right Venue, Right Here</h2>
                <h4>Discover curated hotels and event spaces across the Philippines - from boardrooms to beachfronts - all in one place.</h4>
                <h2 className="fw-bold">Local Presence, Full Support</h2>
                <h4>Headquartered in the Philippines, Venuestart provides more than fast quotes - we assist with site inspections, food tastings, and hands-on support until your event is complete.</h4>
                <h2 className="fw-bold">Transparent Pricing & Trusted Partners</h2>
                <h4>Get clear, upfront rates with no hidden fees, working only with verified venues you can rely on.</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className={`${styles.bglightgray} container p-5`}>
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="position-relative" style={{ height: '100%' }}>
                  <Image 
                    src="/FourthSectionBanner.jpg" 
                    className="rounded w-100" 
                    style={{ objectFit: 'cover' }} 
                    alt="Sample 1"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="col-md-6 p-4">
                <h2 className="fw-bold">Turn Space</h2>
                <h2 className="fw-bold">Into Revenue</h2>
                <h4>Sell your event spaces smarter.</h4>
                <h4>All-in-one B2B platform for venue sales — built for hotels.</h4>
                <h4>No listing fees · No lock-ins · Direct corporate leads</h4>
                <div className="mt-3 border border-dark-subtle rounded mx-auto p-3 text-center" style={{ width: '250px' }}>LIST YOUR VENUE</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          
        </div>
      </div>
    </>
  );
}
