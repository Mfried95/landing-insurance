"use client";

import { useEffect, useRef, useState } from "react";
import BookNow from "./BookNow";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    setTimeout(() => setVisible(true), 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      aria-label="Insurance hero section"
      className="relative py-32 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 -top-24 w-72 h-72 rounded-full bg-blue-200 opacity-30 blur-3xl animate-blob"></div>
        <div className="absolute right-0 top-28 w-96 h-96 rounded-full bg-yellow-200 opacity-25 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute left-10 bottom-10 w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="#f5f7f6" />
              <path d="M80 0H0V80" fill="none" stroke="#d1d5db" strokeWidth="1" />
              <path
                d="M0 0L80 80"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="0.75"
                opacity="0.25"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className={`relative max-w-6xl mx-auto px-6 text-center hero-animate ${
          visible ? "hero-visible" : ""
        }`}
      >
        <div className="hero-item inline-block p-10 rounded-2xl bg-white/60 backdrop-blur-md border border-white/30">
          <p className="text-sm uppercase tracking-wide text-slate-500 mb-4">
            <span className="text-slate-600">Michael Friedman · </span>
            <span className="text-blue-600 font-semibold">RIBO Licensed</span>
            <span className="text-slate-600"> Insurance Broker (Ontario)</span>
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Auto & Home Insurance You Can Trust
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Straightforward advice, competitive rates, and coverage tailored to
            your needs.
          </p>

          {/* CTA Buttons */}
          <div className="hero-item mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#quote"
              className="px-8 py-4 rounded-md bg-[#f7ce40] text-black font-semibold hover:bg-[#e6bd36] transition"
            >
              Get Quote
            </a>

            <BookNow />
          </div>

          {/* Confidence bar */}
          <div className="hero-item mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t pt-10 text-slate-700">
            <div>
              <p className="text-2xl font-semibold text-blue-600">15+</p>
              <p className="text-sm text-slate-500">Insurance Carriers</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-blue-600">RIBO</p>
              <p className="text-sm text-slate-500">Licensed Broker</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-blue-600">Ontario</p>
              <p className="text-sm text-slate-500">Local Expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .hero-animate .hero-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 700ms ease, transform 700ms ease;
        }

        .hero-visible .hero-item {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-animate .hero-item:nth-child(1) {
          transition-delay: 0.1s;
        }
        .hero-animate .hero-item:nth-child(2) {
          transition-delay: 0.2s;
        }
        .hero-animate .hero-item:nth-child(3) {
          transition-delay: 0.3s;
        }
        .hero-animate .hero-item:nth-child(4) {
          transition-delay: 0.4s;
        }
        .hero-animate .hero-item:nth-child(5) {
          transition-delay: 0.5s;
        }

        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        section {
          background: linear-gradient(
            180deg,
            #f7fbff 0%,
            #ffffff 35%,
            #ffffff 100%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-animate .hero-item,
          .animate-blob {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
