import "./page.css"

import Hero from "../../components/Hero/Hero";
import SearchClient from "./search-client";

export default async function Page() {
  const res = await fetch("https://localhost:7171/Venue/Search", {
    cache: "no-store" // like SSR
  });
  
  const formatRes = (venues) => {
    const extracted = venues.map((h) => ({
      lat: h.gpsLat,
      lng: h.gpsLng,
      name: h.hotelName
    }));
    return extracted;
  }
  const data = await res.json();

  const venues = formatRes(data);

  return (
    <>
      <Hero image="/HomeBanner.jpg" title="home" />
      <SearchClient initialVenues={venues}/>
    </>
  );
}