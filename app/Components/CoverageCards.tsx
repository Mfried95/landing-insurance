import Image from "next/image";
import Link from "next/link";

type Card = {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageAlt: string; // TODO: make sure each alt describes what is actually in the photo
  features: string[];
  details: string[];
  quoteLabel: string;
  // TODO: once service pages exist, add e.g. href: "/auto-insurance-ontario"
};

const cards: Card[] = [
  {
    title: "Auto Insurance",
    category: "Personal insurance",
    description:
      "Flexible Ontario auto insurance coverage designed around your vehicle, driving needs, and budget. Explore protection options including collision, comprehensive coverage, and roadside assistance.",
    imageUrl: "/assets/auto.jpg",
    imageAlt: "Car driving along a road in Ontario",
    features: ["Collision", "Roadside", "Comprehensive"],
    details: [
      "Collision and comprehensive coverage",
      "Roadside assistance options",
      "Accident forgiveness protection",
      "Flexible deductible choices",
    ],
    quoteLabel: "Get an auto insurance quote",
  },
  {
    title: "Home Insurance",
    category: "Property insurance",
    description:
      "Protect your home, belongings, and financial security with customized Ontario home insurance coverage designed for your property and lifestyle.",
    imageUrl: "/assets/home-card.jpg",
    imageAlt: "Front of a house in an Ontario neighbourhood",
    features: ["Property", "Liability", "Water Protection"],
    details: [
      "Building and contents protection",
      "Personal liability coverage",
      "Water damage protection options",
      "Coverage for valuable belongings",
    ],
    quoteLabel: "Get a home insurance quote",
  },
  {
    title: "Commercial Insurance",
    category: "Business insurance",
    description:
      "Protect your Ontario business with commercial insurance solutions designed to safeguard your property, vehicles, employees, and operations.",
    imageUrl: "/assets/business-card.jpg",
    imageAlt: "Small business storefront and commercial vehicle",
    features: ["Business", "Liability", "Vehicles"],
    details: [
      "Commercial property protection",
      "Business liability coverage",
      "Commercial vehicle insurance",
      "Business interruption protection",
    ],
    quoteLabel: "Get a commercial insurance quote",
  },
];

export default function CoverageCards() {
  return (
    <section
      id="coverage"
      aria-labelledby="coverage-heading"
      className="relative scroll-mt-20 overflow-hidden bg-[#f8faf9] py-20"
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#f7ce40]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full bg-white/70 px-5 py-2 text-xs font-bold tracking-wider text-[#0c1512] shadow-sm backdrop-blur">
            Coverage Solutions
          </p>

          <h2
            id="coverage-heading"
            className="mt-5 text-4xl font-bold text-[#0c1512]"
          >
            Insurance Coverage Options in Ontario
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-[#0c1512]/70">
            Compare personalized auto, home, and commercial insurance solutions
            with licensed Ontario brokers who help you find coverage that fits
            your needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-3xl border border-white bg-white/70 shadow-[0_15px_40px_rgba(0,0,0,.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#f7ce40] hover:shadow-[0_25px_60px_rgba(0,0,0,.15)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#7a5f00]">
                  {card.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#0c1512]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#0c1512]/70">
                  {card.description}
                </p>

                <ul
                  aria-label={`${card.title} highlights`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full bg-[#0c1512]/5 px-3 py-1 text-xs font-medium text-[#0c1512]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Native expand/collapse: the content is always in the HTML, so search engines can read it */}
                <details className="mt-5">
                  <summary className="cursor-pointer rounded text-sm font-semibold text-[#0c1512] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c1512]">
                    What’s included
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {card.details.map((item) => (
                      <li key={item} className="text-sm text-[#0c1512]/80">
                        <span aria-hidden="true" className="text-[#8a6d00]">
                          ✓
                        </span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>

                <Link
                  href="/#quote"
                  className="mt-6 inline-flex rounded-full bg-[#f7ce40] px-6 py-2.5 text-sm font-semibold text-[#0c1512] transition hover:bg-[#0c1512] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c1512]"
                >
                  {card.quoteLabel}
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-white/70 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,.08)] backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-[#0c1512]">
            Find the Right Insurance Coverage
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-[#0c1512]/70">
            Our licensed Ontario insurance brokers compare trusted providers to
            help you find the right protection for your vehicle, home, or
            business.
          </p>

          <Link
            href="/#quote"
            className="mt-6 inline-flex rounded-full bg-[#f7ce40] px-10 py-3 font-semibold text-[#0c1512] transition hover:-translate-y-1 hover:bg-[#0c1512] hover:text-white motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c1512]"
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}