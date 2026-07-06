import {
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  VENUE_ADDRESS,
  VENUE_NAME,
} from "../../constants/wedding";
import "./MapSection.css";

export function MapSection() {
  return (
    <section className="ws-map-section">
      <h2>Dove ci sposiamo</h2>
      <div className="ws-map-venue-name">{VENUE_NAME}</div>
      <div className="ws-map-venue-address">{VENUE_ADDRESS}</div>

      <div className="ws-map-iframe-wrap">
        <iframe
          src={MAPS_EMBED_URL}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Venue matrimonio"
        />
      </div>

      <div className="ws-map-cta">
        {/* TODO: Verifica che il link si apra sul posto giusto prima di pubblicare */}
        <a
          href={MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ws-map-btn"
        >
          Apri in Google Maps →
        </a>
      </div>
    </section>
  );
}
