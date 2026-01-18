export default function Hero() {
  return (
    <section id="home" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Get the Best Auto & Home Insurance
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Fast quotes, expert advice, and coverage you can trust.
        </p>

        <a
          href="#quote"
          className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Quote Now
        </a>
      </div>
    </section>
  );
}
