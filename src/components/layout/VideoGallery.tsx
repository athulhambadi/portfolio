"use client";

import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";

const videoCategories = [
  {
    category: "Tiju's Academy",
    videos: [
      "Tiju's Academy Ad Malayalam.mp4",
      "Tiju's Academy Ad.mp4",
      "Tiju's Ad.mp4",
      "Tiju's Social Media Ad 1.mp4",
      "Tiju's Social Media Ad 2.mp4",
    ]
  },
  {
    category: "Blashk",
    videos: [
      "Blashk Ad 1.mp4",
      "Blashk Ad 2.mp4",
      "Blashk Ad 3.mp4",
      "Blashk Ad 4.mp4",
      "Blashk Ad 5.mp4",
    ]
  },
  {
    category: "Pratham",
    videos: [
      "Pratham Infotech Ad.mp4",
      "Pratham Infotech Happyness Literacy Ad.mp4",
    ]
  },
  {
    category: "Others",
    videos: [
      "Character Consistency Reel.mp4",
      "Higgsfield AI video.mp4",
      "Motion Video.mp4",
      "RMC Distrance Education Ad.mp4",
      "Rapture Therapy Ad.mp4",
    ]
  }
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative cursor-pointer block"
      onClick={togglePlay}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/5">
          <video
            ref={videoRef}
            src={`/Videos/${encodeURIComponent(src)}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loop
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className={`absolute inset-0 bg-zinc-950/40 transition-colors duration-500 ${isPlaying ? 'opacity-0' : 'group-hover:bg-zinc-950/20'}`} />
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
              {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-5 flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
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
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">More Work</h2>
        <p className="text-zinc-400 max-w-xl text-lg font-light">
          A collection of ads, motion graphics, and AI video concepts.
        </p>
      </div>
      
      <div className="space-y-24">
        {videoCategories.map((categoryGroup) => (
          <div key={categoryGroup.category}>
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{categoryGroup.category}</h3>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <div className="flex flex-col gap-16">
              {categoryGroup.videos.map((src, index) => (
                <VideoCard key={src} src={src} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

