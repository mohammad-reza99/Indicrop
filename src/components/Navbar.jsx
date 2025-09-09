import { useState } from "react";
import { Search, User, Menu, X, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    {
      id: 1,
      label: <Home className="w-5 h-5 inline mb-1" />,
      link: "/",
    },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Contact", link: "/contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="realative">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 bg-white shadow">
        <a
          href="#"
          className="text-xl font-bold text-cyan-700 tracking-tight"
          aria-label="Homepage"
        >
          Indicorp
        </a>
        <nav className="relative z-10 max-w-7xl max-auto px-4 sm:px-6 lg-px-8 py-4">
          <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-3 text-gray-700">
          <button
            aria-label="Search"
            className="p-2 rounded hover:bg-gray-100"
            type="button"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Profile"
            className="p-2 rounded hover:bg-gray-100"
            type="button"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-100"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {menuOpen && (
        <aside className="fixed inset-0 z-30 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div
              className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-3 right-4 p-2 rounded hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 id="mobile-menu-title" className="sr-only">
                Mobile navigation
              </h2>
              <nav className="mt-10 flex flex-col gap-6 text-lg text-gray-800">
                {["Home", "Product", "Pricing", "Contact"].map((item) => (
                  <a key={item} href="#" className="hover:text-cyan-700">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>
      )}
    </header>
  );
}
