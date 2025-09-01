import CardsSlider from "../../components/card-slider";
import Hero from "../../components/hero";
import Image from "next/image";
import Link from "next/link";
import { getFAQ } from "../../actions/home/get-faq";
import { getTestimonials } from "../../actions/home/get-testimonials";
import { getWhyListWithUs } from "../../actions/home/get-whylistwithus";
import { getWorks } from "../../actions/home/get-works";

export default async function listYourVenue() {
  const howItWorks = await getWorks();
  const whylistwithus = await getWhyListWithUs();
  const faq = await getFAQ();
  const testimonial = await getTestimonials();
  return (
    <>
      <Hero image="/HomeBanner.jpg" title="home">
        <div className="container-fluid p-5 h-100 d-flex align-items-center">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 px-3 px-md-4">
              <div className="custom-heading">
                <h1 className="fw-bold text-white font-serif display-4 display-md-2">
                  Your Local Venue Solution — Built for the Philippine Market
                </h1>
                <p className="text-white fs-5 fs-md-5 font-serif">
                  List your venue on Venuestart and connect directly with
                  companies, event planners, and private groups across the
                  Philippines. No listing fees. No long-term commitments. Just
                  qualified leads and confirmed bookings.
                </p>
                <div className="d-flex justify-content-center">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_PARTNER_URL}/Account/Login`}
                    passHref
                  >
                    <button className="btn btn-custom rounded-0 px-4 py-2 fw-bold">
                      List Your Space
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <div className="container px-5">
        <div className="row mt-5">
          <div className="col-md-12 mb-3">
            <CardsSlider
              cards={howItWorks}
              section="HowItWorks"
              useSlider={false}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 mb-3">
            <CardsSlider
              cards={whylistwithus}
              section="WhyListWithUs"
              useSlider={false}
            />
          </div>
        </div>
        <div className="row mt-3">
          <p className="fw-bold mb-2 homepageTitle">
            List your venue and let Venuestart handle the sales.
          </p>
          <p className="">Optimized Sales system for faster conversions</p>
          <div className={`container`}>
            <div className="row align-items-center">
              <div className="col-md-6 p-4">
                <h2 className="fw-bold">🔧 Streamlined EMS Workflow</h2>
                <p>
                  Our platform is built for efficiency. Manage all steps — from
                  inquiry and quotation to billing, feedback, and booking
                  history — in one dashboard. No more back-and-forth emails or
                  scattered Excel files.
                </p>
                <h2 className="fw-bold">
                  📊 Branded Documents, White-Labeled for You
                </h2>
                <p>
                  All client-facing documents such as quotations, vouchers, and
                  invoices are sent automatically with your hotel’s logo and
                  identity
                </p>
              </div>
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
              <div className="col-md-6 p-4">
                <h2 className="fw-bold">
                  🚀 The Quicker You Quote, the More You Win
                </h2>
                <p>
                  Speed is a competitive edge in venue sales. Venuestart reduces
                  response time with intelligent tools and coordinator support
                  so you can quote faster, impress clients, and secure more
                  confirmed bookings even during peak season.
                </p>
                <h2 className="fw-bold">🔗 Cross-Channel Promotion</h2>
                <p>
                  Once listed, your venue detail page can be linked from your
                  website, social media, or email campaigns — allowing you to
                  send clients directly to an optimized inquiry form.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 mb-3">
            <CardsSlider cards={testimonial} section="Testimonial" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 mb-3">
            <CardsSlider cards={faq} section="FAQ" useSlider={false} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row d-flex align-items-stretch">
              <div className="col-md-6 mb-3 mb-md-0 d-flex">
                <div className="card shadow-sm flex-fill d-flex flex-column">
                  <div className="card-body p-5 d-flex flex-column">
                    <h4 className="card-title mb-4 text-center fw-bold">
                      Need help getting started?
                    </h4>
                    <p className="mb-4">
                      Busy or unsure how to begin? Let us help you onboard and
                      complete your venue listing.
                    </p>
                    <form className="d-flex flex-column align-items-center ">
                      <div className="form-floating mb-3 col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter Name"
                        />
                        <label htmlFor="name">Name</label>
                      </div>
                      <div className="form-floating mb-3 col-md-12">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter Email"
                        />
                        <label htmlFor="email">Email address</label>
                      </div>
                      <div className="form-floating mb-3 col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          id="venue"
                          placeholder="Venue Name"
                        />
                        <label htmlFor="venue">Venue Name</label>
                      </div>
                      <div className="form-floating mb-3 flex-grow-1 col-md-12">
                        <textarea
                          className="form-control"
                          placeholder="Your message"
                          id="message"
                          style={{ height: "100%" }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-custom w-50 mt-auto fw-bold"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex ">
                <div className="card shadow-sm flex-fill ">
                  <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title fw-bold">
                      Listing your space takes just 5 minutes.
                    </h4>
                    <p>Start now.</p>
                    <button type="submit" className="btn btn-custom w-50 mt-3 fw-bold">
                      Start Listing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
