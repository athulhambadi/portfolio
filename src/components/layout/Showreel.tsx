"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function Showreel() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isUnmuted, setIsUnmuted] = useState(false);

  const handleMouseEnter = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage('{"method":"play"}', '*');
      iframeRef.current.contentWindow.postMessage(`{"method":"setVolume", "value": ${isUnmuted ? 1 : 0}}`, '*');
      iframeRef.current.contentWindow.postMessage(`{"method":"setMuted", "value": ${!isUnmuted}}`, '*');
    }
  };

  const handleMouseLeave = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage('{"method":"pause"}', '*');
    }
  };

  const toggleMute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const newState = !isUnmuted;
      setIsUnmuted(newState);
      iframeRef.current.contentWindow.postMessage(`{"method":"setVolume", "value": ${newState ? 1 : 0}}`, '*');
      iframeRef.current.contentWindow.postMessage(`{"method":"setMuted", "value": ${!newState}}`, '*');
    }
  };

  return (
    <section className="py-16 md:py-24 w-full">
      <div className="px-4 md:px-8 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl group cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={toggleMute}
        >
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1201715029?title=0&byline=0&portrait=0&controls=0&muted=1"
            className="absolute inset-0 w-full h-full pointer-events-none"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          
          <div className="absolute bottom-6 right-6 z-10 px-4 py-3 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 hover:bg-black/80">
            {isUnmuted ? <Volume2 size={18} /> : <VolumeX size={18} />}
            <span className="text-sm font-medium tracking-wide">{isUnmuted ? "Mute" : "Click for Sound"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

