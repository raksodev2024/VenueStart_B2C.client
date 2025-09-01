"use client";

import { APIProvider, InfoWindow, Map } from "@vis.gl/react-google-maps";
import { Feature, Point } from "geojson";
import React, {useCallback, useEffect, useState} from "react";

import { ClusteredMarkers } from "../../features/map/clustered-markers";
import Image from "next/image";
import { InfoWindowContent } from "../../features/map/info-window-content";
import { MarkerGeoJson } from "../../types/map/marker-feature-props";

type SearchClientProps = {
  initialVenues: MarkerGeoJson;
};

const API_KEY = (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string);
const MAP_ID=(process.env.NEXT_PUBLIC_MAPS_ID as string);
const SearchClient = ({initialVenues}: SearchClientProps) => {
  const [geojson, setGeojson] = useState<MarkerGeoJson | null>(null);
  const [numClusters, setNumClusters] = useState(0);                                                                                           
  useEffect(() => {
    setGeojson(initialVenues);
  }, [initialVenues]);
  
  useEffect(() => {
    //
  },[numClusters])

useEffect(() => {
  const observer = new MutationObserver(() => {
    const iwContent = document.querySelector<HTMLDivElement>(".gm-style-iw");
    const mapCanvas = document.querySelector<HTMLDivElement>(".gm-style > div");

    if (iwContent && mapCanvas) {
      const handler = (e: WheelEvent) => {
        e.preventDefault();

        const cloned = new WheelEvent("wheel", e);
        mapCanvas.dispatchEvent(cloned);
      };

      iwContent.addEventListener("wheel", handler, { passive: false });
      return () => {
        iwContent.removeEventListener("wheel", handler);
      };
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  return () => observer.disconnect();
}, []);
  
  const [infowindowData, setInfowindowData] = useState<{
    anchor: google.maps.marker.AdvancedMarkerElement;
    features: Feature<Point>[];
  } | null>(null);
  
  const handleInfoWindowClose = useCallback(
    () => setInfowindowData(null),
    [setInfowindowData]
  );

  return (
    <div className="container-fluid d-flex mt-5">
        <div className="col d-flex flex-column align-items-center gap-5">
          {
            geojson? geojson.features.map((item) => (
              <div className="card col-md-12" key={item.id} id={`${item.id}`}>
                <div className="inner-search-result">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-3">
                      <Image 
                        src={item.properties.venueImage}
                        alt={item.properties.name}
                        className="image-fluid rounded-start"
                        objectFit="cover"
                        width={200}
                        height={150}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-2">
                          <div className="me-3">
                            <Image 
                              src={item.properties.logo}
                              alt={item.properties.name}
                              className="image-fluid rounded-start"
                              width={40}
                              height={40}
                            />
                          </div>
                          <div>
                            <small className="mb-1 small text-muted">
                              {item.properties.address}
                            </small>
                            <h3 className="card-title mb-0">{item.properties.name}</h3>
                          </div>
                        </div>
                        <h5 className="card-text small">
                          {item.properties.shortDesc}
                        </h5>
                        <p className="card-text small text-muted mb-0">
                          {item.properties.rating} ⭐ ({item.properties.reviewCount} reviews)
                        </p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col-md-3 mx-auto">
                      <button className="show-more" data-bs-toggle="collapse" data-bs-target={`#${item.properties.name}`}>
                        Show Spaces
                      </button>
                    </div>     
                  </div>             
                </div>
                <div className="collapse px-4 pb-2 show" id={item.properties.name}>
                </div>
              </div>
            )) : ''
          }
        </div>

        <div id="interactiveMap" className="col">
              <APIProvider apiKey={API_KEY}>
                <Map
                  defaultCenter={{ lat: 14.537646675071121, lng: 121.00039268776447 }}
                  style={{ width: "100%", height: "calc(-90px + 100vh)"}}
                  defaultZoom={13}
                  disableDefaultUI
                  gestureHandling="greedy"
                  styles={[
                    {
                      featureType: "pointOfInterest",
                      elementType: "all",
                      stylers: [{ visibility: "off" }],
                    },
                    {
                      featureType: "infrastructure",
                      elementType: "all",
                      stylers: [{ visibility: "off" }],
                    },
                  ]}
                  mapId={MAP_ID}
                >
                  {geojson && (
                <ClusteredMarkers
                  geojson={geojson}
                  setNumClusters={setNumClusters}
                  setInfowindowData={setInfowindowData}
                />
              )}

              {infowindowData && (
                <InfoWindow
                  onCloseClick={handleInfoWindowClose}
                  anchor={infowindowData.anchor}
                  disableAutoPan={true}
                >
                  <InfoWindowContent features={infowindowData.features} />
                </InfoWindow>
              )}
                </Map>
              </APIProvider>
        </div>
      </div>
  )
}

export default SearchClient