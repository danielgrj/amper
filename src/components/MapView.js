import React, { useEffect, useState, useRef } from 'react';

import mapboxgl from '../config/mapboxgl';
import nodes from './../fixtures/d_node_map.json';
import regions from './../fixtures/regions.json';

import style from './Map.module.css';
import NavButton from './NavButton';

export default function Map({ history }) {
  const mapContainer = useRef(null);
  const [lat, setLat] = useState(23.6345);
  const [lng, setLng] = useState(-102.5528);
  const [zoom, setZoom] = useState(4);
  let map;

  useEffect(() => {
    nodes.features.forEach(feature => {
      feature.properties.pml = Math.random() * 22;
    });

    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [lng, lat],
      zoom
    });

    map.on('load', () => {
      map.addLayer({
        id: 'nodes',
        type: 'fill',
        source: {
          type: 'geojson',
          data: nodes
        },
        paint: {
          'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'pml'],
            0,
            '#253140',
            1,
            '#2c4e7e',
            2,
            '#2C60B1',
            3,
            '#8DADD3',
            4,
            '#A2B8D7',
            5,
            '#9CC5DF',
            6,
            '#B1CDE0',
            7,
            '#BDDDF2',
            8,
            '#CBDFED',
            9,
            '#F5EAE0',
            10,
            '#F4D5BA',
            11,
            '#EDA98A',
            12,
            '#F58552',
            13,
            '#E4ACA5',
            14,
            '#E08276',
            15,
            '#E05F4F',
            16,
            '#CC2D19',
            17,
            '#A80D00',
            18,
            '#C41809',
            19,
            '#A80D01',
            20,
            '#800B03',
            21,
            '#620601'
          ]
        },
        layout: {}
      });

      map.addLayer({
        id: 'regions',
        type: 'line',
        source: {
          type: 'geojson',
          data: regions
        },
        paint: {
          'line-color': '#ffffff',
          'line-width': 2
        }
      });

      map.addLayer({
        id: 'regions-labels',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: regions
        },
        layout: {
          'text-field': ['get', 'name'],
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top',
          'text-size': 8,
          'text-transform': 'uppercase'
        },
        paint: {
          'text-color': '#2c60b1',
          'text-halo-color': '#fff',
          'text-halo-width': 100
        }
      });
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className={style.mapContainer}></div>
      <NavButton history={history} />
    </div>
  );
}
