"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "tijus-academy",
    title: "Tiju's Academy",
    category: "Performance Marketing",
    summary: "High-converting meta ad creatives and banners for Tiju's Academy.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3",
  },
  {
    id: "fashion-editorial",
    title: "AI Fashion / Editorial Visuals",
    category: "AI Posters",
    summary: "Cinematic, high-fashion generated stills exploring Indian ethnic wear.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=2834&ixlib=rb-4.0.3",
  },
  {
    id: "product-ad",
    title: "AI Product Ad Concepts",
    category: "Ad Creatives",
    summary: "Concept-driven product advertising using generative AI pipelines.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
  },
  {
    id: "wellness-visuals",
    title: "Beauty / Wellness Creative Visuals",
    category: "Brand Campaigns",
    summary: "Serene and premium visuals for a luxury Ayurvedic wellness brand.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Projects</h2>
        <div className="h-px w-full bg-zinc-800" />
      </motion.div>

      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative cursor-pointer"
          >
            <Link href={`/work/${project.id}`} className="block">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-white/5">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-zinc-400 text-sm font-medium tracking-widest uppercase">
                    <span>{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-600" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
                    {project.summary}
                  </p>
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest group-hover:text-accent transition-colors duration-300">
                    View Project 
                    <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-300">
                      <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-24 flex justify-center"
      >
        <Link href="/work" className="px-8 py-4 border border-zinc-700 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
          View All Projects
        </Link>
      </motion.div>
    </section>
  );
}
