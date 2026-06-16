"use client";

import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/layout/Contact";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

// Placeholder data for dynamic route
const projectData = {
  title: "Tiju’s Academy",
  category: "AI Content Creation & Performance Marketing",
  year: "2024–2026",
  role: "Creative Strategist/AI Content Creator",
  tools: [
    "Midjourney", "ChatGPT", "Claude", "Veo3", "Seedance", 
    "Runway", "Canva", "After Effects", "Premiere Pro"
  ],
  heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3",
  challenge: "Tiju’s Academy needed high-volume creative content for multiple education campaigns, including IELTS, OET, PTE, German, NCLEX-RN, Prometric, Digital Marketing, English Fluency, and recruitment campaigns. The brand required fast, culturally relatable, conversion-focused visuals and video assets while maintaining a professional academic identity across different platforms.",
  approach: "Built an AI-assisted creative workflow for performance marketing, academic content, website visuals, and social media campaigns. The approach combined Indian ethnic visuals, student-focused storytelling, modern education branding, and fast-paced AI video production. Using structured prompt development, generative image workflows, ad copy planning, and visual direction, I created consistent campaign assets for Meta ads, website revamps, course promotions, hiring posters, and live class presentations.",
  outcome: "Delivered 100+ campaign creatives, 60+ website visuals, multiple academic PPT decks, AI video concepts, and structured Meta ad content sheets for Tiju’s Academy. The workflow improved creative production speed, supported performance marketing campaigns, and helped maintain consistent branding across education, recruitment, and promotional content.",
  frames: [
    "Meta Ad Creatives",
    "AI-Generated Website Visuals",
    "Course Campaign Posters",
    "Academic PPT Slides",
    "AI Video Ad Frames"
  ],
  gallery: [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2932&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
  ]
};

export default function ProjectDetail() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] min-h-[600px] bg-zinc-900 mt-20">
          <Image 
            src={projectData.heroImage} 
            alt={projectData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto left-1/2 -translate-x-1/2">
            <Link href="/work" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 text-sm uppercase tracking-widest font-semibold">
              <ArrowLeft size={16} /> Back to Work
            </Link>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
              {projectData.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium tracking-widest uppercase text-accent">
              <span>{projectData.category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-zinc-300">{projectData.year}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-zinc-300">{projectData.role}</span>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            
            {/* Left Col - Overview */}
            <div className="md:col-span-4 space-y-12">
              <div>
                <h3 className="text-sm text-zinc-500 uppercase tracking-widest font-semibold mb-4 border-b border-zinc-800 pb-2">Role</h3>
                <p className="text-white text-lg">{projectData.role}</p>
              </div>
              <div>
                <h3 className="text-sm text-zinc-500 uppercase tracking-widest font-semibold mb-4 border-b border-zinc-800 pb-2">Tools Used</h3>
                <ul className="flex flex-wrap gap-2">
                  {projectData.tools.map(tool => (
                    <li key={tool} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Col - Content */}
            <div className="md:col-span-8 space-y-16">
              <section>
                <h2 className="text-3xl font-bold mb-6 tracking-tight">The Challenge</h2>
                <p className="text-xl text-zinc-400 leading-relaxed font-light">{projectData.challenge}</p>
              </section>
              
              <section>
                <h2 className="text-3xl font-bold mb-6 tracking-tight">Concept & Approach</h2>
                <p className="text-xl text-zinc-400 leading-relaxed font-light">{projectData.approach}</p>
              </section>
            </div>
          </div>
        </div>

        {/* Visual Gallery */}
        <div className="w-full bg-zinc-900/30 py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
            <h2 className="text-3xl font-bold tracking-tight">Selected Frames</h2>
            {projectData.gallery.map((img, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">{projectData.frames[idx] || `Frame ${idx + 1}`}</h3>
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
                  <Image src={img} alt={projectData.frames[idx] || `Gallery Image ${idx + 1}`} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome & Next Project */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 w-full text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-8">The Outcome</h2>
          <p className="text-2xl text-zinc-400 leading-relaxed font-light max-w-4xl mx-auto mb-32">
            {projectData.outcome}
          </p>

          <Link href="/work/ai-fashion-visuals" className="group inline-flex flex-col items-center gap-4">
            <span className="text-sm text-zinc-500 uppercase tracking-widest font-semibold">Next Project</span>
            <span className="text-5xl md:text-7xl font-bold tracking-tighter text-white group-hover:text-accent transition-colors duration-500">
              AI Fashion Visuals
            </span>
            <div className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center mt-6 group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-500">
              <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </Link>
        </div>

      </main>
      <Contact />
    </>
  );
}
