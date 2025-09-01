import "./index.css";

import React, { ReactNode } from "react";

import Image from "next/image";

interface HeroProps {
  title: string;
  image?: string; // optional image path
  children?: ReactNode; // fallback to children (custom content)
}

const Hero = ({ title, image, children }: HeroProps) => {
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
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      {children}
    </section>
  );
};

export default Hero;
