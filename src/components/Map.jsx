import { useEffect } from "react";
import maplibregl from "maplibre-gl";

function MyMap() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: `https://api.maptiler.com/maps/streets/style.json?key=${
        import.meta.env.VITE_MAP_KEY
      }`,
      center: [81.77880629470101, 25.453560850902548], // lng, lat
      zoom: 17,
    });
    const marker = new maplibregl.Marker({ color: "red" }) //For marker
      .setLngLat([81.77880629470101, 25.453560850902548])
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setHTML(
          `<h4>Bal Mitra School</h4><p>Exact location will be provided after booking</p>`
        )
      )
      .addTo(map);

    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
}

export default MyMap;
