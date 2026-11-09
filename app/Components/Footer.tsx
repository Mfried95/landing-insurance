import Link from "next/link";

// TODO: fill these in. Anything left empty is simply not shown on the page.
// Keep the name, address, and phone identical to your Google Business Profile
// and the structured data in app/page.tsx.
const business = {
  name: "Rate Shop Ontario",
  riboLicence: "", // your RIBO licence number
  phone: "", // e.g. "(416) 555-0123"
  email: "",
  address: { street: "", city: "", province: "ON", postalCode: "" },
};

const links = [
  { label: "Home", href: "/" },
  { label: "Insurance coverage", href: "/#coverage" },
  { label: "Get a quote", href: "/#quote" },
  { label: "Privacy policy", href: "/privacy-policy" }, // needs a /privacy-policy page
];

const linkClass =
  "rounded text-gray-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c1512]";

export default function Footer() {
  const { address, phone, email, riboLicence } = business;
  const hasContact = Boolean(address.street || phone || email);

  return (
    <footer className="border-t bg-white py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="text-lg font-bold text-[#0c1512]">{business.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Insurance brokers helping clients across Ontario compare auto, home,
            and commercial insurance.
          </p>
          {riboLicence && (
            <p className="mt-3 text-sm text-gray-600">
              Licensed by the Registered Insurance Brokers of Ontario (RIBO).
              Licence no. {riboLicence}.
            </p>
          )}
        </div>

        {/* Navigation */}
        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-[#0c1512]">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        {hasContact && (
          <div>
            <p className="text-sm font-semibold text-[#0c1512]">Contact us</p>
            <address className="mt-3 space-y-2 text-sm not-italic text-gray-700">
              {address.street && (
                <p>
                  {address.street}
                  <br />
                  {[address.city, address.province].filter(Boolean).join(", ")}{" "}
                  {address.postalCode}
                </p>
              )}
              {phone && (
                <p>
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className={linkClass}
                  >
                    {phone}
                  </a>
                </p>
              )}
              {email && (
                <p>
                  <a href={`mailto:${email}`} className={linkClass}>
                    {email}
                  </a>
                </p>
              )}
            </address>
          </div>
        )}
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t px-6 pt-6 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}