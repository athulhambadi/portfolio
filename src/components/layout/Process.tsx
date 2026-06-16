"use client";

import { motion } from "framer-motion";

const steps = [
  "Brief Understanding",
  "Concept Development",
  "Prompt Design",
  "AI Generation",
  "Refinement",
  "Final Delivery"
];

export default function Process() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-24 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Creative Process</h2>
        <p className="text-zinc-400 max-w-2xl font-light">A structured, high-end pipeline bridging raw creative vision with advanced generative AI execution.</p>
      </motion.div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 hidden lg:block" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-all duration-500 relative z-10">
                <span className="text-zinc-500 font-mono text-sm group-hover:text-black transition-colors">{`0${index + 1}`}</span>
              </div>
              <h4 className="text-lg font-semibold text-zinc-300 group-hover:text-white transition-colors">{step}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
