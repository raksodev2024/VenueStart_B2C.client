import {FeatureCollection, GeoJsonProperties, Point} from 'geojson';
import Supercluster, {ClusterProperties} from 'supercluster';
import {useCallback, useEffect, useMemo, useReducer} from 'react';

import {useMapViewport} from './use-map-viewport';

export function useSupercluster<T extends GeoJsonProperties>(
  geojson: FeatureCollection<Point, T>,
  superclusterOptions: Supercluster.Options<T, ClusterProperties>
) {
  const clusterer = useMemo(() => {
    return new Supercluster(superclusterOptions);
  }, [superclusterOptions]);

  const [version, dataWasUpdated] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    clusterer.load(geojson.features);
    dataWasUpdated();
  }, [clusterer, geojson]);

  const {bbox, zoom} = useMapViewport({padding: 100});

  const clusters = useMemo(() => {
    if (!clusterer || version === 0) return [];

    return clusterer.getClusters(bbox, zoom);
  }, [version, clusterer, bbox, zoom]);

  const getChildren = useCallback(
    (clusterId: number) => clusterer.getChildren(clusterId),
    [clusterer]
  );

  const getLeaves = useCallback(
    (clusterId: number) => clusterer.getLeaves(clusterId, Infinity),
    [clusterer]
  );

  const getClusterExpansionZoom = useCallback(
    (clusterId: number) => clusterer.getClusterExpansionZoom(clusterId),
    [clusterer]
  );

  return {
    clusters,
    getChildren,
    getLeaves,
    getClusterExpansionZoom
  };
}