"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroLock from "../components/IntroLock"; 
import { Cpu, MapPin, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [locked, setLocked] = useState(true);

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#666E5D] relative overflow-hidden font-sans">
      
      <AnimatePresence>
        {locked && <IntroLock onUnlock={() => setLocked(false)} />}
      </AnimatePresence>

      <div className="relative z-0 h-screen flex flex-col items-center justify-center p-4">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#A9AC97_1px,transparent_1px),linear-gradient(to_bottom,#A9AC97_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: locked ? 0 : 1, scale: locked ? 0.9 : 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center max-w-5xl relative z-10 flex flex-col items-center"
        >
          {/* 📸 PROFILE PHOTO: Set to 'me.jpg' (Boy on Beach) */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8">
            <div className="absolute inset-0 bg-[#A9AC97] rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image src="/me.jpg" alt="Atharva" fill className="object-cover" priority />
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-[#666E5D] uppercase text-center leading-tight">
            Atharva Bulbule
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs md:text-sm font-mono font-bold text-[#888D7A]">
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#D1D1D1] shadow-sm">
              <Cpu size={14} /> CSD STUDENT
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#D1D1D1] shadow-sm">
              <Zap size={14} /> UI/UX & GAMING
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#D1D1D1] shadow-sm">
              <MapPin size={14} /> VADODARA
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}