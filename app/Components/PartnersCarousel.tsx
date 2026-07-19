"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const logos = [
  { src: "/assets/apollo.jpg", alt: "Apollo Insurance" },
  { src: "/assets/april.jpg", alt: "April Insurance" },
  { src: "/assets/wawanesa.jpg", alt: "Wawanesa Insurance" },
  { src: "/assets/chubb.jpg", alt: "Chubb Insurance" },
  { src: "/assets/intact.jpg", alt: "Intact Insurance" },
  { src: "/assets/aviva.jpg", alt: "Aviva Insurance" },
  { src: "/assets/echelon.jpg", alt: "Echelon Insurance" },
  { src: "/assets/forward.jpg", alt: "Forward Insurance" },
  { src: "/assets/gore.jpg", alt: "Gore Mutual Insurance" },
  { src: "/assets/intact-prestige.jpg", alt: "Intact Prestige Insurance" },
  { src: "/assets/jevco.jpg", alt: "Jevco Insurance" },
  { src: "/assets/pafco.jpg", alt: "PAFCO Insurance" },
  { src: "/assets/pembridge.jpg", alt: "Pembridge Insurance" },
  { src: "/assets/sgi.jpg", alt: "SGI Insurance" },
  { src: "/assets/cansure.jpg", alt: "Cansure Insurance" },
  { src: "/assets/travelers.jpg", alt: "Travelers Insurance" },
  { src: "/assets/unica.jpg", alt: "Unica Insurance" },
  { src: "/assets/coachman.jpg", alt: "Coachman Insurance" },
  { src: "/assets/caa.jpg", alt: "CAA Insurance" },
  { src: "/assets/definity.jpg", alt: "Definity Insurance" },
];

export default function PartnersCarousel() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="
            text-center
            text-sm
            font-semibold
            text-gray-600
            mb-8
          "
        >
          Trusted by Canada’s leading insurance providers
        </h2>

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={true}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="
                relative
                flex
                h-50
                items-center
                justify-center
              "
            >

              {/* Gold Fade Divider */}
              <div
                className="
                  absolute
                  right-0
                  top-1/2
                  h-20
                  w-px
                  -translate-y-1/2
                  bg-gradient-to-b
                  from-transparent
                  via-[#d4af37]/30
                  to-transparent
                "
              />

              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="
                  h-auto
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}