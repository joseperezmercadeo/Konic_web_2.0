'use client';

import { motion } from 'framer-motion';
import { useCountUp, fadeInUp, staggerContainer } from '@/lib/animations';

function AnimatedStat({ value, prefix = '', suffix = '', label, sublabel }: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  label: string;
  sublabel?: string;
}) {
  const { count, ref } = useCountUp(value, 2500);
  
  return (
    <motion.div 
      ref={ref}
      variants={fadeInUp}
      className="flex flex-col"
    >
      <span className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
        {prefix}{count}{suffix}
      </span>
      <span className="text-white/80 text-sm md:text-base mt-2 uppercase tracking-wide">
        {label}
      </span>
      {sublabel && (
        <span className="text-white/60 text-xs mt-1">{sublabel}</span>
      )}
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-brand-black py-20 px-6 md:px-12">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Title Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-none tracking-tighter">
              OUR<br />
              <span className="text-white/40">DATA</span><br />
              DOES<br />
              <span className="text-white/40">THE</span><br />
              TALKING
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <AnimatedStat 
              value={2} 
              suffix="X" 
              label="Average Year" 
              sublabel="Over Year Growth" 
            />
            
            <AnimatedStat 
              value={6} 
              label="Client" 
              sublabel="Exits" 
            />
            
            <AnimatedStat 
              value={8} 
              label="Weeks to" 
              sublabel="Measurable Growth" 
            />

            <AnimatedStat 
              value={2} 
              prefix="$" 
              suffix=".7bn" 
              label="VC Funding Raised" 
              sublabel="by Our Partners" 
            />

            <motion.div variants={fadeInUp} className="col-span-2 flex flex-col justify-center border-l-2 border-brand-red pl-6">
              <p className="text-white text-base italic leading-relaxed">
                &ldquo;Born & Bred was a strategic game-changer. Their meticulous curation cut through industry noise, shaping a brand that positions us for scalable success.&rdquo;
              </p>
              <p className="text-brand-red mt-4 font-medium">
                Marcus Schiller <span className="text-white/60">| Founder</span>
              </p>
            </motion.div>

            <AnimatedStat 
              value={200} 
              suffix="+" 
              label="Clients We&apos;ve" 
              sublabel="Helped Scale" 
            />
            
            <AnimatedStat 
              value={12} 
              label="Years Scaling" 
              sublabel="Ambitious Businesses" 
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}