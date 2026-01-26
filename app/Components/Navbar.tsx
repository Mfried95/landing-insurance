"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 border-b sticky top-0 z-50 bg-[#1a2930]/80 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          {/* Simple shield icon */}
          <svg
            className="w-7 h-7"
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

          <div className="w-full px-6 py-4">
            Ontario Risk Insurance
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-[#f7ce40] transition">
            Home
          </a>
          <a href="#coverage" className="hover:text-[#f7ce40] transition">
            Coverage
          </a>
          <a href="#partners" className="hover:text-[#f7ce40] transition">
            Partners
          </a>
          <a href="#quote" className="hover:text-[#f7ce40] transition">
            Quote
          </a>

          {/* CTA */}
          <a
            href="#quote"
            className="px-4 py-2 rounded-md bg-[#f7ce40] text-black font-semibold hover:bg-[#e6bd36] transition"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 px-4 space-y-3">
          <a href="#home" className="block hover:text-[#f7ce40]">
            Home
          </a>
          <a href="#coverage" className="block hover:text-[#f7ce40]">
            Coverage
          </a>
          <a href="#partners" className="block hover:text-[#f7ce40]">
            Partners
          </a>
          <a href="#quote" className="block hover:text-[#f7ce40]">
            Quote
          </a>

          <a
            href="#quote"
            className="block text-center px-4 py-2 rounded-md bg-[#f7ce40] text-black font-semibold hover:bg-[#e6bd36]"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
}
