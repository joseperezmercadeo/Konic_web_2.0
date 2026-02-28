'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'Pfizer', color: '#0093d0' },
  { name: 'Pepsico', color: '#004b93' },
  { name: 'Discord', color: '#5865F2' },
  { name: 'VISA', color: '#1a1f71' },
  { name: 'SoFi', color: '#a7e92f' },
  { name: 'Semrush', color: '#ff642d' },
  { name: 'eaze', color: '#00d264' },
  { name: 'GCI', color: '#e31937' },
];

export default function LogoMarquee() {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-black to-purple-900/20 overflow-hidden">
      <div className="relative">
        {/* Gradientes laterales */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10" />
        
        {/* Carrusel */}
        <motion.div
          animate={{ x: [0, -50 * logos.length * 4] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-16 items-center"
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-4xl md:text-5xl font-bold opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              style={{ color: logo.color }}
            >
              {logo.name}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <p className="text-white/60 text-sm tracking-wider uppercase">
          Trusted by Brands You Know... and a Few You'll Know Soon.
        </p>
      </div>
    </section>
  );
}