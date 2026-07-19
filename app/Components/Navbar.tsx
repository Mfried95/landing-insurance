"use client";

import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Coverage", "#coverage"],
    ["Partners", "#partners"],
    ["Quote", "#quote"],
  ];

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-[#0c1512]/10
        bg-[#fafaf8]/90
        backdrop-blur-md
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          px-4
          py-3
          sm:px-6
          sm:py-4
        "
      >
        {/* Brand */}
        <a
          href="#home"
          className="
            flex
            min-w-0
            items-center
            gap-3
            text-[#0c1512]
          "
        >
          {/* Shield Icon */}
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#0c1512]
              text-white
              shrink-0
            "
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l8 4v6c0 5-3.4 9.8-8 10-4.6-.2-8-5-8-10V6l8-4z" />
              <path d="M9 12l2 2 4-5" />
            </svg>
          </div>

          <div className="min-w-0">
            <div className="truncate text-lg font-bold leading-tight">
              Rate Shop Ontario
            </div>

            <div className="text-xs text-[#0c1512]/60">
              Insurance Brokers
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >
          {links.map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="
                font-medium
                text-[#0c1512]
                transition-colors
                duration-300
                hover:text-[#d4af37]
              "
            >
              {label}
            </a>
          ))}

          {/* Desktop CTA */}
          <a
            href="#quote"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#d4af37]
              px-6
              py-3
              font-semibold
              text-[#0c1512]
              shadow-[0_8px_20px_rgba(212,175,55,0.25)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0c1512]
              hover:text-white
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]
            "
          >
            Get Your Free Quote

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="
            flex
            items-center
            justify-center
            md:hidden
            text-[#0c1512]
          "
        >
          <Hamburger toggled={open} toggle={setOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          md:hidden
          ${
            open
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            flex
            flex-col
            items-center
            space-y-4
            px-6
            pt-4
          "
        >
          {links.map(([label, link]) => (
            <a
              key={label}
              href={link}
              onClick={() => setOpen(false)}
              className="
                block
                w-full
                py-2
                text-center
                font-medium
                text-[#0c1512]
                transition-colors
                hover:text-[#d4af37]
              "
            >
              {label}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="
              group
              flex
              w-full
              max-w-xs
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#d4af37]
              px-6
              py-3
              font-semibold
              text-[#0c1512]
              shadow-[0_8px_20px_rgba(212,175,55,0.25)]
              transition-all
              duration-300
              hover:bg-[#0c1512]
              hover:text-white
            "
          >
            Get Your Free Quote

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}