import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
<script src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap" async defer></script>

const location = {
  address: "National University of Computer and Emerging Sciences, Block B, Faisal Town, Lahore, Punjab, Pakistan.",
  lat: 31.4794,
  lng: 74.3076,
};


const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = () => {
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
      <div className="google-map">
      
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={location}
          defaultZoom={17}>
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
