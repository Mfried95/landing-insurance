"use client";

import { useEffect, useRef, useState } from "react";
import BookNow from "./BookNow";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const insuranceTags = [
    "Auto Insurance Ontario",
    "High Risk Auto Insurance",
    "Home Insurance Ontario",
    "Business Insurance",
    "New Driver Insurance",
    "Commercial Insurance",
    "Tenant Insurance",
    "Personal Insurance",
  ];

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#f8faf9]
        py-20
        md:py-24
      "
    >
      {/* Background Colors */}
      <div
        className="
          absolute
          -top-40
          -right-20
          h-96
          w-96
          rounded-full
          bg-[#f7ce40]/30
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-20
          h-96
          w-96
          rounded-full
          bg-blue-200/40
          blur-3xl
        "
      />


      <div
        ref={heroRef}
        className={`
          relative
          mx-auto
          max-w-6xl
          px-6
          transition-all
          duration-700
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }
        `}
      >

        {/* Glass Container */}
        <div
          className="
            rounded-3xl
            border
            border-white/60
            bg-white/60
            p-8
            shadow-[0_25px_80px_rgba(0,0,0,0.08)]
            backdrop-blur-xl
            md:p-12
          "
        >

          {/* Trust + SEO Badges */}
          <div
            className="
              mx-auto
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white/80
                px-5
                py-2
                text-sm
                font-semibold
                text-[#0c1512]
                shadow-sm
              "
            >

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#f7ce40]
                "
              />

              RIBO Licensed Insurance Broker

            </div>


            

          </div>


          {/* Main Heading */}
          <h1
            className="
              mx-auto
              mt-7
              max-w-4xl
              text-center
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-[#0c1512]
              md:text-5xl
            "
          >

            Ontario Auto, Home & Business Insurance

            <span className="text-[#b48b00]">
              {" "}Made Simple
            </span>

          </h1>


          {/* SEO Optimized Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-center
              text-lg
              leading-relaxed
              text-[#0c1512]/70
            "
          >
            Get personalized auto insurance, high risk auto insurance, home
            insurance, and business insurance solutions from licensed Ontario
            brokers. We compare trusted providers to help you find coverage
            that fits your needs and budget.
          </p>


          {/* Buttons */}
          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
            "
          >

            <a
              href="#quote"
              className="
                group
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#f7ce40]
                px-8
                py-3.5
                font-semibold
                text-black
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#0c1512]
                hover:text-white
              "
            >

              Get Your Free Quote

              <span
                className="
                  ml-2
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </a>


            <BookNow />

          </div>


          {/* Stats */}
          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-4
              border-t
              border-black/10
              pt-8
              sm:grid-cols-3
            "
          >

            <div
              className="
                rounded-2xl
                bg-white/60
                p-5
                text-center
              "
            >
              <p className="text-2xl font-bold text-[#0c1512]">
                15+
              </p>

              <p className="text-sm text-gray-600">
                Insurance Providers
              </p>

            </div>


            <div
              className="
                rounded-2xl
                bg-white/60
                p-5
                text-center
              "
            >

              <p className="text-2xl font-bold text-[#0c1512]">
                RIBO
              </p>

              <p className="text-sm text-gray-600">
                Licensed Broker
              </p>

            </div>


            <div
              className="
                rounded-2xl
                bg-white/60
                p-5
                text-center
              "
            >

              <p className="text-2xl font-bold text-[#0c1512]">
                Ontario
              </p>

              <p className="text-sm text-gray-600">
                Local Expertise
              </p>

            </div>

          </div>


          {/* SEO Service Tags */}
          <div
            className="
              mt-10
              border-t
              border-black/10
              pt-8
            "
          >

            <p
              className="
                mb-4
                text-center
                text-sm
                font-semibold
                text-[#0c1512]/70
              "
            >
              Insurance Solutions We Help With
            </p>


            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >

              {insuranceTags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    bg-white/70
                    px-5
                    py-2
                    text-sm
                    font-medium
                    text-[#0c1512]
                    shadow-sm
                    transition
                    hover:bg-[#f7ce40]
                  "
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}