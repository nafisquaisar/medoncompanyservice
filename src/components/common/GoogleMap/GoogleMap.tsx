"use client";

/* ── Google Maps Embed Component ─────────────────── */

/*
 * Medon Company – Exact geocoded coordinates (verified via Google Maps):
 * Shop No. L-3, Street Number 1, L Block, Mahipalpur Village,
 * Mahipalpur, New Delhi, Delhi 110037
 * Lat: 28.5456529  |  Lng: 77.1255398
 */

const LAT = 28.5456529;
const LNG = 77.1255398;
const ZOOM = 16;

/*
 * Google Maps Embed – "place" mode shows the business name pin + InfoWindow
 * when the user clicks the marker, with no API key required.
 * q=  → the search/place query that creates the visible red pin
 * center= → exact coordinates
 * zoom=   → street-level zoom so the exact shop is visible
 */
const MAP_EMBED_URL =
  `https://maps.google.com/maps` +
  `?q=Medon+Company,+L-3,+Street+Number+1,+L+Block,+Mahipalpur+Village,+New+Delhi,+Delhi+110037` +
  `&ll=${LAT},${LNG}` +
  `&z=${ZOOM}` +
  `&t=m` +
  `&ie=UTF8` +
  `&iwloc=near` +
  `&output=embed`;

/* Direct Google Maps link for "Open in Maps" button */
const MAPS_DIRECTIONS_URL =
  `https://www.google.com/maps/place/Medon+Company/@${LAT},${LNG},${ZOOM}z` +
  `?q=Medon+Company,+Shop+No+L-3,+Street+Number+1,+L+Block,+Mahipalpur+Village,+New+Delhi,+Delhi+110037`;

interface GoogleMapProps {
  /** Additional CSS classes */
  className?: string;
  /** Map height, default: 300px */
  height?: number;
  /** Compact mode for footer */
  compact?: boolean;
  /** Show "Open in Maps" button below the embed */
  showOpenButton?: boolean;
}

export default function GoogleMap({
  className = "",
  height = 300,
  compact = false,
  showOpenButton = false,
}: GoogleMapProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className={`overflow-hidden ${compact ? "rounded-xl" : "rounded-2xl"}`}>
        <iframe
          src={MAP_EMBED_URL}
          width="100%"
          height={compact ? 200 : height}
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Medon Company Location – Shop No. L-3, L Block, Mahipalpur Village, New Delhi"
          aria-label="Google Maps showing Medon Company at L-3, L Block, Mahipalpur Village, New Delhi 110037"
        />
      </div>

      {showOpenButton && (
        <a
          href={MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start text-xs font-medium text-primary hover:underline"
        >
          Open in Maps ↗
        </a>
      )}
    </div>
  );
}

/* Export the directions URL for use elsewhere (e.g. Contact page) */
export { MAPS_DIRECTIONS_URL };
