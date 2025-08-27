import "./Hero.css"

import React, { ReactNode } from 'react'

import Image from "next/image"

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string; // optional image path
  children?: ReactNode; // fallback to children (custom content)
}
const Hero = ({ title, subtitle, image, children }: HeroProps) => {
  return (
    <section className="position-relative" id="hero">
     
      {image && (
        <Image
          src={image}
          alt={title}
          priority
          className="image-fluid w-100"
          objectFit="cover"
          fill
        />
      )}

      <div className="position-absolute" style={{top: "35%", left: "10%", transform: "translateY(-35%)", maxWidth: "100%", }}>
        <div className="custom-heading" style={{ wordWrap: "normal" }}>
          <h1 className="fw-bold text-white font-serif display-2">The Right Venue for</h1>
          <h1 className="offset-line fw-bold fs-4 fs-md-2">
            <span className="text-gold font-serif d-block display-4">Every Moment</span>
            <span className="text-white font-serif d-block text-end display-6">— Simply Yours</span>
          </h1>
        </div>
      </div>
      {children}
      
    </section>
  );
}

export default Hero