import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoverageCards from "./components/CoverageCards";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

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
          <QuoteForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
