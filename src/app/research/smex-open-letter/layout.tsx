import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMEX Open Letter to Samsung | AppCloud Research",
  description:
    "Digital rights organization demands end to forced AppCloud installations in WANA region. Highlights GDPR violations and Israeli company concerns.",
  openGraph: {
    title: "SMEX Open Letter to Samsung",
    description:
      "Digital rights organization demands end to forced AppCloud installations in WANA region.",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(
          "SMEX Open Letter to Samsung"
        )}&description=${encodeURIComponent(
          "Digital rights organization demands end to forced AppCloud installations in WANA region."
        )}&date=${encodeURIComponent(
          "May 5, 2025"
        )}&risk=Critical&source=${encodeURIComponent(
          "SMEX Digital Rights Organization"
        )}`,
        width: 1200,
        height: 630,
        alt: "SMEX Open Letter to Samsung - AppCloud Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMEX Open Letter to Samsung",
    description:
      "Digital rights organization demands end to forced AppCloud installations in WANA region.",
    images: [
      `/api/og?title=${encodeURIComponent(
        "SMEX Open Letter to Samsung"
      )}&description=${encodeURIComponent(
        "Digital rights organization demands end to forced AppCloud installations in WANA region."
      )}&date=${encodeURIComponent(
        "May 5, 2025"
      )}&risk=Critical&source=${encodeURIComponent(
        "SMEX Digital Rights Organization"
      )}`,
    ],
  },
};

export default function SmexOpenLetterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
