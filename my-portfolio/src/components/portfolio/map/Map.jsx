import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

const Map = ({ location, zoomLevel }) => {
  location = {
    address: "4 Aare Avenue",
    lat: "7.4227427034116005",
    lng: "3.9111727286923763",
  };
  return (
    <div className="map text-white">
      <h2 className="map-h2">Come visit us at our office</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
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
