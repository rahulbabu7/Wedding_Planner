import Diya from "../common/motifs/Diya";

/**
 * Single reusable event card. InvitationSection maps the `events` config
 * array through this component — no per-event markup duplication.
 */
function EventDetails({ event }) {
  return (
    <li className="event-details">
      <Diya size={22} className="event-details__icon" />
      <h3 className="event-details__title font-display">{event.title}</h3>
      <p className="event-details__meta">
        {event.date} &middot; {event.time}
      </p>
      <p className="event-details__venue small-caps">{event.venue}</p>
      {event.description && <p className="event-details__description">{event.description}</p>}
    </li>
  );
}

export default EventDetails;
