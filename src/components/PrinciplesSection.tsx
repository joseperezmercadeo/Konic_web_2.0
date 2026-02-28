"use client";

const principles = [
  {
    title: "We Show Up At Critical Inflection Points",
    description:
      "Launches. Pivots. Category creation. We do our best work when the stakes are highest, helping you make decisions that move your business forward, fast.",
  },
  {
    title: "Your Creative Must Convert",
    description:
      "There are plenty of designers in the world, and AI can generate a pretty picture in seconds. Good design is table stakes. We build creative and marketing solutions that actually perform, driving growth, traction, and results for your business.",
  },
  {
    title: "We're In It For The Long Haul",
    description:
      "From brand to performance, we align with your goals from the start. We don't do one-offs. Instead, we build robust systems designed to scale and consistently deliver value over time.",
  },
  {
    title: "Doing Great Work, With Great People",
    description:
      "We believe in working with good people, doing good things, to generate exceptional results, accelerating both business growth and personal success.",
  },
];

export default function PrinciplesSection() {
  return (
    <section className="py-20 bg-white">
      {/* Arrow and label */}
      <div className="flex items-center gap-2 px-8 mb-8">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-brand-gray rotate-180"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm text-brand-gray">
          Results so hot our backgrounds melt.
        </span>
      </div>

      {/* Title */}
      <div className="text-center py-12 border-t border-b border-black/10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-brand-red">Four Principles</span> We Never Get
          <br />
          Bored Of Talking About
        </h2>
      </div>

      {/* Principles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 border-b border-black/10">
        {principles.map((principle, index) => (
          <div
            key={principle.title}
            className={`p-8 ${
              index < principles.length - 1 ? "border-r border-black/10" : ""
            }`}
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 leading-tight">
              {principle.title}
            </h3>
            <p className="text-sm text-brand-gray leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
