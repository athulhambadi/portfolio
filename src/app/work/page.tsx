"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/layout/Contact";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All",
  "AI Videos",
  "Brand Campaigns",
  "Ad Creatives",
  "AI Posters",
  "Motion Visuals",
  "Product Concepts",
  "Educational Campaigns"
];

const projects = [
  {
    id: "education-campaign",
    title: "Education Brand Campaign Visuals",
    category: "Educational Campaigns",
    year: "2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3",
    size: "large"
  },
  {
    id: "fashion-editorial",
    title: "AI Fashion / Editorial Visuals",
    category: "AI Posters",
    year: "2024",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=2834&ixlib=rb-4.0.3",
    size: "tall"
  },
  {
    id: "product-ad",
    title: "AI Product Ad Concepts",
    category: "Ad Creatives",
    year: "2025",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    size: "small"
  },
  {
    id: "wellness-visuals",
    title: "Beauty / Wellness Creative Visuals",
    category: "Brand Campaigns",
    year: "2023",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    size: "wide"
  },
  {
    id: "motion-story",
    title: "Motion-led Brand Storytelling",
    category: "Motion Visuals",
    year: "2024",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2825&ixlib=rb-4.0.3",
    size: "small"
  },
  {
    id: "ai-course",
    title: "AI Course Launch Creatives",
    category: "AI Videos",
    year: "2025",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    size: "small"
  }
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full min-h-screen">
        
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Selected Works</h1>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-white text-black" 
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              // Determine span based on predefined size
              let spanClass = "col-span-1 row-span-1";
              if (project.size === "large") spanClass = "md:col-span-2 row-span-2";
              else if (project.size === "tall") spanClass = "col-span-1 row-span-2";
              else if (project.size === "wide") spanClass = "md:col-span-2 row-span-1";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-zinc-900 ${spanClass}`}
                >
                  <Link href={`/work/${project.id}`} className="block w-full h-full">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <span>{project.category}</span>
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </main>
      <Contact />
    </>
  );
}
