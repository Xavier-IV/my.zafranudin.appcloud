import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AppCloud Research",
  description:
    "Samsung pre-installed software collecting user data. Developed by Israeli company ironSource.",
  openGraph: {
    title: "AppCloud Research",
    description:
      "Samsung pre-installed surveillance software research. Unremovable backdoor developed by Israeli company ironSource.",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(
          "AppCloud Research"
        )}&description=${encodeURIComponent(
          "Samsung pre-installed surveillance software research"
        )}&date=${encodeURIComponent(
          "2022-2025"
        )}&risk=Critical&source=${encodeURIComponent("Independent Research")}`,
        width: 1200,
        height: 630,
        alt: "AppCloud Research - Samsung Surveillance Software Investigation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AppCloud Research",
    description:
      "Samsung pre-installed surveillance software research. Unremovable backdoor developed by Israeli company ironSource.",
    images: [
      `/api/og?title=${encodeURIComponent(
        "AppCloud Research"
      )}&description=${encodeURIComponent(
        "Samsung pre-installed surveillance software research"
      )}&date=${encodeURIComponent(
        "2022-2025"
      )}&risk=Critical&source=${encodeURIComponent("Independent Research")}`,
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
