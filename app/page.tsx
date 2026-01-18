import Head from "next/head";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CoverageCards from "./Components/CoverageCards";
import QuoteForm from "./Components/QuoteForm";
import Footer from "./Components/Footer";
import PartnersCarousel from "./Components/PartnersCarousel";

export default function Page() {
  return (
    <>
      <Head>
        <title>Auto & Home Insurance | Your Broker Name</title>
        <meta
          name="description"
          content="Get affordable auto and home insurance quotes from a trusted insurance broker. Fast, reliable, and local service."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <CoverageCards />
          <PartnersCarousel />
          <QuoteForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
