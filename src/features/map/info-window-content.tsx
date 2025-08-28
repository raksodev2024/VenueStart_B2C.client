import {Feature, Point} from 'geojson';
import React, {memo} from 'react';

import { MarkerFeatureProps } from '../../types/map/marker-feature-props';

type InfowindowContentProps = {
  features: Feature<Point>[];
};

const numFmt = new Intl.NumberFormat();

export const InfoWindowContent = memo(function InfoWindowContent({ features }: InfowindowContentProps) {
  if (features.length === 1) {
    const f = features[0];
    const props = f.properties! as MarkerFeatureProps;
    console.log(props);
    return (
      <div>
        <h4>{props.name}</h4>
        <p>
          {/* <a href={getDetailsUrl(props)} target="_blank">
            more information
          </a> */}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h4>{numFmt.format(features.length)} features. Zoom in to explore.</h4>

      <ul>
        {features.slice(0, 5).map((feature) => {
          const props = feature.properties! as MarkerFeatureProps;

          return (
            <li key={feature.id}>
              
        <h4>{props.name}</h4>
            </li>
          );
        })}

        {features.length > 5 && (
          <li>and {numFmt.format(features.length - 5)} more.</li>
        )}
      </ul>
    </div>
  );
});