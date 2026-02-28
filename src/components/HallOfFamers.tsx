"use client";

import { useState } from "react";
import Link from "next/link";

const hallOfFamers = [
  {
    company: "Checkmate",
    founders: "Harry, Rory, & Elliot",
    description: "Checkmate is a personalized tool that helps online shoppers get more shopping and enjoyment out of the experience.",
    badges: ["Visionary Team", "Customer Obsessed", "Risk-Takers"],
    highlights: [
      "Personalized Discounts for saving money while shopping",
      "Funding Raised: $15m Series A (lead by Google)",
      "Brand Ambassador: Paris Hilton",
      "Putting money back in the consumer's pocket",
      "One of them is a ninja warrior",
    ],
    website: "checkmate.com",
    image: "https://ext.same-assets.com/3468861848/288193253.webp",
  },
  {
    company: "Sequel",
    founders: "Amanda & Greta",
    description: "For the first time in 80 years, the tampon has been reinvented. Sequel's spiral design technology delivers game-changing leak protection.",
    badges: ["Category Defining", "Risk Takers", "Visionary Team"],
    highlights: [
      "The First Tampon Reinvented in 80 Years",
      "Funding Raised: $5m Series A",
      "Brand Sponsor of the WNBA team, Indiana Fever",
      "Building products to help women win",
      "Invented by high-level Stanford athletes",
    ],
    website: "trysequel.com",
    image: "https://ext.same-assets.com/3468861848/961948218.webp",
  },
  {
    company: "ZBiotics",
    founders: "Zack & Stephen",
    description: "ZBiotics Pre-Alcohol is a probiotic drink that breaks down the byproduct of alcohol responsible for rough mornings after drinking.",
    badges: ["Visionary Team", "Highly Collaborative", "Category Defining"],
    highlights: [
      "Genetically Engineered hangover cure that actually works",
      "Helping humans have thousands of better mornings",
      "Funding Raised: $40m",
      "Over 5 million pre-alcohol shots sold",
    ],
    website: "zbiotics.com",
    image: "https://ext.same-assets.com/3468861848/3066192430.webp",
  },
];

export default function HallOfFamers() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % hallOfFamers.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + hallOfFamers.length) % hallOfFamers.length);
  };

  const currentFamer = hallOfFamers[activeIndex];

  return (
    <section className="bg-brand-black text-white py-20">
      {/* Header */}
      <div className="px-8 md:px-12 mb-12">
        <div className="flex items-start gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-none">
            THE HALL OF
            <br />
            FAMERS
          </h2>
          <p className="max-w-md text-sm text-white/60 mt-2">
            We&apos;ve been privileged to work with some really good people doing really good things. Here&apos;s how they&apos;re changing the world.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="grid md:grid-cols-2 gap-8 px-8 md:px-12">
        {/* Left - Image */}
        <div className="relative">
          <div className="aspect-square bg-brand-black border border-white/20 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Decorative frame */}
            <div className="relative w-full h-full p-8 flex items-center justify-center">
              <img
                src={currentFamer.image}
                alt={currentFamer.company}
                className="max-w-[80%] max-h-[80%] object-contain"
              />
              <div className="absolute inset-4 border border-white/10 rounded-lg pointer-events-none" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {hallOfFamers.map((_, index) => (
                <button
                  type="button"
                  key={`dot-${hallOfFamers[index].company}`}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right - Info */}
        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-wider text-white/60 mb-2">
            Founders of {currentFamer.company}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            {currentFamer.founders}
          </h3>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {currentFamer.badges.map((badge) => (
              <div
                key={badge}
                className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center"
              >
                <span className="text-[8px] text-center leading-tight px-1">
                  {badge}
                </span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-3 mb-8">
            {currentFamer.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm">
                <span className="text-brand-red mt-1">•</span>
                {highlight}
              </li>
            ))}
            <li className="flex items-start gap-2 text-sm">
              <span className="text-brand-red mt-1">•</span>
              Find them at{" "}
              <a
                href={`https://${currentFamer.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red hover:underline"
              >
                {currentFamer.website}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-sm text-white/60 mb-4">Born to be a hall of famer?</p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
        >
          Let&apos;s Work Together
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
