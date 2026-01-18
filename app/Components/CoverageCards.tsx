"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const cards: CardProps[] = [
  {
    title: "Auto Insurance",
    description:
      "Affordable coverage for your vehicle, roadside assistance, and accident protection.",
    imageUrl: "/assets/auto.jpg",
  },
  {
    title: "Home Insurance",
    description:
      "Protect your home from damage, theft, fire, and natural disasters.",
    imageUrl: "/assets/home-card.jpg",
  },
  {
    title: "Commercial Insurance",
    description:
      "Reliable coverage for your business, liability, vehicles, and property.",
    imageUrl: "/assets/business-card.jpg",
  },
];

export default function CoverageCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            card.classList.add("card-visible");
            card.classList.remove("card-hidden");
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-[#e3e3e3]" aria-label="Coverage options">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center font-poppins text-[#0c1512]">
          Coverage Options
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-center text-[#0c1512]/80">
          Flexible insurance solutions designed to protect what matters most —
          whether it’s your vehicle, home, or business.
        </p>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="card card-hidden group relative bg-white rounded-2xl overflow-hidden border border-gray-200
                         shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                         transition-all duration-500 hover:-translate-y-2
                         hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)]"
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Image */}
              <div className="relative h-56">
                <Image
                  src={card.imageUrl}
                  alt={`${card.title} image`}
                  fill
                  className="object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins text-[#0c1512]">
                  {card.title}
                </h3>

                <p className="mt-3 text-[#0c1512]/80 leading-relaxed">
                  {card.description}
                </p>

                <a
                  href="#quote"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[#0c1512]
                             hover:text-black transition-colors"
                >
                  More Info
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Recommended Content */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold font-poppins text-[#0c1512] text-center">
            Not sure which coverage you need?
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-center text-[#0c1512]/80">
          Our licensed insurance brokers work with Canada’s leading providers to compare policies and find you the best coverage at the best price — with no obligation.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-[#0c1512]
                         px-8 py-3 text-white font-semibold
                         hover:bg-black transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
