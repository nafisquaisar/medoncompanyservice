"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ── Types ────────────────────────────────────────── */
export interface MapLocation {
  name: string;
  lat: number;
  lng: number;
  isHQ?: boolean;
}

interface VirtualMapProps {
  locations: MapLocation[];
  regionName: string;
  accent?: "blue" | "emerald";
}

/* ── Normalize lat/lng → x/y in [0,1] with padding ─ */
function normalizePoints(locations: MapLocation[]) {
  if (locations.length === 0) return [];

  const lats = locations.map((l) => l.lat);
  const lngs = locations.map((l) => l.lng);

  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  const latRange = maxLat - minLat || 0.01;
  const lngRange = maxLng - minLng || 0.01;

  const pad = 0.10;

  return locations.map((loc) => ({
    ...loc,
    x: pad + ((loc.lng - minLng) / lngRange) * (1 - 2 * pad),
    y: pad + ((maxLat - loc.lat) / latRange) * (1 - 2 * pad),
  }));
}

/* ── Avoid label collisions by alternating above/below ─ */
function getLabelSide(idx: number, total: number): "top" | "bottom" | "left" | "right" {
  const sides: ("top" | "bottom" | "left" | "right")[] = ["top", "bottom", "right", "left"];
  return sides[idx % sides.length];
}

/* ── Color Themes ─────────────────────────────────── */
const THEMES = {
  blue: {
    pin: "#2563eb",
    pinLight: "#60a5fa",
    hq: "#f59e0b",
    hqRing: "#fbbf24",
    line: "#93c5fd",
    labelBg: "#1e40af",
    labelText: "#ffffff",
    hqLabelBg: "#b45309",
    bg: "linear-gradient(145deg, #eff6ff 0%, #dbeafe 40%, #bfdbfe 100%)",
    dot: "#bfdbfe",
    regionBg: "rgba(37,99,235,0.04)",
  },
  emerald: {
    pin: "#059669",
    pinLight: "#34d399",
    hq: "#f59e0b",
    hqRing: "#fbbf24",
    line: "#6ee7b7",
    labelBg: "#065f46",
    labelText: "#ffffff",
    hqLabelBg: "#b45309",
    bg: "linear-gradient(145deg, #ecfdf5 0%, #d1fae5 40%, #a7f3d0 100%)",
    dot: "#a7f3d0",
    regionBg: "rgba(5,150,105,0.04)",
  },
};

