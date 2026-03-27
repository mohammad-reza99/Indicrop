import { useState } from "react";
import { Search, User, Menu, X, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      id: 1,
      label: <Home className="w-5 h-5 inline" />,
      link: "/",
    },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Contact", link: "/contact" },
  ];

  return (
    <header className="relative z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-cyan-700 tracking-tight"
          >
            Indicorp
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="hover:text-cyan-700 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-3 text-gray-700">
            <button className="p-2 rounded hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded hover:bg-gray-100">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Menu Items */}
            <nav className="mt-12 flex flex-col gap-6 text-lg text-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-700 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Icons */}
            <div className="mt-10 flex gap-4">
              <button className="p-2 rounded hover:bg-gray-100">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 rounded hover:bg-gray-100">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
