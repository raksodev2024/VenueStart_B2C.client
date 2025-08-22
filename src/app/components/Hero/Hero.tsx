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

      <div className="position-absolute top-50 start-50 translate-middle bg-white">
        
        <div>
          <h1>The Righ Venue for</h1>
        </div>
        <div>
          <h1><span>Every Moment</span> - Simply Yours</h1>
        </div>
      </div>
      {children}
      
    </section>
  );
}

export default Hero