export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Your Broker Name</div>
        <a href="#home" className="text-sm font-medium">
          Home
        </a>
      </div>
    </nav>
  );
}
