import { FeatureCollection, Point } from "geojson";

export type MarkerFeatureProps={
    name: string;
}

export type MarkerGeoJson = FeatureCollection<Point, MarkerFeatureProps>;