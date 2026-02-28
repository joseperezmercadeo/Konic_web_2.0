"use client";

import Link from "next/link";

export default function CommitmentSection() {
  return (
    <section id="about" className="py-20 bg-white">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-8 px-8 md:px-12 mb-16">
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none">
            READY FOR
            <br />
            COMMITMENT?
          </h2>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-brand-gray max-w-md">
            We&apos;re not selling services, we&apos;re building relationships. Whether you&apos;re testing the waters or ready to go all-in, we&apos;ve got the right setup to meet you where you are.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-0 px-8 md:px-12">
        {/* Project Card */}
        <div className="pricing-card">
          {/* Stats */}
          <div className="flex gap-4 mb-8">
            <span className="flex items-center gap-1 text-xs">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              </svg>
              4
            </span>
            <span className="flex items-center gap-1 text-xs">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
              </svg>
              19
            </span>
            <span className="flex items-center gap-1 text-xs">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              </svg>
              20
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">Project</h3>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Rebrand", "GTM Launch", "Website", "Large Defined Deliverables"].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Description */}
          <p className="text-center text-brand-gray mb-2">
            A great way to try us out — clear scope, no pressure.
          </p>
          <p className="text-center text-sm text-brand-gray mb-8 italic">
            Let&apos;s go to dinner, see if we click
          </p>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              Start a Project
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Retainer Card */}
        <div className="pricing-card border-l-0 md:border-l">
          {/* Stats */}
          <div className="flex gap-4 mb-8">
            <span className="flex items-center gap-1 text-xs">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              </svg>
              4
            </span>
            <span className="flex items-center gap-1 text-xs">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
              </svg>
              14
            </span>
            <span className="flex items-center gap-1 text-xs">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              </svg>
              20
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">Retainer</h3>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Social Media", "Campaigns", "Performance Ads", "Ongoing Flexible Needs"].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Description */}
          <p className="text-center text-brand-gray mb-2">
            Ready to go steady? This is for the real ones.
          </p>
          <p className="text-center text-sm text-brand-gray mb-8 italic">
            Let&apos;s make it a regular thing
          </p>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              Begin Retainer
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Warning Text */}
      <div className="flex items-center justify-center gap-2 mt-12 px-8">
        <span className="text-sm text-brand-gray">WARNING: This button changes lives</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-brand-gray"
        >
          <path
            d="M7 7L17 17M17 17H7M17 17V7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
