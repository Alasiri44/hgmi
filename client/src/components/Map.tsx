import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: -1.3085544321730092,
  lng: 36.824518910903066
};

export default function Map() {
  const [showInfo, setShowInfo] = useState(false);

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=-1.3085544321730092,36.824518910903066,";

  const API_KEY = "AIzaSyCY8J6kCWANQkCk26tVfIkV8ENgp8Oma7I";

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={center} onClick={() => setShowInfo(true)} />

        {showInfo && (
          <InfoWindow position={center} onCloseClick={() => setShowInfo(false)}>
            <div>
              <h3>Higher Ground Assembly</h3>
              <p>Niamey Road, Nairobi West</p>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Get Directions
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
