"use client";

import Link from "next/link";

const services = [
  "Market Research",
  "Brand Strategy",
  "Brand Messaging",
  "Brand Identity",
  "Campaigns",
  "Go-To-Market",
  "Website Design",
  "Web Development",
  "Communications",
  "Content & SEO",
  "Performance Marketing",
  "Social Media & UGC",
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-8 border-b border-black/10">
        <div className="flex items-center gap-4">
          <h2 className="text-xl md:text-2xl">
            <span className="text-brand-red">Our services</span> have been developed to Ignite your next leap forward
          </h2>
        </div>
        <Link
          href="#services"
          className="hidden md:flex relative w-20 h-20 bg-brand-red rounded-full items-center justify-center hover:scale-110 transition-transform"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <svg
            className="absolute animate-rotate"
            viewBox="0 0 100 100"
            width="80"
            height="80"
          >
            <defs>
              <path
                id="servicesCirclePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text fill="white" fontSize="9" fontWeight="500">
              <textPath href="#servicesCirclePath">
                VIEW ALL SERVICES • VIEW ALL SERVICES •
              </textPath>
            </text>
          </svg>
        </Link>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service}
            className="min-h-[100px] flex items-center justify-center cursor-pointer"
          >
            <span className="font-medium">{service}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
