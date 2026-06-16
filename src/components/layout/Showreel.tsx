"use client";

import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";

export default function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured AI Showreel</h2>
          <p className="text-zinc-400 max-w-xl text-lg font-light">
            AI videos, campaign concepts, visual storytelling, and motion-driven brand content.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900 group cursor-pointer border border-white/5"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src="/Videos/Let's%20Create%20Videos.mp4"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          loop
          muted
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        <div className={`absolute inset-0 bg-zinc-950/40 transition-colors duration-500 ${isPlaying ? 'opacity-0' : 'group-hover:bg-zinc-950/20'}`} />
        
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
            {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-2" />}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

