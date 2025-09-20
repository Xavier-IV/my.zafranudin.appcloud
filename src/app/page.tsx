import { Timeline } from "./components/Timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
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
          </div>
        </section>

        {/* What you can do */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            What you can do
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-medium mb-2">
                Check if you have AppCloud
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-muted">
                Settings → Apps → Search "AppCloud" or "App Cloud"
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-medium mb-2">Try to disable it</h3>
              <p className="text-base sm:text-lg leading-relaxed text-muted">
                Settings → Apps → AppCloud → Disable (may not work on all
                devices)
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-medium mb-2">Revoke permissions</h3>
              <p className="text-base sm:text-lg leading-relaxed text-muted">
                Settings → Apps → AppCloud → Permissions → Turn off all
                permissions
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-medium mb-2">
                Use ADB to remove (Advanced)
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-muted">
                Connect to PC → Enable Developer Options → Use ADB commands to
                uninstall
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-medium mb-2">Document and report</h3>
              <p className="text-base sm:text-lg leading-relaxed text-muted">
                Take screenshots of AppCloud on your device and report to
                privacy authorities
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
                Terms & Conditions →
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

        {/* Timeline */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Timeline
          </h2>
          <Timeline />
        </section>
      </div>
    </div>
  );
}
