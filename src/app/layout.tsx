import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fractional GTM Engineer for Seed-Stage Startups",
  description:
    "Fractional GTM engineer who builds and runs outbound systems for engineering-led startups. $2.2M pipeline built in 3 months. Proprietary tooling, AI-driven personalization, real-time dashboard. Not an agency — one person who does the thinking and the execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
