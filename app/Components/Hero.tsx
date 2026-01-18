"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hero.classList.add("hero-visible");
            hero.classList.remove("hero-hidden");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative py-28 overflow-hidden"
      aria-label="Home hero section"
    >
      {/* Pattern Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="#e6e6e6" />
              <path d="M0 0H80V80" fill="none" stroke="#bfbfbf" strokeWidth="1.2" />
              <path d="M0 0L80 80" fill="none" stroke="#bfbfbf" strokeWidth="1" opacity="0.25" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative max-w-6xl mx-auto px-6 text-center hero-hidden"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#0c1512]">
          Get the Best Auto & Home Insurance
        </h1>

        <p className="mt-4 text-lg text-[#0c1512] max-w-2xl mx-auto">
          Fast quotes, expert advice, and coverage you can trust.
        </p>

        <a
          href="#quote"
          className="inline-block mt-8 px-8 py-4 bg-[#f7ce40] text-black rounded-lg text-lg font-semibold transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-[#1a2930] hover:text-white"
        >
          Get Quote Now
        </a>
      </div>
    </section>
  );
}
