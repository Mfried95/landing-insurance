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
      w-full
      sticky
      top-0
      z-50
      bg-[#fafaf8]/90
      backdrop-blur-md
      border-b
      border-[#0c1512]/10
      "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >


        {/* Brand */}

        <a
          href="#home"
          className="
          flex
          items-center
          gap-3
          text-[#0c1512]
          "
        >

          {/* Shield Icon */}

          <div
            className="
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            bg-[#0c1512]
            text-white
            "
          >

            <svg
              className="w-6 h-6"
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



          <div>

            <div
              className="
              font-bold
              text-lg
              leading-tight
              "
            >
              Rate Shop Ontairo
            </div>


            <div
              className="
              text-xs
              text-[#0c1512]/60
              "
            >
              Insurance Brokers
            </div>

          </div>


        </a>





        {/* Desktop Navigation */}


        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >


          {links.map(([label, link]) => (

            <a
              key={label}
              href={link}
              className="
              text-[#0c1512]
              font-medium
              hover:text-[#d4af37]
              transition-colors
              duration-300
              "
            >

              {label}

            </a>

          ))}






          {/* Gold CTA Button */}


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
            text-[#0c1512]
            font-semibold
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
          md:hidden
          text-[#0c1512]
          "
        >

          <Hamburger
            toggled={open}
            toggle={setOpen}
          />

        </div>


      </div>







      {/* Mobile Menu */}


      <div
        className={`
        md:hidden
        overflow-hidden
        transition-all
        duration-300
        ${
          open
            ? "max-h-96 opacity-100 pb-6"
            : "max-h-0 opacity-0"
        }
        `}
      >


        <div
          className="
          px-6
          pt-4
          space-y-4
          "
        >



          {links.map(([label, link]) => (

            <a
              key={label}
              href={link}
              onClick={() => setOpen(false)}
              className="
              block
              text-center
              text-[#0c1512]
              font-medium
              hover:text-[#d4af37]
              transition-colors
              "
            >

              {label}

            </a>

          ))}







          {/* Mobile Gold CTA */}



          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="
            group
            flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#d4af37]
            px-6
            py-3
            text-[#0c1512]
            font-semibold
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