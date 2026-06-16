"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Cinematic visuals. <br />
            <span className="text-zinc-500">AI-powered storytelling.</span>
          </h2>
          
          <p className="text-lg text-zinc-400 leading-relaxed font-light">
            Athul H Ambadi is a generative AI specialist and AI video content creator with experience across brand storytelling, digital campaigns, AI-generated visuals, and creative strategy. 
          </p>

          <p className="text-lg text-zinc-400 leading-relaxed font-light">
            His work combines cinematic prompt engineering, motion-driven content creation, and strong brand communication to produce impactful visual experiences.
          </p>

          <div className="pt-4">
            <MagneticButton href="/about">
              <span className="px-8 py-4 border border-zinc-700 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors inline-block">
                More About Athul
              </span>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10"
        >
          <Image 
            src="/profile.jpeg" 
            alt="Athul H Ambadi"
            fill
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-zinc-950/20 mix-blend-overlay" />
        </motion.div>
      </div>
    </section>
  );
}
