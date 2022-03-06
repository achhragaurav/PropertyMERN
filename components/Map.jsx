import Head from 'next/head';
import React, { useRef, useEffect, useState } from 'react';

const Map = ({coordinates}) =>{
  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');  
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWNoaHJhZ2F1cmF2IiwiYSI6ImNsMDhibmwwczAxejEzamxnOG1pdGN0MTcifQ.DhKMEkYQuw5Srka_RnIt3g';

  useEffect(() => {
  
    const map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: coordinates,
      zoom: 12.5,
      pitch: 45,
    });
    const marker1 = new mapboxgl.Marker()
.setLngLat(coordinates)
.addTo(map);

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }, []);
  return (
    <section>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <div id="my-map" style={{ height: 380, width: 900 }} />
    </section>
  )
}
export default Map