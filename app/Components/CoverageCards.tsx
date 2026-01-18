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
    description: "Affordable coverage for your vehicle, roadside assistance, and more.",
    imageUrl: "/assets/auto.jpg",
  },
  {
    title: "Home Insurance",
    description: "Protect your home from damage, theft, and natural disasters.",
    imageUrl: "/assets/auto.jpg",
  },
  {
    title: "Commercial Insurance",
    description: "Coverage for your business, liability, and property protection.",
    imageUrl: "/assets/auto.jpg",
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

        <div ref={cardsRef} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="card card-hidden bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              style={{ transitionDelay: `${index * 300}ms` }} // slower stagger
            >
              <Image
                src={card.imageUrl}
                alt={`${card.title} image`}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins text-[#0c1512]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[#0c1512]">{card.description}</p>
                <a
                  href="#quote"
                  className="mt-4 inline-block text-[#0c1512] font-semibold hover:underline"
                >
                  More Info
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
