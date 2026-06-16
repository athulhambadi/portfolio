"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI Video Creation",
    description: "Cinematic, generative AI video production tailored for brand campaigns and digital storytelling.",
  },
  {
    title: "Prompt Engineering",
    description: "Advanced prompt design to coax high-fidelity, highly specific visuals from AI models.",
  },
  {
    title: "Motion Visual Storytelling",
    description: "Blending generated imagery with motion graphics to create dynamic, moving narratives.",
  },
  {
    title: "AI Poster & Ad Creatives",
    description: "High-impact, conversion-focused poster and ad creative generation for social media and marketing.",
  },
  {
    title: "Brand Content Strategy",
    description: "Developing scalable, AI-driven content systems that align perfectly with your brand identity.",
  },
  {
    title: "Visual Concept Development",
    description: "Ideation, storyboarding, and conceptualization using rapid AI visualization tools.",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-24"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Capabilities</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-accent hover:bg-zinc-900 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-colors duration-500">
              <span className="text-zinc-500 group-hover:text-black font-mono text-sm">0{index + 1}</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-accent transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed font-light">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
