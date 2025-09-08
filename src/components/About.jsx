import React from "react";
import { Play, User, List } from "lucide-react";
import ColImg from "../assets/col-md-8.png";

const features = [
  {
    color: "text-orange-500",
    icon: <User className="w-6 h-6" />,
    title: "the quick fox jumps over the lazy dog",
    desc: "Things on a very small scale ...",
  },
  {
    color: "text-yellow-500",
    icon: <List className="w-6 h-6" />,
    title: "the quick fox jumps over the lazy dog",
    desc: "Things on a very small scale ...",
  },
];

const About = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
            We are providing best <br className="hidden sm:block" />
            business service.
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img src={ColImg} className="rounded-lg shadow-lg" />
            <button className="absolute inset-0 flex items-center justify-center"></button>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Most trusted in our field
            </h3>
            <p className="text-gray-500 mp-6">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <div className="space-y-4 mt-20">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={feature.color}>{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
