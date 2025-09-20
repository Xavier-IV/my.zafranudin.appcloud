import { Timeline } from "./components/Timeline";
import { WorldMap } from "../components/WorldMap";
import { ContributeModal } from "../components/ContributeModal";
import { StatsBox } from "../components/StatsBox";
import affectedCountries from "../data/affected-countries.json";

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

export default function Home() {
  // Get all unique affected models from all countries
  const allAffectedModels = Array.from(
    new Set(
      (affectedCountries as AffectedCountry[]).flatMap(
        (country) => country.affectedModels
      )
    )
  ).sort();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StatsBox />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pt-24 sm:pt-28">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            AppCloud
          </h1>
          <p className="text-xl sm:text-2xl text-muted mb-6 max-w-2xl leading-relaxed">
            Samsung pre-installed software collecting user data. Developed by
            Israeli company ironSource.
          </p>
        </header>

        {/* What you should know */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            What you should know
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Collects IP addresses, device fingerprints, hardware details
                without consent.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Cannot be uninstalled without root access. Voids warranty.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Violates laws in Lebanon where Israeli companies are banned.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Pre-installed on Samsung A & M series globally, including WANA
                and Southeast Asia.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Confirmed affected models:{" "}
                {allAffectedModels.length > 0 ? (
                  <span className="inline-flex flex-wrap gap-2 mt-1">
                    {allAffectedModels.map((model, index) => (
                      <span
                        key={index}
                        className="bg-accent/20 text-accent px-2 py-1 rounded text-sm font-medium"
                      >
                        {model}
                      </span>
                    ))}
                  </span>
                ) : (
                  <span className="text-muted">None reported yet</span>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* What you can do */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            What you can do
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-medium mb-2">
                Check if you have AppCloud
              </h3>
              <p className="text-base leading-relaxed text-muted">
                Settings → Apps → Search "AppCloud"
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-medium mb-2">Try to disable it</h3>
              <p className="text-base leading-relaxed text-muted">
                Settings → Apps → AppCloud → Disable
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-medium mb-2">Revoke permissions</h3>
              <p className="text-base leading-relaxed text-muted">
                Settings → Apps → AppCloud → Permissions → Turn off all
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-medium mb-2">Document it</h3>
              <p className="text-base leading-relaxed text-muted">
                Take screenshots and report to privacy authorities
              </p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Resources
          </h2>
          <div className="space-y-4 sm:space-y-5">
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <a
                href="/terms"
                className="text-accent hover:text-accent-muted text-base sm:text-lg font-medium"
              >
                Terms of Use →
              </a>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <a
                href="/privacy"
                className="text-accent hover:text-accent-muted text-base sm:text-lg font-medium"
              >
                Privacy Policy →
              </a>
            </div>
          </div>
        </section>

        {/* Global Impact */}
        <section className="mb-12 sm:mb-16">
          <a href="/global-impact" className="group block">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 group-hover:text-accent transition-colors cursor-pointer">
              Global Impact →
            </h2>
          </a>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted">
            Countries where AppCloud presence has been confirmed on Samsung
            devices.
          </p>
          <WorldMap />
          <ContributeModal />
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Timeline
          </h2>
          <Timeline />
        </section>

        {/* Copyright */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} AppCloud Research. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
