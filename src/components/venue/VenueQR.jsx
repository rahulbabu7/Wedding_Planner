import QRCode from "react-qr-code";
import { venue } from "../../config/venue";
import "./VenueQR.css";

/**
 * QR code encoding venue.googleMapsUrl. Kept high-contrast (black on white)
 * on a plain card with generous whitespace — scanning reliability outranks
 * decoration here, per the brief.
 */
function VenueQR() {
  return (
    <div className="venue-qr">
      <div className="venue-qr__card">
        <QRCode value={venue.googleMapsUrl} size={168} fgColor="#1a1108" bgColor="#ffffff" />
      </div>
      <p className="venue-qr__caption small-caps">Scan to open location</p>
    </div>
  );
}

export default VenueQR;
