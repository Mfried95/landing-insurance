"use client";

import { useState, type FormEvent } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const FORMSPREE_URL = "https://formspree.io/f/xwvvldzw";

const trustItems = [
  "Licensed Ontario Brokers",
  "Multiple Insurance Providers",
  "No Obligation Quote",
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#0c1512] focus:ring-2 focus:ring-[#f7ce40]/60";

type Status = null | "loading" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Bots tend to fill the hidden field. Pretend it worked and send nothing.
    if (formData.get("_gotcha")) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);

      setStatus("success");
      form.reset();

      // Lets you track quote requests as conversions in Google Analytics
      window.gtag?.("event", "generate_lead", { form_name: "quote_request" });
    } catch {
      // Covers network failures too, so the button never stays stuck on "Sending"
      setStatus("error");
    }
  }

  return (
    <section
      id="quote"
      aria-labelledby="quote-heading"
      className="relative scroll-mt-20 overflow-hidden bg-[#f8faf9] py-24"
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#f7ce40]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-wide text-[#0c1512] shadow-sm backdrop-blur">
            Free insurance consultation
          </p>

          <h2
            id="quote-heading"
            className="mt-5 text-4xl font-bold text-[#0c1512]"
          >
            Get Your Free Ontario Insurance Quote
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-[#0c1512]/70">
            Compare personalized auto, home, and commercial insurance options
            with licensed Ontario insurance brokers who help you find the right
            coverage at a competitive rate.
          </p>
        </div>

        {/* Trust */}
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {trustItems.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white bg-white/70 p-4 text-center text-sm font-semibold text-[#0c1512] shadow-sm backdrop-blur-xl"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          aria-busy={status === "loading"}
          className="mt-12 grid grid-cols-1 gap-6 rounded-3xl border border-white bg-white/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl md:grid-cols-2"
        >
          {/* Spam protection: Formspree's honeypot field. Real visitors never see it. */}
          <div className="hidden" aria-hidden="true">
            <label>
              Leave this field empty
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <p className="text-sm text-[#0c1512]/70 md:col-span-2">
            Fields marked <span aria-hidden="true">*</span>
            <span className="sr-only">with an asterisk</span> are required.
          </p>

          <label className="flex flex-col">
            <span className="text-sm font-semibold text-[#0c1512]">
              Full name <span aria-hidden="true">*</span>
            </span>
            <input
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              placeholder="John Smith"
              className={fieldClass}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-semibold text-[#0c1512]">
              Email address <span aria-hidden="true">*</span>
            </span>
            <input
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="john@email.com"
              className={fieldClass}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-semibold text-[#0c1512]">
              Phone number
            </span>
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              maxLength={30}
              autoComplete="tel"
              placeholder="(905) 555-1234"
              className={fieldClass}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-semibold text-[#0c1512]">
              Insurance type
            </span>
            <select
              name="coverage"
              defaultValue="Auto Insurance"
              className={fieldClass}
            >
              <option value="Auto Insurance">Auto Insurance</option>
              <option value="Home Insurance">Home Insurance</option>
              <option value="Commercial Insurance">Commercial Insurance</option>
              <option value="Multiple Coverage">Multiple Coverage</option>
            </select>
          </label>

          <label className="flex flex-col md:col-span-2">
            <span className="text-sm font-semibold text-[#0c1512]">
              How can we help?
            </span>
            <textarea
              name="message"
              rows={5}
              maxLength={2000}
              placeholder="Tell us about your insurance needs..."
              className={`${fieldClass} resize-none`}
            />
          </label>

          {/* TODO: once you have a privacy policy page, add a consent line here, e.g.
          <p className="text-xs text-[#0c1512]/70 md:col-span-2">
            By submitting, you agree to be contacted about your quote.
            <Link href="/privacy-policy">Privacy policy</Link>
          </p> */}

          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-[#f7ce40] py-4 font-bold text-[#0c1512] transition-all hover:-translate-y-1 hover:bg-[#0c1512] hover:text-white disabled:opacity-50 disabled:hover:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c1512] md:col-span-2"
          >
            {status === "loading" ? (
              "Sending request..."
            ) : (
              <>
                Get my free quote <span aria-hidden="true">→</span>
              </>
            )}
          </button>

          {/* Live region: screen readers announce the result */}
          <div aria-live="polite" className="md:col-span-2">
            {status === "success" && (
              <p
                role="status"
                className="text-center font-semibold text-green-800"
              >
                Thank you! Your quote request has been received. We will
                contact you shortly.
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="text-center font-semibold text-red-700">
                Something went wrong. Please try again in a moment.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}