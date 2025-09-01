// components/Footer.tsx

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-dark px-5 py-4 mt-auto">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
            <Link className="navbar-brand" href="/">
              <Image
                src="/logo.png"
                alt="Next.js logo"
                width={130}
                height={50}
                priority
              />
            </Link>
            <p className="small text-muted mt-2 mb-0">
              © {new Date().getFullYear()} VenueStart
            </p>
          </div>
          <div className="col-md-6 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href="/about" className="text-dark text-decoration-none">About Us</Link> |
              <Link href="/help" className="text-dark text-decoration-none">Help Center</Link> |
              <Link href="/contact" className="text-dark text-decoration-none">Contact</Link> |
              <Link href="/terms" className="text-dark text-decoration-none">Terms & Privacy</Link> |
              <Link href="/blog" className="text-dark text-decoration-none">Blog</Link> |
              <Link href="/locations" className="text-dark text-decoration-none">Locations</Link> |
              <Link href="/sitemap" className="text-dark text-decoration-none">Sitemap</Link> |
              <Link href="/why" className="text-dark text-decoration-none">Why VenueStart</Link> |
              <Link href="/list" className="text-dark text-decoration-none">List your Venue</Link> <br/>
            </div>
            <div className="d-flex flex-wrap gap-3 justify-content-end">
              <Link href="https://facebook.com" target="_blank" className="text-dark">
                <FaFacebook />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-dark">
                <FaTwitter />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-dark">
                <FaInstagram />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-dark">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
