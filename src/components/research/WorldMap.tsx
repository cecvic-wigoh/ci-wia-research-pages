"use client";

import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
  ZoomableGroup,
  createCoordinates,
} from "@vnedyalk0v/react19-simple-maps";
import { Tooltip } from "react-tooltip";
import type { Collaborator } from "@/data/types";

// Cancer Institute (WIA), Adyar, Chennai — the hub
const ADYAR_COORDS = createCoordinates(80.26, 13.0);

export default function WorldMap({
  collaborators,
}: {
  collaborators: Collaborator[];
}) {
  const [geoData, setGeoData] = useState<object | null>(null);
  const [, setActive] = useState("");

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch(() => {
        fetch("/countries-110m.json")
          .then((res) => res.json())
          .then((data) => setGeoData(data));
      });
  }, []);

  if (!geoData) {
    return (
      <div className="relative rounded-lg overflow-hidden bg-[var(--ci-blue-dark)]">
        <div className="hidden sm:flex items-center justify-center" style={{ height: 400 }}>
          <p className="text-white/40 text-sm">Loading map...</p>
        </div>
        <div className="sm:hidden py-8 text-center">
          <p className="text-white/60 text-sm">View on a larger screen to see the interactive map</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-[var(--ci-blue-dark)]">
      <div className="hidden sm:block">
        <ComposableMap
          projectionConfig={{
            scale: 147,
          }}
          style={{ width: "100%", height: "auto" }}
        >
          <defs>
            {/* Gradient for the arc lines — teal fading out */}
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--ci-teal)" stopOpacity={0.6} />
              <stop offset="50%" stopColor="var(--ci-teal)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="var(--ci-teal)" stopOpacity={0.6} />
            </linearGradient>
          </defs>

          <ZoomableGroup
            center={createCoordinates(65, 20)}
            zoom={1.25}
          >
            {/* Country outlines */}
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255,255,255,0.07)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "rgba(255,255,255,0.10)", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Arc lines from Adyar to each collaborator */}
            {collaborators.map((collaborator) => (
              <Line
                key={`arc-${collaborator.name}`}
                from={ADYAR_COORDS}
                to={createCoordinates(collaborator.lng, collaborator.lat)}
                stroke="url(#arcGradient)"
                strokeWidth={1.5}
                strokeLinecap="round"
                fill="none"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(35,205,192,0.4))",
                }}
              />
            ))}

            {/* Collaborator markers */}
            {collaborators.map((collaborator) => (
              <Marker
                key={collaborator.name}
                coordinates={createCoordinates(collaborator.lng, collaborator.lat)}
              >
                <circle
                  r={7}
                  fill="rgba(35,205,192,0.12)"
                  className="animate-pulse"
                />
                <circle
                  r={3.5}
                  fill="var(--ci-teal)"
                  stroke="white"
                  strokeWidth={1}
                  className="cursor-pointer"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(35,205,192,0.6))",
                  }}
                  data-tooltip-id="map-tooltip"
                  data-tooltip-html={`<strong>${collaborator.name}</strong><br/><span style="color:#9ca3af">${collaborator.city}, ${collaborator.country}</span><br/><span style="font-size:11px;color:#9ca3af">${collaborator.project}</span>`}
                  onMouseEnter={() => setActive(collaborator.name)}
                  onMouseLeave={() => setActive("")}
                />
              </Marker>
            ))}

            {/* Hub marker — Cancer Institute (WIA), Adyar — always visible label */}
            <Marker coordinates={ADYAR_COORDS}>
              {/* Large outer pulse */}
              <circle
                r={16}
                fill="rgba(35,205,192,0.08)"
                className="animate-pulse"
              />
              {/* Medium ring */}
              <circle
                r={10}
                fill="rgba(35,205,192,0.15)"
              />
              {/* Inner marker — larger than collaborator markers */}
              <circle
                r={5}
                fill="var(--ci-teal)"
                stroke="white"
                strokeWidth={2}
                style={{
                  filter: "drop-shadow(0 0 8px rgba(35,205,192,0.8))",
                }}
              />
              {/* Always-visible name card */}
              <g transform="translate(12, -20)">
                <rect
                  x={0}
                  y={0}
                  width={140}
                  height={36}
                  rx={6}
                  fill="rgba(0,0,0,0.7)"
                  stroke="var(--ci-teal)"
                  strokeWidth={1}
                  style={{
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))",
                  }}
                />
                <text
                  x={10}
                  y={15}
                  fontSize={9}
                  fontWeight={700}
                  fill="white"
                  fontFamily="var(--font-heading), serif"
                >
                  Cancer Institute (WIA)
                </text>
                <text
                  x={10}
                  y={28}
                  fontSize={7.5}
                  fill="var(--ci-teal)"
                >
                  Adyar, Chennai · Research Hub
                </text>
              </g>
            </Marker>
          </ZoomableGroup>
        </ComposableMap>

        <Tooltip
          id="map-tooltip"
          style={{
            backgroundColor: "white",
            color: "#1a1a1a",
            borderRadius: "8px",
            padding: "10px 14px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            fontSize: "13px",
            lineHeight: "1.5",
            maxWidth: "280px",
            zIndex: 50,
          }}
        />
      </div>

      {/* Mobile fallback message */}
      <div className="sm:hidden py-8 text-center">
        <p className="text-white/60 text-sm">
          View on a larger screen to see the interactive map
        </p>
      </div>
    </div>
  );
}
