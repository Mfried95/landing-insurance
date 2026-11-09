import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CoverageCards from "./Components/CoverageCards";
import QuoteForm from "./Components/QuoteForm";
import Footer from "./Components/Footer";
import PartnersCarousel from "./Components/PartnersCarousel";

// TODO: replace with your real domain
const SITE_URL = "https://www.yourdomain.com";
const GA_ID = "G-1BGFBR0ZSQ";

export const metadata: Metadata = {
  title: "Auto & Home Insurance Quotes in Ontario | Rate Shop Ontario",
  description:
    "Compare auto, home, and business insurance quotes from trusted Ontario brokers. Fast, personalized coverage with no obligation.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Rate Shop Ontario",
    title: "Auto & Home Insurance Quotes in Ontario | Rate Shop Ontario",
    description:
      "Compare auto, home, and business insurance quotes from trusted Ontario brokers.",
    locale: "en_CA",
    // images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto & Home Insurance Quotes in Ontario | Rate Shop Ontario",
    description:
      "Compare auto, home, and business insurance quotes from trusted Ontario brokers.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Rate Shop Ontario",
  url: SITE_URL,
  description:
    "Insurance brokerage offering auto, home, and business insurance quotes across Ontario.",
  areaServed: { "@type": "AdministrativeArea", name: "Ontario" },
  // TODO: add telephone, logo, address, sameAs once you have them
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main id="main-content" className="flex-1">
          <Hero />
          <CoverageCards />

          <div className="py-12 md:py-16">
            <PartnersCarousel />
          </div>

          <QuoteForm />
        </main>

        <Footer />
      </div>
    </>
  );
}