"use client";

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
}

export function WorldMap() {
  const affectedCountryNames = (affectedCountries as AffectedCountry[]).map(
    (country) => country.countryName
  );

  return (
    <ComposableMap
      projection="geoNaturalEarth1"
      projectionConfig={{
        scale: 140,
      }}
      className="w-full h-auto"
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
                style={{
                  default: {
                    outline: "none",
                  },
                  hover: {
                    fill: isAffected ? "#1e40af" : "#525252",
                    outline: "none",
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
  );
}
