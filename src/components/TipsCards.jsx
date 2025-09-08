import React from "react";
import img1 from "../assets/coverX.png";
import img2 from "../assets/cover.png";
import img3 from "../assets/mediax.png";
import img4 from "../assets/media.png";

const cards = [
  {
    title: "A single source of truth",
    text: "Newton thought that light was made up of particles, but then it was discovered",
    img: img1,
    alt: "A single source of truth",
  },
  {
    title: "Fastest way to organize",
    text: "Quantum mechanics is the description of the behaviour of matter",
    img: img2,
    alt: "Fastest way to organize",
  },
  {
    title: "Fastest way to take action",
    text: "They describe a universe consisting of bodies moving",
    img: img3,
    alt: "Fastest way to take action",
  },
  {
    title: "Work better together",
    text: "They finally obtained a consistent description of the behaviour",
    img: img4,
    alt: "Work better together",
  },
];

const TipsCards = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-slate-800">
            Practice Advice
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1">
                <h3 className="font-semibold text-slate-800">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{card.text}</p>
              </div>
              <img
                src={card.img}
                alt={card.alt}
                className="h-36 w-ful object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsCards;
