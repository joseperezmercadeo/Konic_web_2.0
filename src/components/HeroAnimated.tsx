'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroAnimated() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video de fondo */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
          poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Texto con efecto parallax */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
          className="text-center"
        >
          <h1 className="text-[15vw] md:text-[12vw] font-bold leading-none tracking-tighter text-white">
            BORN
          </h1>
          <h1 className="text-[15vw] md:text-[12vw] font-bold leading-none tracking-tighter text-white -mt-4 md:-mt-8">
            <span className="text-brand-red">&</span>BRED
          </h1>
        </motion.div>

        {/* Badge flotante */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-32 left-1/2 -translate-x-1/2"
        >
          <span className="text-white text-xs md:text-sm tracking-[0.3em] uppercase">
            2X Adweek&apos;s Fastest Growing Agency
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-white/80 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}