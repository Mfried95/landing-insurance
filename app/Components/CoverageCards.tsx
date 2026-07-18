"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CardProps = {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  features: string[];
  details: string[];
};

const cards: CardProps[] = [
  {
    title: "Auto Insurance",
    category: "PERSONAL INSURANCE",
    description:
      "Flexible Ontario auto insurance coverage designed around your vehicle, driving needs, and budget. Explore protection options including collision, comprehensive coverage, and roadside assistance.",
    imageUrl: "/assets/auto.jpg",
    features: ["Collision", "Roadside", "Comprehensive"],
    details: [
      "Collision and comprehensive coverage",
      "Roadside assistance options",
      "Accident forgiveness protection",
      "Flexible deductible choices",
    ],
  },
  {
    title: "Home Insurance",
    category: "PROPERTY INSURANCE",
    description:
      "Protect your home, belongings, and financial security with customized Ontario home insurance coverage designed for your property and lifestyle.",
    imageUrl: "/assets/home-card.jpg",
    features: ["Property", "Liability", "Water Protection"],
    details: [
      "Building and contents protection",
      "Personal liability coverage",
      "Water damage protection options",
      "Coverage for valuable belongings",
    ],
  },
  {
    title: "Commercial Insurance",
    category: "BUSINESS INSURANCE",
    description:
      "Protect your Ontario business with commercial insurance solutions designed to safeguard your property, vehicles, employees, and operations.",
    imageUrl: "/assets/business-card.jpg",
    features: ["Business", "Liability", "Vehicles"],
    details: [
      "Commercial property protection",
      "Business liability coverage",
      "Commercial vehicle insurance",
      "Business interruption protection",
    ],
  },
];

