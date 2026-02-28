"use client";

const logos = [
  { name: "Pfizer", src: "https://ext.same-assets.com/3468861848/1427589880.webp" },
  { name: "Pepsico", src: "https://ext.same-assets.com/3468861848/1933982324.webp" },
  { name: "Discord", src: "https://ext.same-assets.com/3468861848/3133336767.webp" },
  { name: "Del Monte", src: "https://ext.same-assets.com/3468861848/1370169525.webp" },
  { name: "Visa", src: "https://ext.same-assets.com/3468861848/181202455.webp" },
  { name: "SoFi", src: "https://ext.same-assets.com/3468861848/2245161847.webp" },
  { name: "Semrush", src: "https://ext.same-assets.com/3468861848/638698479.webp" },
  { name: "Analog Devices", src: "https://ext.same-assets.com/3468861848/2728799531.webp" },
  { name: "Vividly", src: "https://ext.same-assets.com/3468861848/790162283.webp" },
  { name: "Mirvie", src: "https://ext.same-assets.com/3468861848/2798373748.webp" },
  { name: "Savas", src: "https://ext.same-assets.com/3468861848/1410762177.webp" },
  { name: "Zbiotics", src: "https://ext.same-assets.com/3468861848/3095998970.webp" },
  { name: "Eaze", src: "https://ext.same-assets.com/3468861848/1790797110.webp" },
  { name: "Conduit", src: "https://ext.same-assets.com/3468861848/3875078143.webp" },
  { name: "JetBrains", src: "https://ext.same-assets.com/3468861848/836513140.webp" },
  { name: "HenryMeds", src: "https://ext.same-assets.com/3468861848/774912858.webp" },
];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white">
      {/* Tagline */}
      <div className="text-center max-w-4xl mx-auto px-8 mb-16">
        <p className="text-2xl md:text-3xl lg:text-4xl text-brand-gray leading-relaxed">
          Where creativity meets performance, we bring research, strategy, design, and technology together to help our partners grow fast and win.
        </p>
      </div>

      {/* Trusted by label */}
      <div className="flex items-center gap-2 px-8 mb-8">
        <span className="text-sm text-brand-gray">
          Trusted by Brands You Know... and a Few You&apos;ll Know Soon.
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-brand-gray"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Logo Marquee with gradient background */}
      <div className="relative overflow-hidden gradient-pink-clouds py-12">
        {/* First row */}
        <div className="flex animate-marquee whitespace-nowrap mb-4">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`row1-${logo.name}-${index}`}
              className="mx-8 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Second row - reverse direction */}
        <div className="flex animate-marquee whitespace-nowrap" style={{ animationDirection: "reverse" }}>
          {[...logos.slice(8), ...logos.slice(0, 8), ...logos.slice(8), ...logos.slice(0, 8)].map((logo, index) => (
            <div
              key={`row2-${logo.name}-${index}`}
              className="mx-8 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
