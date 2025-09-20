"use client";

import { useState } from "react";
import affectedCountries from "../data/affected-countries.json";

interface AffectedCountry {
  countryCode: string;
  countryName: string;
  status: string;
  discoveredBy: string;
  date: string;
  details: string;
  reportCount: number;
}

export function StatsBox() {
  const [showTooltip, setShowTooltip] = useState(false);

  const totalReports = (affectedCountries as AffectedCountry[]).reduce(
    (sum, country) => sum + country.reportCount,
    0
  );

  const totalCountries = affectedCountries.length;

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-20">
      <a
        href="/global-impact"
        className="block bg-background/95 backdrop-blur-sm border-l border-r border-b border-border rounded-b-lg px-4 py-3 sm:px-6 sm:py-4 shadow-xl cursor-pointer hover:bg-background/100 transition-colors"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold">
            {totalReports} {totalReports === 1 ? "Case" : "Cases"}
          </div>
          <div className="text-sm sm:text-base text-muted font-medium">
            {totalCountries} {totalCountries === 1 ? "Country" : "Countries"}
          </div>
        </div>
      </a>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 sm:w-72 bg-background border border-border rounded-lg p-3 sm:p-4 shadow-lg text-sm sm:text-base">
          <div className="font-semibold mb-2">Reported Cases</div>
          <p className="text-muted text-xs sm:text-sm leading-relaxed">
            These are manually verified reports of AppCloud found on Samsung
            devices. Each case represents a user who confirmed the presence of
            this surveillance software.
          </p>
        </div>
      )}
    </div>
  );
}
