import "./page.css"

import Hero from "../../components/hero";
import { MarkerGeoJson } from "../../types/map/marker-feature-props";
import SearchClient from "./search-client";
import { getVenuesSearch } from "../../actions/search/get-venues-search";

export default async function Page() {
  
  const data = await getVenuesSearch();
  
  const venues: MarkerGeoJson = {
    type: "FeatureCollection",
    features: data.map((h) => ({
      type: "Feature",
      id: h.venueId,
      geometry: {
        type: "Point",
        coordinates: [Number(h.gpsLng), Number(h.gpsLat)],
      },
      properties: {
        name: h.venueName,
        rating: h.rating,
        address: h.address,
        shortDesc: h.shortDesc,
        reviewCount: h.reviewCount,
        logo: h.logoUrl,
        venueImage: h.venueImageUrl
      },
    })),
  };

  return (
    <>
      {/* <Hero image="/HomeBanner.jpg" title="home" /> */}
      <SearchClient initialVenues={venues}/>
    </>
  );
}