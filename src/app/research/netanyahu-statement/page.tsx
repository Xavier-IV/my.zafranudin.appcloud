import { ResearchNavigation } from "../../../components/ResearchNavigation";

export default function NetanyahuStatementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Netanyahu's Cellphone Statement
          </h1>
          <p className="text-xl sm:text-2xl text-muted mb-6 leading-relaxed">
            Analysis of Netanyahu's statement about Israeli technology in
            cellphones.
          </p>
          <div className="text-sm text-muted font-mono">September 15, 2025</div>
        </header>

        {/* Full Transcript */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Full Transcript
          </h2>
          <div className="border border-border rounded-lg p-6 sm:p-8">
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                "I just said this in another meeting, and they said, Oh, Israel
                is isolated. Israel can't break out of the decision. I said, We
                will. Some of them have stopped weapon component shipments. Can
                we get out of this? Yes, we can. We're pretty good at producing
                weapons. Like intelligence, we share both with the United
                States. A good chunk of your intel. Our weapon systems we share
                with the United States."
              </p>
              <p>
                "We're tremendously appreciative of the bipartisan support in
                military matters to Israel in previous years, and today as well.{" "}
                <strong className="text-accent">
                  But do you have cell phones? You have cell phones here? You're
                  holding a piece of Israel right there. You know that?
                </strong>{" "}
                I mean, a lot of the cell phones, the medicines, the foods, you
                eat cherry tomatoes. You know where that was made? I don't like
                cherry tomatoes, but it's in Israel. What can I do? It's an
                Israeli product, as there's so many other things."
              </p>
              <p>
                "I think this serves for the better of all mankind and
                womankind. I think that is Israel's unknown contribution. But we
                can make things, we can produce things. We cherish the fact that
                we have the constancy of American support despite the attempts
                to erode it."
              </p>
              <p>
                "We'll continue to work to make sure that that continues on both
                sides of the aisle. It's very important for us. But equally, we
                will eventually create the independence that we need so those in
                Western Europe who think they can deny us things will not
                succeed. We can break this siege, and we will."
              </p>
            </div>
            <cite className="text-muted text-sm mt-4 block">
              - Benjamin Netanyahu to U.S. Congressional delegation, September
              15, 2025
            </cite>
          </div>
        </section>

        {/* Context */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Context
          </h2>
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed">
              Netanyahu made this statement while addressing a Democrat and
              Republican U.S. Congressional delegation in Israel.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              The statement reveals Israeli awareness and pride in their
              technology's global reach through consumer devices.
            </p>
          </div>
        </section>

        {/* Analysis */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Analysis
          </h2>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">Key Context</h3>
              <ul className="space-y-2 text-base leading-relaxed">
                <li>
                  • Statement made during discussion of Israel's isolation and
                  weapon sanctions
                </li>
                <li>
                  • Netanyahu emphasizes Israel's intelligence sharing with the
                  US
                </li>
                <li>
                  • Cellphone comment positioned as example of Israel's "unknown
                  contribution"
                </li>
                <li>
                  • Part of broader narrative about Israeli technological
                  independence
                </li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">
                Strategic Implications
              </h3>
              <ul className="space-y-2 text-base leading-relaxed">
                <li>
                  • Confirms Israeli technology embedded in consumer devices
                  globally
                </li>
                <li>
                  • Suggests intentional strategy for technological influence
                </li>
                <li>
                  • Links to intelligence capabilities and data collection
                </li>
                <li>
                  • Provides political context for AppCloud and similar software
                </li>
                <li>• Indicates awareness at highest government levels</li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">AppCloud Connection</h3>
              <p className="text-base leading-relaxed">
                This statement directly validates concerns about AppCloud. When
                Netanyahu says "you're holding a piece of Israel," he's likely
                referring to Israeli software like AppCloud that provides
                backdoor access to devices. The timing and context suggest this
                isn't just about hardware components, but active surveillance
                capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Source */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Source
          </h2>
          <div className="border border-border rounded-lg p-6">
            <p className="text-base leading-relaxed mb-4">
              Video posted by Disclose.tv on X (formerly Twitter)
            </p>
            <a
              href="https://x.com/disclosetv/status/1967585850142966139"
              className="text-accent hover:text-accent-muted font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View original post →
            </a>
          </div>
        </section>

        {/* Navigation */}
        <ResearchNavigation currentLink="/research/netanyahu-statement" />
      </div>
    </div>
  );
}
