import { useState } from "react";
import heroImg from "../assets/background.png";
import {
  Briefcase,
  BarChart,
  TrendingUp,
  Search,
  User,
  Menu,
  X,
} from "lucide-react";

export default function HeaderHeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Digital Marketing",
      text: "We focus on ergonomics and meeting you where you work.",
      bg: "bg-white text-gray-900",
      border: "border-cyan-700/30",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "National top 50 firms",
      text: "Just type what's on your mind and we'll get you there",
      bg: "bg-white text-gray-900",
      border: "border-cyan-700/30",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Business Growing",
      text: "The quick fox jumps over the lazy dog.",
      bg: "bg-cyan-700 text-white",
      border: "border-white/30",
    },
  ];

  return (
    <header className="relative">
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
            {["Home", "Product", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-900">
                  {item}
                </a>
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
      <section
        className="relative bg-no-repeat bg-center bg-cover h-[500px]"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 md:pt-32 lg:pt-40">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              <span className="block">EMPOWER</span>
              <span className="block">YOUR BUSINESS</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base lg:text-lg max-w-md">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 ">
              <a
                href="#"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold bg-amber-400 hover:bg-amber-500 text-gray-900 shadow-sm"
              >
                Get Quote Now
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold border border-cyan-600 text-cyan-700 hover:bg-cyan-50"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
