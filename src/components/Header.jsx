import { useState } from "react";
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

  return <header className="relative"></header>;
}
