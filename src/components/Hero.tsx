"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16">
      {/* Large Title */}
      <div className="relative">
        <h1 className="hero-title text-brand-black px-4">
          <span className="text-outline-thick text-gray-400">BORN</span>
          <span className="text-gray-400">&amp;</span>
          <span className="text-outline-thick text-gray-400">BRED</span>
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-[50vh] md:h-[60vh] mt-[-2rem] overflow-hidden">
          <img
            src="https://ext.same-assets.com/3468861848/3899151278.webp"
            alt="Born & Bred Team"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
