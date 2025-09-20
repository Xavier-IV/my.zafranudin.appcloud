"use client";

import timelineData from "../../data/timeline.json";

interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  tags?: string[];
  status: "completed" | "in-progress" | "planned";
  link?: string;
}

export function Timeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-border"></div>

      <div className="space-y-6 sm:space-y-8">
        {(timelineData as TimelineEntry[]).map((entry, index) => (
          <div key={index} className="relative flex items-start gap-4 sm:gap-6">
            {/* Timeline dot */}
            <div
              className={`relative z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center ${
                entry.status === "completed"
                  ? "bg-accent border-accent"
                  : entry.status === "in-progress"
                  ? "bg-background border-accent animate-pulse"
                  : "bg-background border-border"
              }`}
            >
              {entry.status === "completed" && (
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-background"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {entry.status === "in-progress" && (
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <time className="font-mono text-sm text-muted">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>

              {entry.link ? (
                <a href={entry.link} className="group">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                    {entry.title} →
                  </h3>
                </a>
              ) : (
                <h3 className="text-lg font-medium mb-2">{entry.title}</h3>
              )}
              <p className="text-muted text-sm mb-3 leading-relaxed">
                {entry.description}
              </p>

              {entry.tags && (
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-border rounded text-xs font-mono text-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
