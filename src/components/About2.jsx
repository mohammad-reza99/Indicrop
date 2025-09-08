import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const items = [
  {
    icon: <AiOutlinePhone size={28} />,
    email1: "georgia.young@example.com",
    email2: "georgia.young@ple.com",
  },
  {
    icon: <GoLocation size={28} />,
    email1: "georgia.young@example.com",
    email2: "georgia.young@ple.com",
  },
  {
    icon: <AiOutlineMail size={28} />,
    email1: "georgia.young@example.com",
    email2: "georgia.young@ple.com",
  },
];

const About2 = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-800">
            Get In Tuch
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-xl shadow-lg p-8 text-center transition-colors duration-300 hover:bg-slate-800 hover:text-white"
            >
              <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full ring-1 ring-cyan-700/30 text-cyan-700 transition-colors group-hover:text-white group-hover:ring-white/40">
                {item.icon}
              </div>
              <p className="text-sm">{item.email1}</p>
              <p className="text-sm">{item.email2}</p>
              <h3 className="mt-5 font-semibold">Get Support</h3>
              <a
                href="#"
                className="mt-4 inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-semibold
                           border border-amber-400 text-amber-500
                           transition-colors group-hover:border-white/70 group-hover:text-white"
              >
                Submit Request
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About2;
