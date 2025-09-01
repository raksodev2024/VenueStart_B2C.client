"use client";

import { APIProvider, InfoWindow, Map } from "@vis.gl/react-google-maps";
import { Feature, Point } from "geojson";
import React, {useCallback, useEffect, useState} from "react";

import { ClusteredMarkers } from "../../features/map/clustered-markers";
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
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {
            geojson? geojson.features.map((item) => (
              <div className="card col-md-12" key={item.id} id={`${item.id}`}>
                <div className="card-body">
                  <h4>{item.properties.name}</h4>
                </div>
              </div>
            )) : ''
          }
        </div>

        <div id="interactiveMap" className="col">
              <APIProvider apiKey={API_KEY}>
                <Map
                  defaultCenter={{ lat: 14.6091, lng: 121.0223 }}
                  style={{ width: "100%", height: "calc(-90px + 100vh)"}}
                  defaultZoom={10}
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