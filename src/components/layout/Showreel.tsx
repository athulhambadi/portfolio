"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Showreel() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleMouseEnter = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage('{"method":"play"}', '*');
    }
  };

  const handleMouseLeave = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage('{"method":"pause"}', '*');
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
          className="relative aspect-video w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1201715029?title=0&byline=0&portrait=0&controls=0"
            className="absolute inset-0 w-full h-full pointer-events-none"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}

