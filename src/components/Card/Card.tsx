import "./Card.css"

import Image from "next/image";
import React from 'react'

type CardProps = {
  venue?: string;
  imgLocation?: string;
  address?: string;
  subVenue?: string;
  section?: "VenueStartPicks" | "OurPartners";
};

const Card: React.FC<CardProps> = ({ venue, imgLocation, address, subVenue, section = "VenueStartPicks" }) => {
  if (section === "VenueStartPicks") {
    return (
      <div>
        <div className="card text-white position-relative overflow-hidden" style={{ height: "500px", borderRadius: "15px" }}>
          <Image src={imgLocation} className="w-100 h-100" style={{ objectFit: "cover" }} alt={venue} width={100} height={100}/>
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
        <Image src={imgLocation} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt="company logo" width={100} height={100}/>
      </div>

    );
  }
};

export default Card