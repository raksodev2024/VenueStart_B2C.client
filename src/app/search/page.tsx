import "./page.css"

import Hero from "../../components/hero";
import { MarkerGeoJson } from "../../types/map/marker-feature-props";
import SearchClient from "./search-client";
import { v4 as uuidv4 } from "uuid";

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/Venue/Search`, {
    cache: "no-store" // like SSR
  });
  
  const data = await res.json();
  
  const venues: MarkerGeoJson = {
    type: "FeatureCollection",
    features: data.map((h) => ({
      type: "Feature",
      id: uuidv4(),
      geometry: {
        type: "Point",
        coordinates: [Number(h.gpsLng), Number(h.gpsLat)],
      },
      properties: {
        name: h.hotelName,
      },
    })),
  };

  return (
    <>
      <Hero image="/HomeBanner.jpg" title="home" />
      <SearchClient initialVenues={venues}/>
    </>
  );
}