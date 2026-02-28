"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2L28 8V24L16 30L4 24V8L16 2Z"
              fill="#e51923"
            />
            <path
              d="M12 12L20 16L12 20V12Z"
              fill="white"
            />
          </svg>
        </Link>

        {/* Center Badge */}
        <div className="hidden md:block text-xs font-medium tracking-wider uppercase">
          2X Adweek&apos;s Fastest Growing Agency
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:flex bg-brand-red text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Work with us
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <span className="w-5 h-0.5 bg-brand-black" />
            <span>Menu</span>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-8 overflow-auto">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-8 text-2xl"
          >
            ×
          </button>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
            <div>
              <h3 className="text-sm font-medium text-brand-gray mb-4 uppercase tracking-wider">
                Main
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#results" onClick={() => setMenuOpen(false)} className="text-3xl font-bold hover:text-brand-red transition-colors">
                    Results
                  </Link>
                </li>
                <li>
                  <Link href="#services" onClick={() => setMenuOpen(false)} className="text-3xl font-bold hover:text-brand-red transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" onClick={() => setMenuOpen(false)} className="text-3xl font-bold hover:text-brand-red transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" onClick={() => setMenuOpen(false)} className="text-3xl font-bold hover:text-brand-red transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-brand-gray mb-4 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-2">
                {[
                  "Market Research",
                  "Brand Strategy",
                  "Brand Identity",
                  "Brand Messaging",
                  "Campaigns",
                  "Go-To-Market",
                  "Social Media & UGC",
                  "Website Design",
                  "Web Development",
                  "Performance Marketing",
                  "Content & SEO",
                  "Communications",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="#services"
                      onClick={() => setMenuOpen(false)}
                      className="text-lg hover:text-brand-red transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-brand-gray mb-4 uppercase tracking-wider">
                Industries
              </h3>
              <ul className="space-y-2">
                {[
                  "AI",
                  "B2B",
                  "Consumer Health",
                  "Financial Services",
                  "HealthTech",
                  "Real Estate",
                  "Tech",
                ].map((industry) => (
                  <li key={industry}>
                    <Link
                      href="#"
                      onClick={() => setMenuOpen(false)}
                      className="text-lg hover:text-brand-red transition-colors"
                    >
                      {industry}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
                >
                  Work with us
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
