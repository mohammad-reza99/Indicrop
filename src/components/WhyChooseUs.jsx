import React from "react";
import { Users, BarChart2, Award, Briefcase } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-7 h-7 text-cyan-700" />,
    value: "3K",
    label: "CASES DONE",
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-cyan-700" />,
    value: "45",
    label: "HAPPY CUSTOMERS",
  },
  {
    icon: <Award className="w-7 h-7 text-cyan-700" />,
    value: "12+",
    label: "AWARD WINNING",
  },
  {
    icon: <Briefcase className="w-7 h-7 text-cyan-700" />,
    value: "1.5K",
    label: "PROJECTS",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-slate-800">
            WHY CHOOSE US
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg"
            >
              <div className="mx-auto mb-5 w-12 h-12 flex items-center justify-center rounded-md border border-cyan-700/30">
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold text-slate-800">
                {stat.value}
              </div>
              <div className="mt-1 text-xs tracking-wider text-gray-500 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
