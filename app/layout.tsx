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
  title: {
    default: "Home & Auto Insurance Ontario | Licensed Insurance Broker",
    template: "%s | Ontario Risk Insurance",
  },

  description:
    "Licensed Ontario insurance broker helping drivers, homeowners, and businesses find affordable auto, home, and commercial insurance coverage.",

  keywords: [
    "Ontario insurance broker",
    "auto insurance Ontario",
    "home insurance Ontario",
    "commercial insurance Ontario",
    "insurance quotes Ontario",
    "best insurance rates Ontario",
  ],

  icons: {
    icon: "/assets/ori.svg",
  },

  openGraph: {
    title: "Home & Auto Insurance Ontario | Licensed Insurance Broker",
    description:
      "Compare personalized auto, home, and commercial insurance options with a licensed Ontario broker.",
    type: "website",
    locale: "en_CA",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google:
      "nHql2_c6aT6MHW_PtHnhDqr1DfG99rn5lNVC1FH8484",
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