import { WorldMap } from "../../components/WorldMap";
import affectedCountries from "../../data/affected-countries.json";

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

export default function GlobalImpactPage() {
  const totalReports = (affectedCountries as AffectedCountry[]).reduce(
    (sum, country) => sum + country.reportCount,
    0
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Global Impact
          </h1>
          <p className="text-xl sm:text-2xl text-muted mb-6 leading-relaxed">
            Comprehensive view of AppCloud's worldwide presence on Samsung
            devices.
          </p>
        </header>

        {/* Statistics Overview */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold text-accent mb-2">
                {totalReports}
              </h3>
              <p className="text-base text-muted">
                Total reported cases of AppCloud
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold text-accent mb-2">
                {affectedCountries.length}
              </h3>
              <p className="text-base text-muted">
                Countries with confirmed presence
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold text-accent mb-2">100%</h3>
              <p className="text-base text-muted">
                Samsung A & M series affected
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Map */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            World Map
          </h2>
          <div className="border border-border rounded-lg p-6 sm:p-8">
            <WorldMap />
          </div>
        </section>

        {/* Detailed Country List */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Confirmed Countries
          </h2>
          <div className="space-y-6">
            {(affectedCountries as AffectedCountry[]).map((country, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-accent">
                    {country.countryName}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted font-mono">
                      {country.date}
                    </span>
                    <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {country.reportCount}{" "}
                      {country.reportCount === 1 ? "report" : "reports"}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed mb-4">
                  {country.details}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="text-muted">
                    <strong>Discovered by:</strong> {country.discoveredBy}
                  </div>
                  <div className="text-muted">
                    <strong>Affected models:</strong>{" "}
                    <span className="inline-flex flex-wrap gap-2 mt-1">
                      {country.affectedModels.map((model, modelIndex) => (
                        <span
                          key={modelIndex}
                          className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-medium"
                        >
                          {model}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Collection Notice */}
        <section className="mb-12 sm:mb-16">
          <div className="border border-border rounded-lg p-6 sm:p-8">
            <h3 className="text-lg font-semibold mb-3">
              Data Collection Methodology
            </h3>
            <p className="text-base leading-relaxed text-muted mb-4">
              All data presented here is manually verified through direct user
              reports. Each case represents a confirmed instance of AppCloud
              found on Samsung devices, with supporting evidence such as
              screenshots and device information.
            </p>
            <div className="flex items-center gap-2 text-sm text-accent">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="border-l-2 border-accent pl-4 sm:pl-6">
          <a
            href="/"
            className="text-accent hover:text-accent-muted text-base sm:text-lg font-medium"
          >
            ← Back to Research
          </a>
        </div>
      </div>
    </div>
  );
}
