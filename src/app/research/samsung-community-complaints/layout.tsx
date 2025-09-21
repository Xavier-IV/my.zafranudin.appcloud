import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samsung Community Complaints | AppCloud Research",
  description:
    "Samsung users report AppCloud as unwanted adware that cannot be uninstalled. Community reveals AppCloud as multi-purpose backdoor.",
  openGraph: {
    title: "Samsung Community Forum Complaints",
    description:
      "Samsung users report AppCloud as unwanted adware that cannot be uninstalled.",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(
          "Samsung Community Forum Complaints"
        )}&description=${encodeURIComponent(
          "689K+ views: Users report AppCloud as unremovable adware backdoor"
        )}&date=${encodeURIComponent(
          "April 8, 2023"
        )}&risk=High&source=${encodeURIComponent(
          "Samsung EU Community Forum"
        )}`,
        width: 1200,
        height: 630,
        alt: "Samsung Community Forum Complaints - AppCloud Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samsung Community Forum Complaints",
    description:
      "Samsung users report AppCloud as unwanted adware that cannot be uninstalled.",
    images: [
      `/api/og?title=${encodeURIComponent(
        "Samsung Community Forum Complaints"
      )}&description=${encodeURIComponent(
        "689K+ views: Users report AppCloud as unremovable adware backdoor"
      )}&date=${encodeURIComponent(
        "April 8, 2023"
      )}&risk=High&source=${encodeURIComponent("Samsung EU Community Forum")}`,
    ],
  },
};

export default function SamsungCommunityComplaintsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
