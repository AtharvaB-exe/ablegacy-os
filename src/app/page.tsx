"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroLock from "../components/IntroLock"; 
import { Terminal, Cpu, MapPin, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [locked, setLocked] = useState(true);

  return (
    // ✨ THEME: Olive & Off-White
    <main className="min-h-screen bg-[#F2F2F2] text-[#666E5D] relative overflow-hidden font-sans">
      
      <AnimatePresence>
        {locked && <IntroLock onUnlock={() => setLocked(false)} />}
      </AnimatePresence>

      <div className="relative z-0 h-screen flex flex-col items-center justify-center p-4">
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#A9AC97_1px,transparent_1px),linear-gradient(to_bottom,#A9AC97_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: locked ? 0 : 1, scale: locked ? 0.9 : 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center max-w-5xl relative z-10 flex flex-col items-center"
        >
          {/* 👇 YOUR PROFILE PHOTO */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8">
            <div className="absolute inset-0 bg-[#A9AC97] rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* IMPORTANT: Make sure your photo is named 'me.jpg' inside the public folder! */}
              <Image 
                src="/me.jpg" 
                alt="Atharva" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* MAIN TITLE */}
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 text-[#666E5D] drop-shadow-sm">
            ATHARVA BULBULE
          </h1>

          {/* 👇 YOUR SPECIFIC INFO */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base font-mono font-bold text-[#888D7A]">
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#D1D1D1] shadow-sm">
              <Cpu size={16} /> CSD STUDENT @ SVIT VASAD
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#D1D1D1] shadow-sm">
              <Zap size={16} /> UI/UX & MODDING
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#D1D1D1] shadow-sm">
              <MapPin size={16} /> GUJARAT, IN
            </span>
          </div>

          <p className="text-xl md:text-2xl text-[#888D7A] max-w-2xl mx-auto mb-12 font-medium">
            Building the bridge between <span className="text-[#666E5D] font-bold">Code</span> and <span className="text-[#666E5D] font-bold">Content</span>.
          </p>

        </motion.div>
      </div>
    </main>
  );
}