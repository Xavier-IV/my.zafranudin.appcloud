import { getNavigationData } from "../utils/navigation";

interface ResearchNavigationProps {
  currentLink: string;
}

export function ResearchNavigation({ currentLink }: ResearchNavigationProps) {
  const { prev, next } = getNavigationData(currentLink);

  return (
    <div className="flex justify-between items-center border-t border-border pt-8">
      {/* Previous */}
      <div className="flex-1">
        {prev ? (
          <a
            href={prev.link}
            className="group flex items-center text-muted hover:text-foreground transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <div>
              <div className="text-xs uppercase tracking-wide">Previous</div>
              <div className="font-medium">{prev.title}</div>
            </div>
          </a>
        ) : null}
      </div>

      {/* Back to Research */}
      <div className="flex-1 text-center">
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 border border-border rounded-lg hover:border-accent transition-colors"
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
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0M8 5a2 2 0 012-2h4a2 2 0 012 2v0"
            />
          </svg>
          Back to Research
        </a>
      </div>

      {/* Next */}
      <div className="flex-1 flex justify-end">
        {next ? (
          <a
            href={next.link}
            className="group flex items-center text-muted hover:text-foreground transition-colors text-right"
          >
            <div>
              <div className="text-xs uppercase tracking-wide">Next</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        ) : null}
      </div>
    </div>
  );
}
