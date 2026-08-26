import { venue } from "../../config/venue";
import "./MapButton.css";

/** Backup for anyone who can't scan the QR — opens the same maps link. */
function MapButton() {
  return (
    <a href={venue.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="map-button">
      Open in Google Maps
    </a>
  );
}

export default MapButton;