/* ── Main Component ───────────────────────────────── */
export default function VirtualMap({
  locations,
  regionName,
  accent = "blue",
}: VirtualMapProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const points = normalizePoints(locations);
  const t = THEMES[accent];

  const W = 1000;
  const H = 620;

  const hqPoint = points.find((p) => p.isHQ);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200/60 shadow-2xl shadow-black/[0.06]">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        style={{ background: t.bg }}
        role="img"
        aria-label={`Illustrated map of ${regionName} service areas with ${locations.length} pinned locations`}
      >
        <defs>
          {/* Dot grid pattern */}
          <pattern id={`dots-${accent}`} width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1" fill={t.dot} opacity="0.6" />
          </pattern>
          {/* Glow filter */}
          <filter id={`pin-glow-${accent}`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Shadow filter for labels */}
          <filter id={`label-shadow-${accent}`} x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Background grid */}
        <rect width={W} height={H} fill={`url(#dots-${accent})`} />

        {/* Subtle region blob */}
        <ellipse cx={W * 0.5} cy={H * 0.48} rx={W * 0.35} ry={H * 0.35} fill={t.regionBg} />

        {/* ── Connection lines from HQ to each area ──── */}
        {hqPoint &&
          points
            .filter((p) => !p.isHQ)
            .map((p, i) => (
              <line
                key={`conn-${i}`}
                x1={hqPoint.x * W}
                y1={hqPoint.y * H}
                x2={p.x * W}
                y2={p.y * H}
                stroke={t.line}
                strokeWidth="1"
                strokeDasharray="5 5"
                opacity={0.35}
              />
            ))}

        {/* ── Location Pins + Labels ──────────────────── */}
        {points.map((point, idx) => {
          const cx = point.x * W;
          const cy = point.y * H;
          const isHQ = !!point.isHQ;
          const isHovered = hoveredIdx === idx;
          const pinColor = isHQ ? t.hq : t.pin;
          const pinR = isHQ ? 8 : 5.5;

          /* Label positioning */
          const side = isHQ ? "top" : getLabelSide(idx, points.length);
          const labelW = point.name.length * 6.5 + 20;
          const labelH = 22;
          let lx = cx - labelW / 2;
          let ly = cy - pinR - labelH - 6;
          let arrowPoints = "";

          if (side === "bottom") {
            ly = cy + pinR + 6;
            arrowPoints = `${cx - 4},${ly} ${cx + 4},${ly} ${cx},${cy + pinR + 2}`;
          } else if (side === "left") {
            lx = cx - labelW - pinR - 6;
            ly = cy - labelH / 2;
            arrowPoints = `${lx + labelW},${cy - 3} ${lx + labelW},${cy + 3} ${cx - pinR - 2},${cy}`;
          } else if (side === "right") {
            lx = cx + pinR + 6;
            ly = cy - labelH / 2;
            arrowPoints = `${lx},${cy - 3} ${lx},${cy + 3} ${cx + pinR + 2},${cy}`;
          } else {
            // top (default)
            arrowPoints = `${cx - 4},${ly + labelH} ${cx + 4},${ly + labelH} ${cx},${cy - pinR - 2}`;
          }

          /* Clamp label inside SVG bounds */
          lx = Math.max(4, Math.min(W - labelW - 4, lx));
          ly = Math.max(4, Math.min(H - labelH - 4, ly));

          const showLabel = isHQ || isHovered;
          const currentLabelBg = isHQ ? t.hqLabelBg : t.labelBg;

          return (
            <g
              key={`pin-${idx}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="cursor-pointer"
            >
              {/* Pulse animation ring */}
              <circle cx={cx} cy={cy} r={pinR + 4} fill="none" stroke={pinColor} strokeWidth="1.5" opacity={0}>
                <animate attributeName="r" from={pinR + 2} to={pinR + 16} dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" repeatCount="indefinite" />
              </circle>

              {/* Outer glow */}
              <circle cx={cx} cy={cy} r={pinR + 3} fill={pinColor} opacity={0.12}
                filter={`url(#pin-glow-${accent})`} />

              {/* Pin circle */}
              <circle
                cx={cx} cy={cy} r={pinR}
                fill={pinColor}
                stroke="white"
                strokeWidth={isHQ ? 3 : 2.5}
                style={{ transition: "r 0.2s" }}
              />

              {/* Inner dot */}
              <circle cx={cx} cy={cy} r={isHQ ? 3 : 2} fill="white" />

              {/* ── Serial Number (always visible for non-HQ) ─── */}
              {!isHQ && !showLabel && (
                <text
                  x={cx}
                  y={cy - pinR - 6}
                  textAnchor="middle"
                  fill={t.pin}
                  fontSize="8"
                  fontWeight="700"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  opacity={0.7}
                >
                  {point.name.length > 12 ? point.name.substring(0, 10) + "…" : point.name}
                </text>
              )}

              {/* ── Label tooltip ────────────────────────── */}
              {showLabel && (
                <g filter={`url(#label-shadow-${accent})`}>
                  <rect
                    x={lx}
                    y={ly}
                    width={labelW}
                    height={labelH}
                    rx={7}
                    fill={currentLabelBg}
                  />
                  <polygon points={arrowPoints} fill={currentLabelBg} />
                  <text
                    x={lx + labelW / 2}
                    y={ly + labelH / 2 + 4}
                    textAnchor="middle"
                    fill={t.labelText}
                    fontSize={isHQ ? 11 : 10}
                    fontWeight={isHQ ? 800 : 600}
                    fontFamily="system-ui, -apple-system, sans-serif"
                  >
                    {point.name}{isHQ ? " ★" : ""}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* ── Bottom branding ─────────────────────────── */}
        <text x={W - 16} y={H - 14} textAnchor="end" fill={t.pin} fontSize="10" fontWeight="600"
          opacity={0.25} fontFamily="system-ui, -apple-system, sans-serif">
          Medon Company • {regionName}
        </text>

        {/* ── Location count ──────────────────────────── */}
        <text x={16} y={H - 14} textAnchor="start" fill={t.pin} fontSize="10" fontWeight="600"
          opacity={0.25} fontFamily="system-ui, -apple-system, sans-serif">
          {locations.length} Service Areas
        </text>
      </svg>

      {/* ── Legend ─────────────────────────────────────── */}
      <div className="absolute top-4 left-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-md text-xs border border-gray-100">
          <span className="h-3 w-3 rounded-full bg-amber-500 shadow-sm ring-2 ring-amber-200" />
          <span className="text-gray-700 font-semibold">Headquarters</span>
        </div>
        <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-md text-xs border border-gray-100">
          <span className="h-3 w-3 rounded-full shadow-sm ring-2"
            style={{ backgroundColor: t.pin, borderColor: t.pinLight }} />
          <span className="text-gray-700 font-semibold">Service Area</span>
        </div>
      </div>

      {/* ── Hover Card (bottom center) ─────────────────── */}
      {hoveredIdx !== null && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md
            px-5 py-2.5 rounded-2xl shadow-xl text-sm font-bold text-gray-800 border border-gray-200/60
            flex items-center gap-2"
        >
          <span className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: points[hoveredIdx].isHQ ? t.hq : t.pin }} />
          {points[hoveredIdx].name}
          {points[hoveredIdx].isHQ && <span className="text-amber-500 text-xs">★ HQ</span>}
        </motion.div>
      )}
    </div>
  );
}
