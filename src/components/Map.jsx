import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "6px 8px",
      borderRadius: "50%",
      textAlign: "center",
      transform: "translate(-50%, -50%)",
      fontSize: "14px",
      fontWeight: "bold",
    }}
  >
    {text}
  </div>
);

const SimpleMapPage = ({
  center = [59.938043, 30.337157],
  zoom = 9,
  greatPlaceCoords = { lat: 59.724465, lng: 30.080121 },
}) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAO1zNMvKRiCt7zk-RrfKARDfUcH88ycwU" }}
        center={center}
        zoom={zoom}
      >
        <Marker lat={59.955413} lng={30.337844} text="A" />
        <Marker
          lat={greatPlaceCoords.lat}
          lng={greatPlaceCoords.lng}
          text="B"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMapPage;
