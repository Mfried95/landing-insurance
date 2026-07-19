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
        <title>Auto & Home Insurance | Rate Shop Ontario</title>

        <meta
          name="description"
          content="Get affordable auto, home, and business insurance quotes from trusted Ontario insurance brokers. Fast, reliable, and personalized coverage."
        />

        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen flex flex-col">

        <Navbar />

        <main
          id="main-content"
          className="flex-1"
        >
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