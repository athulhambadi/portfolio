"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  return (
    <footer id="contact" className="relative bg-zinc-950 pt-32 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -bottom-1/2 left-1/4 w-[1000px] h-[1000px] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-32"
        >
          <p className="text-zinc-500 tracking-widest uppercase mb-4 text-sm font-medium">Ready to start?</p>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-12 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-zinc-500 transition-all duration-500 cursor-default max-w-4xl leading-[1.1]">
            Let&apos;s Build Visual Stories That Move People
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <MagneticButton href="/contact">
              <span className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-zinc-200 transition-colors inline-block">
                Start a Project
              </span>
            </MagneticButton>
            <MagneticButton href="mailto:athulhambadi@gmail.com">
              <span className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-colors inline-block">
                Contact Athul
              </span>
            </MagneticButton>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Athul H Ambadi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Instagram</a>
            <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
