"use client";

import { ResearchNavigation } from "../../../components/ResearchNavigation";

export default function SmexOpenLetterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            SMEX Open Letter to Samsung
          </h1>
          <p className="text-xl sm:text-2xl text-muted mb-6 leading-relaxed">
            Digital rights organization demands end to forced AppCloud
            installations in WANA region.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>May 5, 2025</span>
            <span>•</span>
            <span>SMEX Digital Rights Organization</span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Summary
          </h2>
          <div className="bg-border/20 rounded-lg p-6 sm:p-8 mb-6">
            <p className="text-base sm:text-lg leading-relaxed">
              SMEX, a leading digital rights organization based in Beirut,
              published an open letter demanding Samsung end forced AppCloud
              installations on A and M series devices in the West Asia and North
              Africa (WANA) region. The letter highlights GDPR violations, lack
              of user consent, and concerns about Israeli company involvement.
            </p>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 sm:p-6">
            <h3 className="font-semibold text-lg mb-3 text-red-300">
              🚨 Legal and Human Rights Concerns
            </h3>
            <p className="text-muted leading-relaxed">
              SMEX identifies multiple legal violations including GDPR
              non-compliance, violation of Article 12 of the Universal
              Declaration of Human Rights, and legal concerns in countries where
              Israeli companies are barred from operating.
            </p>
          </div>
        </section>

        {/* Original Source */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Original Source
          </h2>
          <div className="border border-border rounded-lg p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-lg">
                  SMEX Digital Rights Organization
                </h3>
                <p className="text-muted">
                  Open Letter: End Forced Israeli-Founded Bloatware
                  Installations
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://smex.org/open-letter-to-samsung-end-forced-israeli-app-installations-in-the-wana-region/",
                      "_blank"
                    )
                  }
                  className="text-accent hover:text-accent-muted text-sm mt-2 inline-flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View original letter →
                </button>
              </div>
            </div>
            <div className="bg-border/10 rounded-lg p-4 text-sm">
              <p className="text-muted mb-2">
                <strong>Organization:</strong> SMEX (Social Media Exchange)
              </p>
              <p className="text-muted mb-2">
                <strong>Location:</strong> Beirut, Lebanon
              </p>
              <p className="text-muted">
                <strong>Focus:</strong> Digital rights across West Asia and
                North Africa (WANA)
              </p>
            </div>
          </div>
        </section>

        {/* Key Demands */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Key Demands to Samsung
          </h2>

          <div className="space-y-6">
            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-semibold mb-2 text-accent">
                1. Full Privacy Policy Disclosure
              </h3>
              <p className="text-muted leading-relaxed">
                Disclose the full privacy policy and data handling practices of
                AppCloud, making this information easily accessible to all
                users.
              </p>
            </div>

            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-semibold mb-2 text-accent">
                2. Straightforward Opt-Out Method
              </h3>
              <p className="text-muted leading-relaxed">
                Offer a straightforward and effective method for users to opt
                out of AppCloud and remove it from their devices without
                compromising device functionality or warranty.
              </p>
            </div>

            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-semibold mb-2 text-accent">
                3. Clear Explanation for Pre-Installation
              </h3>
              <p className="text-muted leading-relaxed">
                Provide a clear explanation for the decision to pre-install
                AppCloud on all A and M series devices in the WANA region.
              </p>
            </div>

            <div className="border-l-2 border-accent pl-4 sm:pl-6">
              <h3 className="text-lg font-semibold mb-2 text-accent">
                4. Reconsider Future Pre-Installations
              </h3>
              <p className="text-muted leading-relaxed">
                Reconsider the continued pre-installation of AppCloud on future
                devices, in line with Article 12 of the Universal Declaration of
                Human Rights.
              </p>
            </div>

            <div className="border-l-2 border-red-500 pl-4 sm:pl-6">
              <h3 className="text-lg font-semibold mb-2 text-red-300">
                5. Meeting Request
              </h3>
              <p className="text-muted leading-relaxed">
                Request a meeting with the relevant Samsung teams to discuss
                these issues in detail and understand Samsung's approach to user
                privacy and data protection.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Violations Identified */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Legal Violations Identified
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-red-300">
                GDPR Violations
              </h3>
              <ul className="space-y-2 text-muted text-sm">
                <li>• Installation without user consent</li>
                <li>• No accessible privacy policy</li>
                <li>• No straightforward opt-out mechanism</li>
                <li>• Opaque data collection practices</li>
              </ul>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-orange-300">
                Regional Legal Concerns
              </h3>
              <ul className="space-y-2 text-muted text-sm">
                <li>• Israeli companies barred in Lebanon</li>
                <li>• WANA region data protection laws</li>
                <li>• Article 12 of Universal Declaration of Human Rights</li>
                <li>• Significant market share implications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Issues Highlighted */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Technical Issues Highlighted
          </h2>

          <div className="space-y-6">
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-yellow-300">
                🔒 Unremovable Installation
              </h3>
              <p className="text-muted leading-relaxed">
                AppCloud is deeply integrated into the device operating system,
                making it nearly impossible for regular users to uninstall
                without root access, which voids warranties and poses security
                risks. Even disabling the bloatware is ineffective as it can
                reappear after system updates.
              </p>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-blue-300">
                📊 Sensitive Data Collection
              </h3>
              <p className="text-muted leading-relaxed">
                The bloatware collects sensitive user data, including biometric
                information, IP addresses, and device fingerprints, without
                transparent disclosure of data handling practices.
              </p>
            </div>
          </div>
        </section>

        {/* SMEX Organization Background */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            About SMEX
          </h2>

          <div className="border border-border rounded-lg p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Social Media Exchange (SMEX)
                </h3>
                <p className="text-muted leading-relaxed mb-4">
                  A leading digital rights organization based in Beirut,
                  dedicated to advancing human rights in the digital age across
                  the WANA region. SMEX works to protect freedom of expression,
                  privacy, and digital security for users throughout West Asia
                  and North Africa.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-accent mb-2">
                      Focus Areas
                    </h4>
                    <ul className="space-y-1 text-muted">
                      <li>• Digital rights advocacy</li>
                      <li>• Privacy protection</li>
                      <li>• Digital security</li>
                      <li>• Freedom of expression</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent mb-2">
                      Regional Coverage
                    </h4>
                    <ul className="space-y-1 text-muted">
                      <li>• West Asia</li>
                      <li>• North Africa</li>
                      <li>• MENA region</li>
                      <li>• Arabic-speaking countries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact and Significance */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Impact and Significance
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-border/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">
                Advocacy Escalation
              </h3>
              <ul className="space-y-2 text-muted">
                <li>• First formal organization response</li>
                <li>• Legal framework for complaints</li>
                <li>• Regional digital rights focus</li>
                <li>• Professional advocacy approach</li>
              </ul>
            </div>

            <div className="bg-border/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">
                Regional Implications
              </h3>
              <ul className="space-y-2 text-muted">
                <li>• WANA region specifically targeted</li>
                <li>• Israeli company legal concerns</li>
                <li>• Samsung's significant market share</li>
                <li>• Cross-border privacy implications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Research */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Related Research
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">
                Community Complaints
              </h3>
              <p className="text-muted text-sm mb-3">
                Samsung Community forum reveals widespread user frustration and
                technical details
              </p>
              <a
                href="/research/samsung-community-complaints"
                className="text-accent hover:text-accent-muted text-sm"
              >
                View community complaints →
              </a>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Legal Documents</h3>
              <p className="text-muted text-sm mb-3">
                AppCloud's Terms of Use and Privacy Policy reveal concerning
                data practices
              </p>
              <a
                href="/terms"
                className="text-accent hover:text-accent-muted text-sm"
              >
                View legal documents →
              </a>
            </div>
          </div>
        </section>

        <ResearchNavigation currentLink="/research/smex-open-letter" />
      </div>
    </div>
  );
}
