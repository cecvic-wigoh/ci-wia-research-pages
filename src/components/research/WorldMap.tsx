"use client";

import { useState } from "react";
import type { Collaborator } from "@/data/types";

interface TooltipData {
  name: string;
  project: string;
  x: number;
  y: number;
}

function projectToSvg(lat: number, lng: number, width: number, height: number) {
  const x = ((lng + 180) / 360) * width;
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = height / 2 - (mercN / Math.PI) * (height / 2);
  return { x, y };
}

const SVG_WIDTH = 800;
const SVG_HEIGHT = 400;

const continentPaths = [
  // North America
  "M130,50 L180,50 L200,80 L190,120 L160,140 L140,130 L120,100 L110,70 Z",
  // South America
  "M170,160 L190,170 L200,220 L190,260 L170,280 L160,250 L155,200 Z",
  // Europe
  "M370,40 L410,35 L420,70 L400,90 L380,85 L370,60 Z",
  // Africa
  "M370,95 L410,90 L420,130 L410,190 L390,210 L370,190 L360,140 Z",
  // Asia
  "M420,30 L550,25 L580,60 L570,100 L530,120 L480,130 L440,110 L420,80 Z",
  // India
  "M490,100 L510,95 L520,120 L510,150 L495,145 L485,120 Z",
  // Australia
  "M560,210 L600,200 L620,220 L610,240 L570,240 L555,225 Z",
];

export default function WorldMap({
  collaborators,
}: {
  collaborators: Collaborator[];
}) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  return (
    <div className="relative rounded-lg overflow-hidden bg-[var(--ci-blue-dark)] p-4">
      <div className="hidden sm:block">
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Continent outlines */}
          {continentPaths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="rgba(255,255,255,0.08)"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.5"
            />
          ))}

          {/* Collaborator markers */}
          {collaborators.map((collaborator) => {
            const projected = projectToSvg(
              collaborator.lat,
              collaborator.lng,
              SVG_WIDTH,
              SVG_HEIGHT
            );
            return (
              <circle
                key={collaborator.name}
                cx={projected.x}
                cy={projected.y}
                r={5}
                fill="var(--ci-teal)"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(35,205,192,0.6))",
                }}
                className="cursor-pointer"
                onMouseEnter={() =>
                  setTooltip({
                    name: collaborator.name,
                    project: collaborator.project,
                    x: projected.x,
                    y: projected.y,
                  })
                }
                onMouseLeave={() => setTooltip(null)}
                onClick={() =>
                  setTooltip(
                    tooltip?.name === collaborator.name
                      ? null
                      : {
                          name: collaborator.name,
                          project: collaborator.project,
                          x: projected.x,
                          y: projected.y,
                        }
                  )
                }
              />
            );
          })}
        </svg>

        {/* Tooltip overlay */}
        {tooltip && (
          <div
            className="absolute bg-white rounded shadow-lg p-3 max-w-xs pointer-events-none z-10"
            style={{
              left: `${(tooltip.x / SVG_WIDTH) * 100}%`,
              top: `${(tooltip.y / SVG_HEIGHT) * 100}%`,
              transform: "translate(-50%, calc(-100% - 60px))",
            }}
          >
            <p className="text-sm font-bold text-gray-900">{tooltip.name}</p>
            <p className="text-xs text-gray-500">{tooltip.project}</p>
          </div>
        )}
      </div>
    </div>
  );
}
