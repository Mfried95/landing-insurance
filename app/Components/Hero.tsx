export default function Hero() {
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
            <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect width="120" height="120" fill="#dedede" />
              <path d="M0 0H120V120" fill="none" stroke="#cfcfcf" strokeWidth="1" />
              <path d="M0 0L120 120" fill="none" stroke="#cfcfcf" strokeWidth="1" opacity="0.2" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0c1512]">
          Get the Best Auto & Home Insurance
        </h1>

        <p className="mt-4 text-lg text-[#0c1512] max-w-2xl mx-auto">
          Fast quotes, expert advice, and coverage you can trust.
        </p>

        <a
          href="#quote"
          className="inline-block mt-8 px-8 py-4 bg-[#f7ce40] text-black rounded-lg text-lg font-semibold hover:bg-[#1a2930] transition"
        >
          Get Quote Now
        </a>
      </div>
    </section>
  );
}
