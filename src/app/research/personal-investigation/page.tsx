import { ResearchNavigation } from "../../../components/ResearchNavigation";

export default function PersonalInvestigationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Personal verification and investigation
          </h1>
          <p className="text-xl sm:text-2xl text-muted mb-6 leading-relaxed">
            Verified AppCloud existence and investigated suspicious terms.
          </p>
          <div className="text-sm text-muted font-mono">September 20, 2025</div>
        </header>

        {/* Summary */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Summary
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Confirmed AppCloud exists on Samsung device in Malaysia,
                expanding known geographic scope.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Made Twitter post to raise public awareness about AppCloud
                surveillance.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Investigated Terms & Conditions revealing suspicious data
                collection clauses.
              </p>
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Key Findings
          </h2>
          <div className="grid gap-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3 text-accent">
                Geographic Expansion
              </h3>
              <p className="text-base leading-relaxed text-muted">
                AppCloud confirmed in Malaysia, proving deployment beyond
                reported WANA regions.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3 text-accent">
                Device Verification
              </h3>
              <p className="text-base leading-relaxed text-muted">
                Physical confirmation on Samsung device validates reports about
                pre-installation.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3 text-accent">
                Legal Documentation
              </h3>
              <p className="text-base leading-relaxed text-muted">
                Suspicious terms and privacy policies enable extensive data
                collection and sharing.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3 text-accent">
                Public Awareness
              </h3>
              <p className="text-base leading-relaxed text-muted">
                Social media campaign initiated to inform users and gather more
                evidence globally.
              </p>
            </div>
          </div>
        </section>

        {/* Investigation Process */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Investigation Process
          </h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">1. Initial Discovery</h3>
              <p className="text-base leading-relaxed text-muted">
                After seeing @0bungler's post about AppCloud backdoors, decided
                to investigate personally. The claims seemed too significant to
                ignore - Israeli surveillance software on millions of Samsung
                devices.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">
                2. Device Verification
              </h3>
              <p className="text-base leading-relaxed text-muted mb-4">
                Checked wife's Samsung phone and confirmed AppCloud is indeed
                pre-installed. This validated the reports and proved the issue
                extends beyond WANA regions - we're in Malaysia.
              </p>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-muted text-sm">
                  Location: Malaysia (Southeast Asia) - expanding known
                  geographic scope
                </p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">3. Public Awareness</h3>
              <p className="text-base leading-relaxed text-muted mb-4">
                Made a Twitter post to raise awareness about the AppCloud issue
                and its implications. The goal was to inform others and gather
                more data about the global scope of this surveillance software.
              </p>
              <a
                href="https://x.com/zafranudin_z/status/1969051803925766163"
                className="text-accent hover:text-accent-muted font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Twitter post →
              </a>
            </div>
          </div>
        </section>

        {/* Legal Analysis */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Legal Analysis
          </h2>
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-lg font-medium mb-3 text-accent">
              Terms & Conditions Investigation
            </h3>
            <p className="text-base leading-relaxed mb-4">
              Deep dive into AppCloud's Terms & Conditions revealed concerning
              language around data collection, user consent, and third-party
              sharing. The terms appear designed to provide maximum legal cover
              for extensive surveillance capabilities.
            </p>
            <div className="space-y-3">
              <a
                href="/terms"
                className="block border-l-2 border-accent pl-4 hover:pl-6 transition-all"
              >
                <span className="text-accent hover:text-accent-muted font-medium">
                  View Full Terms & Conditions →
                </span>
              </a>
              <a
                href="/privacy"
                className="block border-l-2 border-accent pl-4 hover:pl-6 transition-all"
              >
                <span className="text-accent hover:text-accent-muted font-medium">
                  View Privacy Policy Analysis →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Implications */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Implications
          </h2>
          <div className="border border-border rounded-lg p-6">
            <p className="text-base leading-relaxed">
              This investigation establishes systematic documentation of
              AppCloud's surveillance capabilities, legal implications, and
              global reach. Each discovery builds the case for regulatory action
              and user awareness about this surveillance infrastructure embedded
              in consumer devices.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <ResearchNavigation currentLink="/research/personal-investigation" />
      </div>
    </div>
  );
}
