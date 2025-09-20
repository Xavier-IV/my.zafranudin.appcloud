"use client";

import { useState } from "react";

export function ContributeModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <div className="mt-6 border border-border rounded-lg p-4 sm:p-6">
        <p className="text-base leading-relaxed mb-3">
          Found AppCloud on your Samsung device? Help expand this research.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="text-accent hover:text-accent-muted font-medium"
        >
          Contribute your findings →
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background border border-border rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold">
                  Contribute to Research
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted hover:text-foreground"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">What to share:</h4>
                  <ul className="text-sm text-muted space-y-1">
                    <li>• Your country/region</li>
                    <li>• Samsung device model</li>
                    <li>• Screenshot of AppCloud in your apps</li>
                    <li>• When you purchased the device</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">What happens next:</h4>
                  <ul className="text-sm text-muted space-y-1">
                    <li>• Your country gets added to the world map</li>
                    <li>• Helps document global AppCloud reach</li>
                    <li>• Contributes to privacy awareness</li>
                    <li>• Your identity stays anonymous</li>
                  </ul>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted mb-4">
                    Ready to contribute? Send me a DM on Twitter with your
                    findings.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://x.com/zafranudin_z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-accent text-background px-4 py-2 rounded-lg font-medium text-center hover:bg-accent-muted transition-colors"
                    >
                      DM @zafranudin_z
                    </a>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 border border-border rounded-lg hover:bg-border/20 transition-colors"
                    >
                      Maybe later
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
