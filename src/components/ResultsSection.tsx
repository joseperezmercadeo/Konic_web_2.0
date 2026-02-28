"use client";

import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    brand: "Discord",
    title: "Redefining a beloved platform to acquire new audiences",
    tags: ["Brand Identity", "Brand Launch"],
    bgColor: "bg-[#5865F2]",
    image: null,
    icon: (
      <svg viewBox="0 0 71 55" className="w-32 h-auto" fill="white">
        <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3## 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978Z" />
      </svg>
    ),
  },
  {
    id: 2,
    brand: "Sequel",
    title: "Launching the First Tampon Redesign in 80 Years",
    tags: ["Brand Identity", "Packaging"],
    bgColor: "bg-brand-black",
    image: null,
    textLogo: "SEQUEL",
    textLogoColor: "text-[#5865F2]",
  },
  {
    id: 3,
    brand: "Checkmate",
    title: "Securing the #1 spot in the App Store",
    tags: ["Campaign", "Production"],
    bgColor: "bg-[#5865F2]",
    image: null,
    icon: (
      <svg viewBox="0 0 100 100" className="w-24 h-auto" fill="none" stroke="white" strokeWidth="2">
        <path d="M20 20L40 40M40 20L20 40M60 20L80 40M80 20L60 40M30 60L50 80L70 60" />
      </svg>
    ),
  },
  {
    id: 4,
    brand: "Lumanu",
    title: "Creating a bold B2B brand for even bolder creators",
    tags: ["Campaign", "Production"],
    bgColor: "bg-brand-black",
    image: "https://ext.same-assets.com/3468861848/660421859.webp",
  },
  {
    id: 5,
    brand: "Del Monte",
    title: "Growing the most profitable product in Del Monte history",
    tags: ["Campaign", "Packaging"],
    bgColor: "bg-white",
    image: "https://ext.same-assets.com/3468861848/246629539.webp",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="bg-brand-black text-white">
      {/* Section Header */}
      <div className="grid md:grid-cols-4 border-b border-white/10">
        <div className="md:col-span-2 p-8 md:p-12">
          <h2 className="text-5xl md:text-7xl font-black">
            OUR
            <br />
            RESULTS
          </h2>
        </div>
        <div className="p-8 md:p-12 flex items-center">
          <p className="text-sm text-white/70">
            A few of the outcomes we&apos;re proud to have delivered alongside our
            clients. We&apos;ve saved you a spot.
          </p>
        </div>
        <div className="p-8 md:p-12 flex items-center justify-end">
          <Link
            href="#"
            className="relative w-20 h-20 bg-brand-red rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            <span className="absolute inset-0 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
            <svg
              className="absolute animate-rotate"
              viewBox="0 0 100 100"
              width="80"
              height="80"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text fill="white" fontSize="9" fontWeight="500">
                <textPath href="#circlePath">
                  VIEW ALL RESULTS • VIEW ALL RESULTS •
                </textPath>
              </text>
            </svg>
          </Link>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2">
        {/* Discord Card */}
        <div className="bg-[#5865F2] p-8 md:p-12 min-h-[400px] flex flex-col justify-between case-card">
          <div className="flex justify-center items-center flex-1">
            <svg viewBox="0 0 71 55" className="w-40 h-auto" fill="white">
              <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978Z" />
            </svg>
          </div>
          <div>
            <span className="tag-dark mb-3">Discord</span>
          </div>
        </div>

        {/* Discord Description */}
        <div className="bg-brand-black p-8 md:p-12 min-h-[400px] flex flex-col justify-center border-l border-white/10">
          <span className="tag-dark mb-4 w-fit">
            <span className="w-2 h-2 bg-white rounded-full" />
            Discord
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Redefining a beloved platform to acquire new audiences
          </h3>
        </div>

        {/* Sequel Card */}
        <div className="bg-brand-black p-8 md:p-12 min-h-[350px] flex flex-col justify-between case-card border-t border-white/10">
          <span className="tag-dark w-fit">
            <span className="w-2 h-2 bg-white rounded-full" />
            Sequel
          </span>
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Launching the First Tampon Redesign in 80 Years
            </h3>
          </div>
        </div>

        {/* Sequel Logo */}
        <div className="bg-[#5865F2] p-8 md:p-12 min-h-[350px] flex items-center justify-center case-card border-t border-white/10">
          <span className="text-5xl md:text-6xl font-black text-white tracking-wider">
            SEQUEL
          </span>
        </div>

        {/* Checkmate */}
        <div className="bg-[#5865F2] p-8 md:p-12 min-h-[300px] flex flex-col justify-between case-card border-t border-white/10">
          <div className="flex justify-center items-center flex-1">
            <svg viewBox="0 0 100 100" className="w-28 h-auto" fill="none" stroke="white" strokeWidth="3">
              <rect x="10" y="10" width="80" height="80" rx="4" />
              <path d="M25 25L40 45L25 65" />
              <path d="M45 25H75" />
              <path d="M45 45H75" />
              <path d="M45 65H75" />
            </svg>
          </div>
          <div>
            <span className="tag-dark mb-3">Checkmate</span>
            <p className="text-sm text-white/80">Securing the #1 spot in the App Store</p>
          </div>
        </div>

        {/* Colorful Image Card */}
        <div className="relative min-h-[300px] overflow-hidden case-card border-t border-white/10">
          <img
            src="https://ext.same-assets.com/3468861848/660421859.webp"
            alt="Creative Campaign"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lumanu */}
        <div className="bg-brand-black p-8 md:p-12 min-h-[300px] flex flex-col justify-center border-t border-white/10">
          <span className="tag-dark mb-4 w-fit">
            <span className="w-2 h-2 bg-white rounded-full" />
            Lumanu
          </span>
          <h3 className="text-xl md:text-2xl font-bold">
            Creating a bold B2B brand for even bolder creators
          </h3>
        </div>

        {/* Del Monte */}
        <div className="relative min-h-[300px] overflow-hidden case-card border-t border-white/10">
          <img
            src="https://ext.same-assets.com/3468861848/246629539.webp"
            alt="Del Monte Pinkglow"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <span className="tag-dark">Del Monte</span>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="grid md:grid-cols-3 border-t border-white/10">
        <div className="md:col-span-2 p-8 md:p-12" />
        <div className="p-8 md:p-12">
          <blockquote className="text-lg md:text-xl font-bold leading-snug">
            <span className="text-brand-red">&ldquo;</span>
            If it makes your legal team nervous and your competitors jealous, we&apos;re in.
            <span className="text-brand-red">&rdquo;</span>
          </blockquote>
          <cite className="block mt-4 text-sm text-white/60 not-italic">
            - Born & Bred Team
          </cite>
        </div>
      </div>
    </section>
  );
}
