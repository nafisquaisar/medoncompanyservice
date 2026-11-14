"use client";

import { useState } from "react";

/* ── Google Maps Embed Component ─────────────────── */

/*
 * Medon Company – Two Locations
 *
 * 1) Delhi HQ:
 *    Shop No. L-3, Street Number 1, L Block, Mahipalpur Village,
 *    Mahipalpur, New Delhi, Delhi 110037
 *    Lat: 28.5456529  |  Lng: 77.1255398
 *
 * 2) Samastipur Branch:
 *    M.Hussain Market, Musrigharari, Samastipur, Bihar 848101
 *    Lat: 25.8625    |  Lng: 85.7812
 */

/* ── Location Data ─────────────────────────────────── */
const LOCATIONS = [
  {
    id: "delhi",
    label: "New Delhi (HQ)",
    shortLabel: "New Delhi",
    lat: 28.5456529,
    lng: 77.1255398,
    zoom: 16,
    query:
      "Medon+Company,+L-3,+Street+Number+1,+L+Block,+Mahipalpur+Village,+New+Delhi,+Delhi+110037",
    address:
      "Shop No, L-3, Street Number 1, L Block, Mahipalpur Village, Mahipalpur, New Delhi, Delhi 110037",
    title:
      "Medon Company Location – Shop No. L-3, L Block, Mahipalpur Village, New Delhi",
    ariaLabel:
      "Google Maps showing Medon Company at L-3, L Block, Mahipalpur Village, New Delhi 110037",
  },
  {
    id: "samastipur",
    label: "Samastipur, Bihar",
    shortLabel: "Samastipur",
    lat: 25.8625,
    lng: 85.7812,
    zoom: 16,
    query:
      "M.Hussain+Market,+Musrigharari,+Samastipur,+Bihar+848101",
    address:
      "M.Hussain Market, Musrigharari, Samastipur, Bihar 848101",
    title:
      "Medon Company Location – M.Hussain Market, Musrigharari, Samastipur",
    ariaLabel:
      "Google Maps showing Medon Company at M.Hussain Market, Musrigharari, Samastipur, Bihar",
  },
] as const;

function buildEmbedUrl(loc: (typeof LOCATIONS)[number]) {
  return (
    `https://maps.google.com/maps` +
    `?q=${loc.query}` +
    `&ll=${loc.lat},${loc.lng}` +
    `&z=${loc.zoom}` +
    `&t=m` +
    `&ie=UTF8` +
    `&iwloc=near` +
    `&output=embed`
  );
}

function buildDirectionsUrl(loc: (typeof LOCATIONS)[number]) {
  return (
    `https://www.google.com/maps/place/@${loc.lat},${loc.lng},${loc.zoom}z` +
    `?q=${loc.query}`
  );
}

/* Direct Google Maps links */
const MAPS_DIRECTIONS_URL = buildDirectionsUrl(LOCATIONS[0]);
const MAPS_DIRECTIONS_URL_SAMASTIPUR = buildDirectionsUrl(LOCATIONS[1]);

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
  const [activeIdx, setActiveIdx] = useState(0);
  const loc = LOCATIONS[activeIdx];

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* ── Location Tabs ─────────────────────────────── */}
      <div className="flex items-center gap-2">
        {LOCATIONS.map((l, i) => (
          <button
            key={l.id}
            onClick={() => setActiveIdx(i)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200
              ${
                activeIdx === i
                  ? compact
                    ? "bg-white text-primary shadow-sm"
                    : "bg-primary text-white shadow-md"
                  : compact
                    ? "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/80"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
              }`}
          >
            📍 {l.shortLabel}
          </button>
        ))}
      </div>

      {/* ── Map Embed ──────────────────────────────────── */}
      <div
        className={`overflow-hidden ${compact ? "rounded-xl" : "rounded-2xl"}`}
      >
        <iframe
          src={buildEmbedUrl(loc)}
          width="100%"
          height={compact ? 200 : height}
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={loc.title}
          aria-label={loc.ariaLabel}
        />
      </div>

      {showOpenButton && (
        <a
          href={buildDirectionsUrl(loc)}
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

/* Export the directions URLs for use elsewhere (e.g. Contact page) */
export { MAPS_DIRECTIONS_URL, MAPS_DIRECTIONS_URL_SAMASTIPUR, LOCATIONS };
