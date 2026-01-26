"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      coverage: formData.get("coverage"),
      message: formData.get("message"),
    };

    console.log("Submitting:", data);

    const res = await fetch("https://formspree.io/f/xwvvldzw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",  // ✅ REQUIRED
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("Response:", result);

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Request a Quote</h2>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <label className="flex flex-col">
            <span className="font-semibold">Full Name</span>
            <input
              name="name"
              required
              className="mt-2 p-3 border rounded"
              placeholder="John Doe"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Email</span>
            <input
              name="email"
              type="email"
              required
              className="mt-2 p-3 border rounded"
              placeholder="email@example.com"
            />
          </label>

          <label className="flex flex-col md:col-span-2">
            <span className="font-semibold">Phone</span>
            <input
              name="phone"
              className="mt-2 p-3 border rounded"
              placeholder="(123) 456-7890"
            />
          </label>

          <label className="flex flex-col md:col-span-2">
            <span className="font-semibold">Coverage Needed</span>
            <select name="coverage" className="mt-2 p-3 border rounded">
              <option>Auto Insurance</option>
              <option>Home Insurance</option>
              <option>Commercial Insurance</option>
            </select>
          </label>

          <label className="flex flex-col md:col-span-2">
            <span className="font-semibold">Message</span>
            <textarea
              name="message"
              className="mt-2 p-3 border rounded"
              rows={4}
              placeholder="Tell us what you need..."
            />
          </label>

          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white font-semibold rounded-lg py-3 cursor-pointer hover:bg-blue-700 transition"
          >
            Submit Request
          </button>

          {status === "success" && (
            <p className="md:col-span-2 text-center text-green-600 font-semibold">
              Thanks! Your request was submitted — we will be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="md:col-span-2 text-center text-red-600 font-semibold">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