export default function CoverageCards() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<CardProps | null>(null);

  const goToQuote = () => {
    setActiveCard(null);

    document
      .querySelector("#quote")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  useEffect(() => {
    const elements =
      cardsRef.current?.querySelectorAll(".coverage-card");

    if (!elements) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            );

            entry.target.classList.remove(
              "opacity-0",
              "translate-y-8"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCard(null);
    };

    window.addEventListener("keydown", escape);

    return () =>
      window.removeEventListener("keydown", escape);
  }, []);

  return (
    <section
      id="coverage"
      className="
      relative overflow-hidden
      bg-[#f8faf9]
      py-20
      "
      aria-label="Insurance coverage options in Ontario"
    >

      <div className="
      absolute right-0 top-20
      h-80 w-80
      rounded-full
      bg-[#f7ce40]/20
      blur-3xl
      " />

      <div className="
      absolute left-0 bottom-20
      h-72 w-72
      rounded-full
      bg-blue-200/30
      blur-3xl
      " />


      <div className="
      relative mx-auto max-w-6xl px-6
      ">

        <div className="
        mx-auto max-w-3xl text-center
        ">

          <span className="
          rounded-full
          bg-white/70
          px-5 py-2
          text-xs font-bold
          tracking-wider
          shadow-sm
          backdrop-blur
          text-[#0c1512]
          ">
            Coverage Solutions
          </span>

          <h2 className="
          mt-5
          text-4xl
          font-bold
          text-[#0c1512]
          ">
            Insurance Coverage Options in Ontario
          </h2>

          <p className="
          mt-4
          text-lg
          leading-relaxed
          text-[#0c1512]/70
          ">
            Compare personalized auto, home, and commercial insurance
            solutions with licensed Ontario brokers who help you find
            coverage that fits your needs.
          </p>

        </div>


        <div
          ref={cardsRef}
          className="
          mt-12
          grid
          grid-cols-1
          gap-6
          md:grid-cols-3
          "
        >

          {cards.map((card,index)=>(

            <article
              key={card.title}
              onClick={() => setActiveCard(card)}
              className="
              coverage-card
              group
              cursor-pointer
              opacity-0
              translate-y-8
              overflow-hidden
              rounded-3xl
              bg-white/70
              backdrop-blur-xl
              border border-white
              shadow-[0_15px_40px_rgba(0,0,0,.07)]
              transition-all
              duration-700
              hover:-translate-y-2
              hover:border-[#f7ce40]
              hover:shadow-[0_25px_60px_rgba(0,0,0,.15)]
              "
              style={{
                transitionDelay:`${index * 150}ms`
              }}
            >

              <div className="
              relative h-40 overflow-hidden
              ">

                <Image
                  src={card.imageUrl}
                  alt={`${card.title} insurance Ontario`}
                  fill
                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "
                />

                <div className="
                absolute inset-0
                bg-gradient-to-t
                from-black/50
                to-transparent
                " />

              </div>


              <div className="p-6">

                <p className="
                text-xs
                font-bold
                tracking-wider
                text-[#b08b18]
                ">
                  {card.category}
                </p>


                <h3 className="
                mt-3
                text-2xl
                font-bold
                text-[#0c1512]
                ">
                  {card.title}
                </h3>


                <p className="
                mt-3
                text-sm
                leading-relaxed
                text-[#0c1512]/70
                ">
                  {card.description}
                </p>


                <div className="
                mt-5
                flex
                flex-wrap
                gap-2
                ">

                  {card.features.map(feature => (

                    <span
                      key={feature}
                      className="
                      rounded-full
                      bg-[#0c1512]/5
                      px-3 py-1
                      text-xs
                      font-medium
                      text-[#0c1512]
                      "
                    >
                      {feature}
                    </span>

                  ))}

                </div>


                <div className="
                mt-6
                inline-flex
                rounded-full
                bg-[#f7ce40]
                px-6 py-2.5
                text-sm
                font-semibold
                text-[#0c1512]
                transition
                group-hover:bg-[#0c1512]
                group-hover:text-white
                ">
                  Explore Coverage →
                </div>

              </div>

            </article>

          ))}

        </div>


        <div className="
        mt-14
        rounded-3xl
        bg-white/70
        p-8
        text-center
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,.08)]
        ">

          <h3 className="
          text-3xl
          font-bold
          text-[#0c1512]
          ">
            Find the Right Insurance Coverage
          </h3>


          <p className="
          mx-auto mt-3
          max-w-2xl
          text-[#0c1512]/70
          ">
            Our licensed Ontario insurance brokers compare trusted
            providers to help you find the right protection for your
            vehicle, home, or business.
          </p>


          <button
            onClick={goToQuote}
            className="
            mt-6
            rounded-full
            bg-[#f7ce40]
            px-10 py-3
            font-semibold
            text-[#0c1512]
            transition
            hover:-translate-y-1
            hover:bg-[#0c1512]
            hover:text-white
            "
          >
            Get Your Free Quote
          </button>

        </div>

      </div>


      {activeCard && (

        <div
          onClick={() => setActiveCard(null)}
          className="
          fixed inset-0 z-50
          flex items-center justify-center
          bg-black/50
          backdrop-blur-sm
          p-5
          "
        >

          <div
            onClick={e => e.stopPropagation()}
            className="
            max-w-md
            rounded-3xl
            bg-white
            p-8
            shadow-2xl
            "
          >

            <div className="flex justify-between">

              <h3 className="
              text-2xl
              font-bold
              text-[#0c1512]
              ">
                {activeCard.title}
              </h3>

              <button
                onClick={() => setActiveCard(null)}
                className="text-xl"
              >
                ✕
              </button>

            </div>


            <p className="
            mt-4
            text-[#0c1512]/70
            ">
              {activeCard.description}
            </p>


            <ul className="
            mt-5 space-y-3
            ">

              {activeCard.details.map(item => (

                <li
                  key={item}
                  className="text-[#0c1512]/80"
                >
                  <span className="text-[#c9a227]">
                    ✓
                  </span>{" "}
                  {item}
                </li>

              ))}

            </ul>


            <button
              onClick={goToQuote}
              className="
              mt-8
              w-full
              rounded-full
              bg-[#f7ce40]
              py-3
              font-semibold
              transition
              hover:bg-[#0c1512]
              hover:text-white
              "
            >
              Request Your Quote
            </button>

          </div>

        </div>

      )}

    </section>
  );
}