import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samsung-ironSource Partnership | AppCloud Research",
  description:
    "Official announcement of expanded partnership launching ironSource technology on Samsung mobile devices in MENA region.",
  openGraph: {
    title: "Samsung-ironSource Partnership Expansion",
    description:
      "Corporate foundation for systematic AppCloud deployment on Samsung devices.",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(
          "Samsung-ironSource Partnership"
        )}&description=${encodeURIComponent(
          "Corporate foundation for systematic AppCloud deployment in MENA region"
        )}&date=${encodeURIComponent(
          "November 3, 2022"
        )}&risk=Critical&source=${encodeURIComponent(
          "Business Wire Press Release"
        )}`,
        width: 1200,
        height: 630,
        alt: "Samsung-ironSource Partnership - AppCloud Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samsung-ironSource Partnership Expansion",
    description:
      "Corporate foundation for systematic AppCloud deployment on Samsung devices.",
    images: [
      `/api/og?title=${encodeURIComponent(
        "Samsung-ironSource Partnership"
      )}&description=${encodeURIComponent(
        "Corporate foundation for systematic AppCloud deployment in MENA region"
      )}&date=${encodeURIComponent(
        "November 3, 2022"
      )}&risk=Critical&source=${encodeURIComponent(
        "Business Wire Press Release"
      )}`,
    ],
  },
};

export default function SamsungIronSourcePartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
