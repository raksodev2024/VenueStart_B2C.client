import { FeatureCollection, Point } from "geojson";

export type MarkerFeatureProps={
    name: string;
    rating: number;
    address: string;
    shortDesc: string;
    reviewCount: number;
    logo: string;
    venueImage: string;
}

export type MarkerGeoJson = FeatureCollection<Point, MarkerFeatureProps>;