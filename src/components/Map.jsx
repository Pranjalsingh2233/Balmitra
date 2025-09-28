// Using Maplibre
import * as React from "react";
import { Map, Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MyMap() {
  return (
    <Map
      initialViewState={{
        longitude: 81.77875265052504,
        latitude: 25.45351241374354,
        zoom: 15,
      }}
      style={{ height: 500, borderRadius: "10px" }}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${
        import.meta.env.VITE_MAP_KEY
      }`}
    >
      <Marker longitude={81.77875265052504} latitude={25.45351241374354}>
        <div
          style={{
            backgroundColor: "#fff",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "2px solid #000",
          }}
        >
          <img src="/logo.png" alt="logo" className="img-fluid" />
        </div>
      </Marker>
    </Map>
  );
}
