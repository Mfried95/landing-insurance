"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Coverage", href: "/#coverage" },
  { label: "Partners", href: "/#partners" },
  { label: "Get a Quote", href: "/#quote" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0c1512]/10 bg-[#fafaf8]/90 backdrop-blur-md">
      {/* Lets keyboard and screen reader users skip the navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded-md focus:bg-[#0c1512] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <nav aria-label="Main" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Brand */}
          <Link
            href="/"
            aria-label="Rate Shop Ontario, home"
            className="flex min-w-0 items-center gap-3 text-[#0c1512]"
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0c1512] text-white"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                focusable="false"
              >
                <path d="M12 2l8 4v6c0 5-3.4 9.8-8 10-4.6-.2-8-5-8-10V6l8-4z" />
                <path d="M9 12l2 2 4-5" />
              </svg>
            </span>

            <span className="min-w-0">
              <span className="block truncate text-lg font-bold leading-tight">
                Rate Shop Ontario
              </span>
              <span className="block text-xs text-[#0c1512]/60">
                Insurance Brokers
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-medium text-[#0c1512] underline-offset-8 decoration-[#d4af37] decoration-2 transition-colors duration-300 hover:underline"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/#quote"
              className="group inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-[#0c1512] shadow-[0_8px_20px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c1512] hover:text-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Get Your Free Quote
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center justify-center text-[#0c1512] md:hidden">
            <Hamburger
              toggled={open}
              toggle={setOpen}
              label={open ? "Close menu" : "Open menu"}
            />
          </div>
        </div>

        {/* Mobile menu: `invisible` when closed keeps hidden links out of the tab order and screen readers */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "visible max-h-96 pb-6 opacity-100" : "invisible max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 px-2 pt-4">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block w-full py-2 text-center font-medium text-[#0c1512] hover:underline hover:decoration-[#d4af37] hover:decoration-2 hover:underline-offset-8"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/#quote"
              onClick={() => setOpen(false)}
              className="group flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-[#0c1512] shadow-[0_8px_20px_rgba(212,175,55,0.25)] transition-all duration-300 hover:bg-[#0c1512] hover:text-white"
            >
              Get Your Free Quote
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}