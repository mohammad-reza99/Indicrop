import React from "react";
import {
  FaHooli,
  FaLyft,
  FaAws,
  FaPiedPiperHat,
  FaStripe,
} from "react-icons/fa";

const Brands = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <ul className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center  gap-8 opacity-70">
          <li className="flex justify-center">
            <FaHooli className="h-32 w-32 text-slate-700" />
          </li>
          <li className="flex justify-center">
            <FaLyft className="h-32 w-32 text-slate-700" />
          </li>
          <li className="flex justify-center">
            <FaAws className="h-32 w-32 text-slate-700" />
          </li>
          <li className="flex justify-center">
            <FaPiedPiperHat className="h-32 w-32 text-slate-700" />
          </li>
          <li className="flex justify-center">
            <FaStripe className="h-32 w-32 text-slate-700" />
          </li>
          <li className="flex justify-center">
            <FaHooli className="h-32 w-32 text-slate-700" />
          </li>
        </ul>
      </div>
      <div className="h-20 bg-slate-900">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-full px-4 sm:px-6">
          <div className="mx-auto max-w-5xl bg-teal-700 text-white rounded-md shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold">
                Subscribe For Latest <br className="hidden sm:block" />
                Newsletter
              </h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your Email..."
                  className="flex-1 bg-white px-3 py-2 border border-gray-300 rounded-l-md outline-none text-slate-800"
                />
                <button className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-r-md font-semibold">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
