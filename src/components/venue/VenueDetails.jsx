import { venue } from "../../config/venue";

/**
 * Practical venue information, read entirely from config so the reception
 * location can change without touching this component.
 */
function VenueDetails() {
  return (
    <div className="venue-details">
      <p className="eyebrow">Venue</p>
      <h2 className="venue-details__name font-display">{venue.name}</h2>
      <p className="venue-details__address">{venue.address}</p>
      <p className="venue-details__datetime small-caps">
        {venue.date} &middot; {venue.time}
      </p>
    </div>
  );
}

export default VenueDetails;
