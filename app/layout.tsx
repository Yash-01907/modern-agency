import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://raysden.agency"), /* TODO: update once domain is live */
  title: "RAYSDEN | Web Design & Development Studio",
  description:
    "Strategy-first websites for local and early-stage businesses. Built fast with direct founder collaboration.",
  keywords: ["web design", "digital agency", "next.js development", "branding", "surat", "website design india"],
  openGraph: {
    title: "RAYSDEN | Web Design & Development Studio",
    description:
      "Strategy-first websites for local and early-stage businesses. Built fast with direct founder collaboration.",
    url: "https://raysden.agency",
    siteName: "Raysden",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raysden — Web Design & Development Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAYSDEN | Web Design & Development Studio",
    description:
      "Strategy-first websites for local and early-stage businesses. Built fast with direct founder collaboration.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
