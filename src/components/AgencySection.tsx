"use client";

import Link from "next/link";

export default function AgencySection() {
  return (
    <section className="py-20 grid-lines">
      <div className="grid md:grid-cols-4">
        {/* Empty column for grid effect */}
        <div className="hidden md:block border-r border-black/5" />

        {/* Main content */}
        <div className="md:col-span-2 px-8 py-16 border-r border-black/5">
          {/* Lightning icon */}
          <div className="flex items-center gap-2 mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-brand-black"
            >
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium">
              Built for Brands That Mean Business
            </span>
          </div>

          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
            THE CREATIVE MARKETING AGENCY FOR DEFINING MOMENTS
          </h2>

          {/* Description */}
          <p className="text-lg text-brand-gray max-w-lg mb-8">
            Companies call us when everything&apos;s on the line, from Series A
            launches to global repositioning. We move brands through their most
            critical inflection points.
          </p>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-red-700 transition-colors"
          >
            Grow Your Business
          </Link>
        </div>

        {/* Empty column */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
