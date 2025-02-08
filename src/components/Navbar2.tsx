export default function Navbar() {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-200 hover:text-white transition">
            Home
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition">
            Schemes
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition">
            About
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition">
            Contact
          </a>
        </div>

        <button className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all">
          Login
        </button>
      </div>
    </nav>
  );
}
