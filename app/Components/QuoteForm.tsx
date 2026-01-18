export default function QuoteForm() {
  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Request a Quote</h2>
        <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col">
            <span className="font-semibold">Full Name</span>
            <input type="text" className="mt-2 p-3 border rounded" placeholder="John Doe" />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Email</span>
            <input type="email" className="mt-2 p-3 border rounded" placeholder="email@example.com" />
          </label>

          <label className="flex flex-col md:col-span-2">
            <span className="font-semibold">Phone</span>
            <input type="tel" className="mt-2 p-3 border rounded" placeholder="(123) 456-7890" />
          </label>

          <label className="flex flex-col md:col-span-2">
            <span className="font-semibold">Coverage Needed</span>
            <select className="mt-2 p-3 border rounded">
              <option>Auto Insurance</option>
              <option>Home Insurance</option>
              <option>Commercial Insurance</option>
            </select>
          </label>

          <label className="flex flex-col md:col-span-2">
            <span className="font-semibold">Message</span>
            <textarea className="mt-2 p-3 border rounded" rows={4} placeholder="Tell us what you need..."></textarea>
          </label>

          <button className="md:col-span-2 bg-blue-600 text-white font-semibold rounded-lg py-3">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
