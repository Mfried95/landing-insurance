import Link from "next/link";
import BookNow from "./BookNow";

// TODO: once you have service pages, add an href to each and render them as <Link>s.
// Internal links to /auto-insurance-ontario, /home-insurance-ontario, etc. help SEO.
const services = [
  "Auto Insurance Ontario",
  "High Risk Auto Insurance",
  "Home Insurance Ontario",
  "Business Insurance",
  "New Driver Insurance",
  "Commercial Insurance",
  "Tenant Insurance",
  "Personal Insurance",
];

const stats = [
  { value: "15+", label: "Insurance providers" },
  { value: "RIBO", label: "Licensed broker" },
  { value: "Ontario", label: "Local expertise" },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#f8faf9] py-20 md:py-24"
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-40 h-96 w-96 rounded-full bg-[#f7ce40]/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/60 bg-white/60 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-12">
          {/* Trust badge */}
          <div className="flex justify-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#0c1512] shadow-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#f7ce40]"
              />
              RIBO Licensed Insurance Broker
            </p>
          </div>

          {/* Main heading */}
          <h1
            id="hero-heading"
            className="mx-auto mt-7 max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-[#0c1512] md:text-5xl"
          >
            Ontario Auto, Home &amp; Business Insurance{" "}
            <span className="text-[#b48b00]">Made Simple</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-[#0c1512]/70">
            Compare personalized auto, high risk auto, home, and business
            insurance from licensed Ontario brokers. We shop trusted providers
            to help you find coverage that fits your needs and budget.
          </p>

          {/* Calls to action */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#quote"
              className="group inline-flex items-center justify-center rounded-full bg-[#f7ce40] px-8 py-3.5 font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c1512] hover:text-white motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c1512]"
            >
              Get Your Free Quote
              <span
                aria-hidden="true"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>

            <BookNow />
          </div>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-1 gap-4 border-t border-black/10 pt-8 sm:grid-cols-3">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col-reverse rounded-2xl bg-white/60 p-5 text-center"
              >
                <dt className="text-sm text-gray-600">{label}</dt>
                <dd className="text-2xl font-bold text-[#0c1512]">{value}</dd>
              </div>
            ))}
          </dl>

          {/* Services */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <h2
              id="hero-services"
              className="mb-4 text-center text-sm font-semibold text-[#0c1512]/70"
            >
              Insurance solutions we help with
            </h2>

            <ul
              aria-labelledby="hero-services"
              className="flex flex-wrap justify-center gap-3"
            >
              {services.map((service) => (
                <li
                  key={service}
                  className="rounded-full bg-white/70 px-5 py-2 text-sm font-medium text-[#0c1512] shadow-sm"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}