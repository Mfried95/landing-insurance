export default function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Get the Best Auto & Home Insurance
        </h1>
        <p className="mt-4 text-lg text-gray-700">
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
