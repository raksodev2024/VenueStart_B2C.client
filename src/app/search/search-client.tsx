"use client";

import { APIProvider, InfoWindow, Map, Marker } from "@vis.gl/react-google-maps";

import { useState } from "react";

interface SearchClientProps {
    initialVenues: Venue[]
}

type Venue ={
    lat: number,
    lng: number,
    name: string
}
const SearchClient = ({initialVenues} : SearchClientProps) => {
  const [active, setActive] = useState<number | null>(null);
  const venues = initialVenues;
  
  return (<div className="container-fluid d-flex mt-5">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {
            venues.map((item, index) => (
              <div className="card col-md-12" key={index}>
                <div className="card-body">
                  <h4>{item.name}</h4>
                </div>
              </div>
            ))
          }
        </div>

        <div id="interactiveMap" className="col">
              <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                <Map
                  defaultCenter={{ lat: 20, lng: 121 }}
                  style={{ width: "100%", height: "calc(-90px + 100vh)"}}
                  defaultZoom={7}
                  disableDefaultUI
                  gestureHandling="greedy"
                  styles={[
                    {
                      featureType: "poi",
                      elementType: "all",
                      stylers: [{ visibility: "off" }],
                    },
                    {
                      featureType: "transit",
                      elementType: "all",
                      stylers: [{ visibility: "off" }],
                    },
                  ]}
                >
                {initialVenues.map((c, i) => (
                  <div key={i}>
                    <Marker
                      key={i}
                      position={{ lat: Number(c.lat), lng: Number(c.lng) }}
                      onMouseOver={() => setActive(i)}
                      onMouseOut={() => setActive(null)}
                      title={c.name || `Hotel ${i + 1}`}
                    />
                    {active === i && (
                      <InfoWindow
                        position={{ lat: Number(c.lat), lng: Number(c.lng) }}
                        
                      >
                        <div className="p-2">
                          <h4 className="font-bold">{c.name || `Hotel ${i + 1}`}</h4>
                          <p>Lat: {c.lat}, Lng: {c.lng}</p>
                        </div>
                      </InfoWindow>
                    )}
                  </div>
                ))}
                </Map>
              </APIProvider>
        </div>
      </div>
  )
}

export default SearchClient