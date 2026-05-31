"use client";

/* ── Google Maps Embed Component ─────────────────── */

interface GoogleMapProps {
  /** Additional CSS classes */
  className?: string;
  /** Map height, default: 300px */
  height?: number;
  /** Compact mode for footer */
  compact?: boolean;
}

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8!2d77.1171!3d28.5494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMedon+Company+Mahipalpur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

export default function GoogleMap({
  className = "",
  height = 300,
  compact = false,
}: GoogleMapProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl ${compact ? "rounded-xl" : ""} ${className}`}
    >
      <iframe
        src={MAP_EMBED_URL}
        width="100%"
        height={compact ? 200 : height}
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Medon Company Location – Mahipalpur, New Delhi"
        aria-label="Google Maps showing Medon Company office location at Mahipalpur, New Delhi"
      />
    </div>
  );
}
