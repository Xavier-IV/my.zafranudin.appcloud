export default function JohnBackdoorDiscoveryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            AppCloud Backdoor Discovery
          </h1>
          <p className="text-xl sm:text-2xl text-muted mb-6 leading-relaxed">
            Technical analysis of AppCloud's backdoor functionality revealed by
            @0bungler.
          </p>
          <div className="text-sm text-muted font-mono">September 19, 2025</div>
        </header>

        {/* Original Post */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Original Discovery
          </h2>
          <div className="border border-border rounded-lg p-6 sm:p-8">
            <div className="mb-4">
              <span className="text-accent font-medium">@0bungler</span>
              <span className="text-muted ml-2">• Sep 19, 2025</span>
            </div>
            <blockquote className="text-base sm:text-lg leading-relaxed">
              "Just found out that every Samsung phone post-2022 has an Israeli
              app called 'AppCloud' whose only purpose is to provide a backdoor
              into your device. It installs apps without your permission. It
              cannot be deactivated or uninstalled."
            </blockquote>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Technical Analysis
          </h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4 text-accent">
                Key Findings
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-medium mb-2">Timeline</h4>
                  <p className="text-muted">
                    Every Samsung phone manufactured after 2022
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-medium mb-2">Backdoor Access</h4>
                  <p className="text-muted">
                    Provides unauthorized entry point into device systems
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-medium mb-2">Silent Installation</h4>
                  <p className="text-muted">
                    Installs applications without user knowledge or permission
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-medium mb-2">Persistence</h4>
                  <p className="text-muted">
                    Cannot be deactivated, disabled, or uninstalled by users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Implications */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Security Implications
          </h2>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">Privacy Risks</h3>
              <ul className="space-y-2 text-base leading-relaxed text-muted">
                <li>• Complete device access without user consent</li>
                <li>• Potential for remote surveillance and data collection</li>
                <li>• Installation of additional monitoring software</li>
                <li>• Bypass of Android security permissions</li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">Legal Concerns</h3>
              <ul className="space-y-2 text-base leading-relaxed text-muted">
                <li>• Violation of user privacy rights</li>
                <li>• Potential GDPR and data protection law violations</li>
                <li>• Undisclosed data collection practices</li>
                <li>• Breach of consumer trust and transparency</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Connection to Netanyahu Statement */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Context
          </h2>
          <div className="border border-border rounded-lg p-6">
            <p className="text-base leading-relaxed mb-4">
              This discovery directly validates Netanyahu's earlier statement
              about cellphones containing "a piece of Israel." The AppCloud
              backdoor represents the technical implementation of Israeli
              surveillance capabilities in consumer devices.
            </p>
            <a
              href="/research/netanyahu-statement"
              className="text-accent hover:text-accent-muted font-medium"
            >
              View Netanyahu Statement Analysis →
            </a>
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
