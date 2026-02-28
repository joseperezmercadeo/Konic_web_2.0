"use client";

const stats = [
  { value: "2X", label: "Average Year Over Year Growth" },
  { value: "6", label: "Client Exits" },
  { value: "8", label: "Weeks to Measurable Growth" },
  { value: "$2.7bn", label: "VC Funding Raised by Our Partners" },
  { value: "200+", label: "Clients We've Helped Scale" },
  { value: "12", label: "Years Scaling Ambitious Businesses" },
];

export default function StatsSection() {
  return (
    <section className="bg-brand-black text-white py-20 grid-lines-dark">
      <div className="grid lg:grid-cols-4 border border-white/10">
        {/* Title Column */}
        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            OUR
            <br />
            DATA
            <br />
            DOES
            <br />
            THE
            <br />
            <span className="text-brand-red">TALKING</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-3 grid md:grid-cols-3">
          {/* First Row */}
          <div className="p-8 md:p-12 border-b border-r border-white/10">
            <span className="text-5xl md:text-6xl font-black">2X</span>
            <p className="text-xs uppercase tracking-wider mt-4 text-white/60">
              Average Year Over Year Growth
            </p>
          </div>
          <div className="p-8 md:p-12 border-b border-r border-white/10">
            <span className="text-5xl md:text-6xl font-black">6</span>
            <p className="text-xs uppercase tracking-wider mt-4 text-white/60">
              Client Exits
            </p>
          </div>
          <div className="p-8 md:p-12 border-b border-white/10">
            <span className="text-5xl md:text-6xl font-black">8</span>
            <p className="text-xs uppercase tracking-wider mt-4 text-white/60">
              Weeks to Measurable Growth
            </p>
          </div>

          {/* Second Row */}
          <div className="p-8 md:p-12 border-b md:border-b-0 border-r border-white/10">
            <span className="text-4xl md:text-5xl font-black">$2.7bn</span>
            <p className="text-xs uppercase tracking-wider mt-4 text-white/60">
              VC Funding Raised
              <br />
              by Our Partners
            </p>
          </div>
          <div className="p-8 md:p-12 border-r border-white/10 row-span-2">
            <blockquote className="text-lg md:text-xl font-bold leading-snug">
              <span className="text-brand-red">&ldquo;</span>
              Born & Bred was a strategic game-changer. Their meticulous curation cut through industry noise, shaping a brand that positions us for scalable success.
              <span className="text-brand-red">&rdquo;</span>
            </blockquote>
            <cite className="block mt-6 text-sm text-white/60 not-italic">
              Marcus Schiller | Founder
            </cite>
          </div>

          {/* Third Row Stats */}
          <div className="p-8 md:p-12 border-t border-white/10">
            <span className="text-5xl md:text-6xl font-black">12</span>
            <p className="text-xs uppercase tracking-wider mt-4 text-white/60">
              Years Scaling
              <br />
              Ambitious Businesses
            </p>
          </div>

          {/* Bottom Row */}
          <div className="p-8 md:p-12 border-t border-r border-white/10">
            <span className="text-5xl md:text-6xl font-black">200+</span>
            <p className="text-xs uppercase tracking-wider mt-4 text-white/60">
              Clients We&apos;ve
              <br />
              Helped Scale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
