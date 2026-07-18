"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<
    null | "success" | "error" | "loading"
  >(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      coverage: formData.get("coverage"),
      message: formData.get("message"),
      website: formData.get("website"),
    };


    const res = await fetch("https://formspree.io/f/xwvvldzw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });


    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }


  return (
    <section
      id="quote"
      aria-label="Request an Ontario insurance quote"
      className="
      relative
      overflow-hidden
      py-24
      bg-[#f8faf9]
      "
    >

      {/* Background Effects */}

      <div
        className="
        absolute
        right-0
        top-20
        h-72
        w-72
        rounded-full
        bg-[#f7ce40]/20
        blur-3xl
        "
      />

      <div
        className="
        absolute
        left-0
        bottom-20
        h-72
        w-72
        rounded-full
        bg-blue-200/30
        blur-3xl
        "
      />



      <div
        className="
        relative
        mx-auto
        max-w-5xl
        px-6
        "
      >


        {/* Heading */}

        <div
          className="
          mx-auto
          max-w-3xl
          text-center
          "
        >

          <span
            className="
            inline-flex
            rounded-full
            bg-white/70
            px-5
            py-2
            text-xs
            font-bold
            tracking-wide
            text-[#0c1512]
            shadow-sm
            backdrop-blur
            "
          >
            FREE INSURANCE CONSULTATION
          </span>


          <h2
            className="
            mt-5
            text-4xl
            font-bold
            text-[#0c1512]
            "
          >
            Get Your Free Ontario Insurance Quote
          </h2>


          <p
            className="
            mt-4
            text-lg
            leading-relaxed
            text-[#0c1512]/70
            "
          >
            Compare personalized auto, home, and commercial insurance options
            with licensed Ontario insurance brokers who help you find the
            right coverage at a competitive rate.
          </p>

        </div>





        {/* Trust */}

        <div
          className="
          mt-10
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-3
          "
        >

          {[
            "Licensed Ontario Brokers",
            "Multiple Insurance Providers",
            "No Obligation Quote",
          ].map((item)=>(
            <div
              key={item}
              className="
              rounded-2xl
              bg-white/70
              p-4
              text-center
              text-sm
              font-semibold
              text-[#0c1512]
              backdrop-blur-xl
              border
              border-white
              shadow-sm
              "
            >
              {item}
            </div>
          ))}

        </div>





        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="
          mt-12
          rounded-3xl
          bg-white/70
          p-8
          backdrop-blur-xl
          border
          border-white
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          "
        >



          {/* Spam protection */}

          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />



          <label className="flex flex-col">

            <span className="text-sm font-semibold text-[#0c1512]">
              Full Name
            </span>

            <input
              name="name"
              required
              autoComplete="name"
              placeholder="John Smith"
              className="
              mt-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              py-3
              outline-none
              transition
              focus:border-[#f7ce40]
              focus:ring-2
              focus:ring-[#f7ce40]/30
              "
            />

          </label>





          <label className="flex flex-col">

            <span className="text-sm font-semibold text-[#0c1512]">
              Email Address
            </span>

            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="john@email.com"
              className="
              mt-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              py-3
              outline-none
              transition
              focus:border-[#f7ce40]
              focus:ring-2
              focus:ring-[#f7ce40]/30
              "
            />

          </label>






          <label className="flex flex-col">

            <span className="text-sm font-semibold text-[#0c1512]">
              Phone Number
            </span>


            <input
              name="phone"
              autoComplete="tel"
              placeholder="(905) 555-1234"
              className="
              mt-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              py-3
              outline-none
              transition
              focus:border-[#f7ce40]
              focus:ring-2
              focus:ring-[#f7ce40]/30
              "
            />

          </label>







          <label className="flex flex-col">

            <span className="text-sm font-semibold text-[#0c1512]">
              Insurance Type
            </span>


            <select
              name="coverage"
              className="
              mt-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              py-3
              outline-none
              focus:border-[#f7ce40]
              "
            >

              <option>Auto Insurance</option>
              <option>Home Insurance</option>
              <option>Commercial Insurance</option>
              <option>Multiple Coverage</option>

            </select>

          </label>







          <label
            className="
            flex
            flex-col
            md:col-span-2
            "
          >

            <span className="text-sm font-semibold text-[#0c1512]">
              How can we help?
            </span>


            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your insurance needs..."
              className="
              mt-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              py-3
              outline-none
              resize-none
              transition
              focus:border-[#f7ce40]
              focus:ring-2
              focus:ring-[#f7ce40]/30
              "
            />

          </label>







          <button
            type="submit"
            disabled={status === "loading"}
            className="
            md:col-span-2
            rounded-full
            bg-[#f7ce40]
            py-4
            font-bold
            text-[#0c1512]
            transition-all
            hover:-translate-y-1
            hover:bg-[#0c1512]
            hover:text-white
            disabled:opacity-50
            "
          >

            {status === "loading"
              ? "Sending Request..."
              : "Get My Free Quote →"
            }

          </button>





          {status === "success" && (

            <p
              className="
              md:col-span-2
              text-center
              font-semibold
              text-green-600
              "
            >
              Thank you! Your quote request has been received. We will contact you shortly.
            </p>

          )}





          {status === "error" && (

            <p
              className="
              md:col-span-2
              text-center
              font-semibold
              text-red-600
              "
            >
              Something went wrong. Please try again.
            </p>

          )}



        </form>



      </div>


    </section>
  );
}