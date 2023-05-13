import React from "react";
import GoogleMapReact from "google-map-react";
import { GOOGLE_MAPS_API_KEY } from "config";
import "../../styles/map.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{scrollwheel : true , zoomControl : true ,}}
      >
        <AnyReactComponent lat={10.99835602} lng={77.01502627} text="My Marker" />
      </GoogleMapReact>

      {/* here we are adding some of the custom styles in map */}
    </div>
  );
};

export default Map;
