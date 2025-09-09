import heroImg from "../assets/background.png";
import { Briefcase, BarChart, TrendingUp } from "lucide-react";

export default function Hero() {
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
    <>
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
      <section
        className="relative z-10 px-4 sm:px-6 -mt-16 md:-mt-20"
        aria-label="Key feature"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((items, index) => (
              <article
                key={index}
                className={`rounded-lg p-6 shadow-xl ${items.bg}`}
              >
                <div
                  className={`mb-4 inline-flex w-10 h-10 items-center justify-center rounded-b-md border ${items.border} `}
                >
                  {items.icon}
                </div>
                <h3 className="font-semibold">{items.title}</h3>
                <p className="mt-1 text-sm opacity-90">{items.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
