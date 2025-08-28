import "./index.css"

import Image from "next/image"
import React from 'react'

type CardProps = {
  venue?: string;
  imgLocation?: string;
  address?: string;
  subVenue?: string;
  section?: "VenueStartPicks" | "OurPartners";
  rating?: number;
};

const Card: React.FC<CardProps> = ({ venue, imgLocation, address, subVenue, section = "VenueStartPicks", rating }) => {
  if (section === "VenueStartPicks") {
    return (
      <div>
        <div className="card text-white position-relative overflow-hidden" style={{ height: "500px", borderRadius: "15px" }}>
          <div className="card-image-wrapper" style={{ position: 'relative', height: '100%' }}>
            <Image src={imgLocation} alt="alt" priority className="h-100 w-100" style={{ objectFit: "cover" }} fill />
          </div>
          <div className="position-absolute top-0 start-0 m-3 p-1 bg-light text-dark rounded fs-6" style={{ opacity: 0.8 }}>{rating} ⭐ (100 reviews)</div>
          <div className="card-footer text-dark">
            <div className="venue-subtitle">{venue} | {address}</div>
            <div className="venue-title">{subVenue}</div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="card-full card d-flex align-items-center justify-content-center" style={{ height: '150px', border: '1px solid #ccc', borderRadius: '8px', padding: '10px', backgroundColor: '#fff' }}>        
        {imgLocation && (
            <Image src={imgLocation} alt={"alt"} priority className="image-fluid w-100" objectFit="contain" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', padding: '10px' }} fill />
          )}
      </div>

    );
  }
};

export default Card