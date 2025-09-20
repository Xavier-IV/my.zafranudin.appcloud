import timelineData from "../data/timeline.json";

interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  tags?: string[];
  status: string;
  link?: string;
}

export function getNavigationData(currentLink: string) {
  const timeline = timelineData as TimelineEntry[];
  const currentIndex = timeline.findIndex(
    (entry) => entry.link === currentLink
  );

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prev = currentIndex > 0 ? timeline[currentIndex - 1] : null;
  const next =
    currentIndex < timeline.length - 1 ? timeline[currentIndex + 1] : null;

  return {
    prev: prev?.link ? { title: prev.title, link: prev.link } : null,
    next: next?.link ? { title: next.title, link: next.link } : null,
  };
}
