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
    default: "Rate Shop Ontario | Home, Auto & Commercial Insurance",
    template: "%s | Ontario Insurance Brokers",
  },

  description:
    "Licensed Ontario insurance brokers providing personalized home, auto, and commercial insurance coverage with competitive rates.",

  keywords: [
    "Ontario insurance broker",
    "auto insurance Ontario",
    "home insurance Ontario",
    "commercial insurance Ontario",
    "insurance quote Ontario",
    "licensed insurance broker Ontario",
  ],

  icons: {
    icon: "/assets/ori.svg",
  },

  openGraph: {
    title:
      "Ontario Insurance Brokers | Home, Auto & Commercial Insurance",
    description:
      "Compare personalized insurance coverage options with licensed Ontario brokers.",
    type: "website",
    locale: "en_CA",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en-CA">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>

    </html>
  );
}