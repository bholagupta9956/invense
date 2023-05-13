import React from "react";
import GoogleMapReact from "google-map-react";
import { GOOGLE_MAPS_API_KEY } from "config";
import { MdMargin } from "react-icons/md";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  //     const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "643px", width: "100%", marginTop: "10px", background: "white" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{zoomControl : true}}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
