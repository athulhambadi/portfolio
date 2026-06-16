"use client";

import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";

const videos = [
  "Blashk Ad 1.mp4",
  "Blashk Ad 2.mp4",
  "Blashk Ad 3.mp4",
  "Blashk Ad 4.mp4",
  "Blashk Ad 5.mp4",
  "Character Consistency Reel.mp4",
  "Higgsfield AI video.mp4",
  "Motion Video.mp4",
  "Pratham Infotech Ad.mp4",
  "Pratham Infotech Happyness Literacy Ad.mp4",
  "RMC Distrance Education Ad.mp4",
  "Rapture Therapy Ad.mp4",
  "Tiju's Academy Ad Malayalam.mp4",
  "Tiju's Academy Ad.mp4",
  "Tiju's Ad.mp4",
  "Tiju's Social Media Ad 1.mp4",
  "Tiju's Social Media Ad 2.mp4",
];

const VideoCard = ({ src, index }: { src: string; index: number }) => {
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

  // Extract a readable title from the filename
  const title = src.replace('.mp4', '').replace(/%20/g, ' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 group cursor-pointer border border-white/5"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={`/Videos/${encodeURIComponent(src)}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        loop
        muted
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      <div className={`absolute inset-0 bg-zinc-950/60 transition-colors duration-500 ${isPlaying ? 'opacity-0' : 'group-hover:bg-zinc-950/40'}`} />
      
      <div className={`absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <div className="self-end w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </div>
        <div>
          <h3 className="text-white font-medium truncate drop-shadow-md text-sm md:text-base group-hover:text-zinc-200 transition-colors">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default function VideoGallery() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">More Work</h2>
        <p className="text-zinc-400 max-w-xl text-lg font-light">
          A collection of ads, motion graphics, and AI video concepts.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((src, index) => (
          <VideoCard key={src} src={src} index={index} />
        ))}
      </div>
    </section>
  );
}
