"use client";

import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  createCoordinates,
} from "@vnedyalk0v/react19-simple-maps";
import { Tooltip } from "react-tooltip";
import type { Collaborator } from "@/data/types";

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
        // Fallback: try local
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
          <ZoomableGroup
            center={createCoordinates(10, 20)}
            zoom={1}
          >
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(255,255,255,0.08)"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "rgba(255,255,255,0.12)", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {collaborators.map((collaborator) => (
              <Marker
                key={collaborator.name}
                coordinates={createCoordinates(collaborator.lng, collaborator.lat)}
              >
                {/* Outer glow ring */}
                <circle
                  r={8}
                  fill="rgba(35,205,192,0.15)"
                  className="animate-pulse"
                />
                {/* Inner marker */}
                <circle
                  r={4}
                  fill="var(--ci-teal)"
                  stroke="white"
                  strokeWidth={1.5}
                  className="cursor-pointer"
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(35,205,192,0.7))",
                  }}
                  data-tooltip-id="map-tooltip"
                  data-tooltip-html={`<strong>${collaborator.name}</strong><br/><span style="color:#9ca3af">${collaborator.city}, ${collaborator.country}</span><br/><span style="font-size:11px;color:#9ca3af">${collaborator.project}</span>`}
                  onMouseEnter={() => setActive(collaborator.name)}
                  onMouseLeave={() => setActive("")}
                />
              </Marker>
            ))}
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
