"use client";

import { ResearchNavigation } from "../../../components/ResearchNavigation";

export default function SamsungCommunityComplaintsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Samsung Community Forum Complaints
          </h1>
          <p className="text-xl sm:text-2xl text-muted mb-6 leading-relaxed">
            User complaints reveal AppCloud's persistent backdoor nature and
            inability to be removed.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>April 8, 2023</span>
            <span>•</span>
            <span>Samsung EU Community Forum</span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Summary
          </h2>
          <div className="bg-border/20 rounded-lg p-6 sm:p-8 mb-6">
            <p className="text-base sm:text-lg leading-relaxed">
              Samsung community forum thread reveals widespread user frustration
              with AppCloud, described as unwanted adware that cannot be
              uninstalled and reappears after every system update. Multiple
              users across different regions report identical issues, with a
              German user exposing AppCloud as a "multi-purpose backdoor"
              developed by ironSource in Tel Aviv.
            </p>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 sm:p-6">
            <h3 className="font-semibold text-lg mb-3 text-yellow-300">
              📸 Visual Evidence Available
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              Forum thread screenshot shows sustained community engagement with
              multiple users sharing similar experiences across different
              Samsung models and regions. The visual evidence demonstrates this
              is not an isolated issue but a widespread concern affecting the
              Samsung user community.
            </p>
            <button
              onClick={() =>
                window.open("/samsung-community-feedback.png", "_blank")
              }
              className="inline-flex items-center px-4 py-2 bg-accent hover:bg-accent-muted text-background font-medium rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              View Forum Screenshot
            </button>
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
                  Samsung EU Community Forum
                </h3>
                <p className="text-muted">
                  Thread: "How do I get rid of AppCloud?"
                </p>
                <a
                  href="https://eu.community.samsung.com/t5/galaxy-a-series/how-do-i-get-rid-of-appcloud/td-p/7918282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-muted text-sm"
                >
                  View original thread →
                </a>
              </div>
            </div>
            <div className="bg-border/10 rounded-lg p-4 text-sm">
              <p className="text-muted mb-2">
                <strong>Started by:</strong> DrInterpreter1984 on April 8, 2023
              </p>
              <p className="text-muted mb-2">
                <strong>Views:</strong> 689,394
              </p>
              <p className="text-muted">
                <strong>Status:</strong> 69 replies, ongoing discussion
              </p>
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Key Findings
          </h2>

          <div className="space-y-6">
            <div className="border-l-2 border-red-500 pl-4 sm:pl-6">
              <h3 className="text-lg font-semibold mb-2 text-red-300">
                Cannot Be Uninstalled
              </h3>
              <p className="text-muted leading-relaxed">
                Multiple users confirm AppCloud's uninstall option is greyed
                out. It can only be disabled temporarily, but reappears after
                every system update.
              </p>
            </div>

            <div className="border-l-2 border-orange-500 pl-4 sm:pl-6">
              <h3 className="text-lg font-semibold mb-2 text-orange-300">
                Described as "Adware" and "Backdoor"
              </h3>
              <p className="text-muted leading-relaxed">
                Users consistently describe AppCloud as "annoying, useless piece
                of adware" and "multi-purpose kind-of-backdoor for bloatware and
                marketing apps."
              </p>
            </div>

            <div className="border-l-2 border-yellow-500 pl-4 sm:pl-6">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">
                Persistent Notifications
              </h3>
              <p className="text-muted leading-relaxed">
                AppCloud notifications cannot be swiped away and persist despite
                user attempts to disable them. The app "pests you with messages
                no matter how often you block it."
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-4 sm:pl-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-300">
                ironSource Connection Confirmed
              </h3>
              <p className="text-muted leading-relaxed">
                German user confirms AppCloud/App Selector is developed by
                "IRONSOURCE" located at "121 Menachem Begin Rd., Tel Aviv,
                Israel" - matching the address from Terms of Use documents.
              </p>
            </div>

            <div className="border-l-2 border-purple-500 pl-4 sm:pl-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-300">
                Carrier Partnership Revealed
              </h3>
              <p className="text-muted leading-relaxed">
                AppCloud works with telecom carriers (like T-Online) to push
                apps onto Samsung phones "without asking you beforehand or
                potentially even against your will."
              </p>
            </div>
          </div>
        </section>

        {/* Critical User Testimony */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Critical User Testimony
          </h2>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 sm:p-8">
            <h3 className="font-semibold text-lg mb-4 text-red-300">
              German S23 User (October 2023)
            </h3>
            <blockquote className="text-muted leading-relaxed italic border-l-4 border-red-500/50 pl-4">
              "I purchased a unbranded, unlocked, pristine S23 in October 2023
              in Germany. This is what I learned the hard way: AppCloud is
              essentially a multi purpose kind-of-backdoor for bloatware and
              marketing apps by Samsung and the telephone companies which
              SAMSUNG cooperates with to get their phones sold. It cannot be
              deleted or uninstalled. It cannot even be deactivated for good, as
              it WILL pop up reliably after each and every System update."
            </blockquote>

            <div className="mt-4 space-y-2 text-sm">
              <p className="text-red-300">
                <strong>Key revelations:</strong>
              </p>
              <ul className="list-disc list-inside text-muted space-y-1 ml-4">
                <li>Confirmed on latest S23 model (October 2023)</li>
                <li>Present even on "unbranded, unlocked" devices</li>
                <li>Reappears after every system update</li>
                <li>Partnership between Samsung and telecom carriers</li>
                <li>Developed by ironSource in Tel Aviv</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Community Impact
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-border/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">
                Forum Engagement
              </h3>
              <ul className="space-y-2 text-muted">
                <li>• 689,394 views</li>
                <li>• 69 replies</li>
                <li>• Multiple device models affected</li>
                <li>• International user base</li>
                <li>• Sustained discussion over months</li>
              </ul>
            </div>

            <div className="bg-border/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">
                User Sentiment
              </h3>
              <ul className="space-y-2 text-muted">
                <li>• "Annoying, useless piece of adware"</li>
                <li>• "Suspicious program"</li>
                <li>• "I will look for alternatives"</li>
                <li>• "Can't control phone behavior"</li>
                <li>• "Multi-purpose backdoor"</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-blue-300">
              📊 Thread Analysis from Screenshot
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-blue-200 mb-2">
                  User Diversity
                </h4>
                <ul className="space-y-1 text-muted">
                  <li>• Regular users</li>
                  <li>• Community stars</li>
                  <li>• Samsung moderators</li>
                  <li>• Technical contributors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-200 mb-2">
                  Discussion Pattern
                </h4>
                <ul className="space-y-1 text-muted">
                  <li>• Multiple timestamps</li>
                  <li>• Ongoing replies</li>
                  <li>• Cross-referencing</li>
                  <li>• Solution seeking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-200 mb-2">
                  Visual Evidence
                </h4>
                <ul className="space-y-1 text-muted">
                  <li>• Profile pictures</li>
                  <li>• Reply chains</li>
                  <li>• Engagement metrics</li>
                  <li>• Community badges</li>
                </ul>
              </div>
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
              <h3 className="font-semibold text-lg mb-2">Technical Analysis</h3>
              <p className="text-muted text-sm mb-3">
                @0bungler's technical breakdown of AppCloud's backdoor
                capabilities
              </p>
              <a
                href="/research/john-backdoor-discovery"
                className="text-accent hover:text-accent-muted text-sm"
              >
                Read technical details →
              </a>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Legal Documents</h3>
              <p className="text-muted text-sm mb-3">
                Terms of Use and Privacy Policy reveal data collection practices
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

        <ResearchNavigation currentLink="/research/samsung-community-complaints" />
      </div>
    </div>
  );
}
