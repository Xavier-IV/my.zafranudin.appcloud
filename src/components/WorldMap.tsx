"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import affectedCountries from "../data/affected-countries.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface AffectedCountry {
  countryCode: string;
  countryName: string;
  status: string;
  discoveredBy: string;
  date: string;
  details: string;
  reportCount: number;
  affectedModels: string[];
}

export function WorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const affectedCountriesMap = new Map(
    (affectedCountries as AffectedCountry[]).map((country) => [
      country.countryName,
      country,
    ])
  );

  const affectedCountryNames = Array.from(affectedCountriesMap.keys());

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="relative">
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{
          scale: 140,
        }}
        className="w-full h-auto"
        onMouseMove={handleMouseMove}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties?.NAME || geo.properties?.name;
              const isAffected = affectedCountryNames.includes(countryName);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isAffected ? "#3b82f6" : "#262626"}
                  stroke="#404040"
                  strokeWidth={0.5}
                  onMouseEnter={() => setHoveredCountry(countryName)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      fill: isAffected ? "#1e40af" : "#525252",
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Tooltip */}
      {hoveredCountry && (
        <div
          className="fixed pointer-events-none z-10 bg-background border border-border rounded-lg px-3 py-2 text-sm shadow-lg"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 10,
          }}
        >
          <div className="flex items-center gap-2">
            {affectedCountriesMap.has(hoveredCountry) && (
              <div className="w-2 h-2 bg-accent rounded-full"></div>
            )}
            <span className="font-medium">{hoveredCountry}</span>
          </div>
          {affectedCountriesMap.has(hoveredCountry) && (
            <div className="text-xs text-accent mt-1">
              AppCloud confirmed •{" "}
              {affectedCountriesMap.get(hoveredCountry)?.reportCount}{" "}
              {affectedCountriesMap.get(hoveredCountry)?.reportCount === 1
                ? "report"
                : "reports"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
