"use client";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

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

          <div className="font-bold text-lg">
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
        <div className="md:hidden">
          <Hamburger toggled={open} toggle={setOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-3 px-4 space-y-3 transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="block text-center hover:text-[#f7ce40] transition"
        >
          Home
        </a>
        <a
          href="#coverage"
          onClick={() => setOpen(false)}
          className="block text-center hover:text-[#f7ce40] transition"
        >
          Coverage
        </a>
        <a
          href="#partners"
          onClick={() => setOpen(false)}
          className="block text-center hover:text-[#f7ce40] transition"
        >
          Partners
        </a>
        <a
          href="#quote"
          onClick={() => setOpen(false)}
          className="block text-center hover:text-[#f7ce40] transition"
        >
          Quote
        </a>

        <a
          href="#quote"
          onClick={() => setOpen(false)}
          className="block text-center px-4 py-2 rounded-md bg-[#f7ce40] text-black font-semibold hover:bg-[#e6bd36] transition"
        >
          Get Quote
        </a>
      </div>
    </nav>
  );
}
