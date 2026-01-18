export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 border-b sticky top-0 z-50 bg-[#1a2930] text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Your Broker Name</div>
        <a href="#home" className="text-sm font-medium">
          Home
        </a>
      </div>
    </nav>
  );
}
