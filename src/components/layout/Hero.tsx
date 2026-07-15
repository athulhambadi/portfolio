"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // A and I split apart to reveal the rest of the name, and close back on further scroll
  const containerScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [3, 1, 1, 3]);
  const middleWidth = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["0em", "8.0em", "8.0em", "0em"]);
  const middleOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 1, 1, 0]);
  
  // Fade in/out the bio text and buttons so they don't clutter the massive "AI"
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.7, 0.8], [0, 1, 1, 0]);

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Media */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-zinc-950/60 z-10" />
          <motion.div 
            className="absolute inset-0 bg-cover bg-center origin-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1518599904199-0ca897819ddb?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3")',
              scale: bgScale
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
        </div>

        <div className="z-20 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full relative h-[40vh] md:h-[50vh]">
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            
            {/* The Name Construction */}
            <motion.div 
              style={{ scale: containerScale }}
              className="flex items-center justify-center text-[12vw] md:text-[8vw] leading-none font-bold tracking-tighter uppercase"
            >
              <span className="text-white">A</span>
              
              <motion.span 
                style={{ maxWidth: middleWidth, opacity: middleOpacity }}
                className="overflow-hidden flex items-center justify-center whitespace-nowrap"
              >
                <span className="text-white">THUL</span>
                <span className="text-white mx-[0.2em]">H</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-zinc-400">AMBAD</span>
              </motion.span>
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-500">I</span>
            </motion.div>

            <motion.p 
              style={{ opacity: contentOpacity }}
              className="mt-8 text-xl md:text-3xl tracking-widest text-zinc-400 uppercase font-semibold"
            >
              Video Content Creator
            </motion.p>
          </div>
        </div>

        <motion.div
          style={{ opacity: contentOpacity }}
          className="z-20 mt-16 text-center"
        >
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed mb-10 mx-auto">
            Creating AI-powered visual stories for brands, campaigns, and digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MagneticButton href="#work">
              <span className="px-8 py-4 bg-white text-black rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors inline-block">
                View Work
              </span>
            </MagneticButton>
            <MagneticButton href="/contact">
              <span className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-white/5 transition-colors inline-block">
                Let&apos;s Collaborate
              </span>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-xs tracking-widest text-zinc-400 uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-zinc-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
