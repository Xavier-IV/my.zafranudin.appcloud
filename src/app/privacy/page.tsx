export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xl sm:text-2xl text-muted mb-6 leading-relaxed">
            Data collection practices and privacy implications.
          </p>
        </header>

        {/* Text Content */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Text Content
          </h2>
          <div className="prose prose-invert max-w-none">
            <div className="border border-border rounded-lg p-6 sm:p-8">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Privacy Policy content will be added here...
              </p>
            </div>
          </div>
        </section>

        {/* Screenshot Evidence */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Screenshot Evidence
          </h2>
          <div className="border border-border rounded-lg p-6 sm:p-8">
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-4">
              Screenshot proof from the application (preserved in case of future
              removal).
            </p>
            <div className="bg-border/20 rounded-lg p-8 text-center">
              <p className="text-muted">Screenshot will be added here...</p>
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
