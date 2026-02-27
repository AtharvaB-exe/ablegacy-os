"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full pt-[12vh] px-4 md:px-10 pb-20 overflow-x-hidden z-10 text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER SECTION (Glass Panel) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          // 🧊 NATIVE TAILWIND GLASS
          className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl p-8 md:p-12 rounded-[2rem] mb-12 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Profile Image */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/80 shadow-2xl bg-white/20">
              <Image src="/me.jpg" alt="Atharva Bulbule" fill className="object-cover" />
            </div>
          </div>

          {/* Text Info */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-2 drop-shadow-sm">
              Atharva Bulbule
            </h1>
            {/* Badges (Fixed spacing with inline-block) */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
              <span className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-md border border-white/60 rounded-full font-mono text-xs font-bold shadow-sm">CSD STUDENT</span>
              <span className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-md border border-white/60 rounded-full font-mono text-xs font-bold shadow-sm">FREELANCER</span>
              <span className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-md border border-white/60 rounded-full font-mono text-xs font-bold shadow-sm">SVIT VASAD</span>
            </div>
            <p className="text-xl font-medium max-w-lg text-black/80 font-semibold drop-shadow-sm">
              Passionate Designer & Developer bridging the gap between creative visuals and functional code.
            </p>
          </div>
        </motion.div>

        {/* SKILLS & STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CARD 1 (Glass Panel) */}
          <motion.div className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl p-8 rounded-[2rem]">
            <div className="flex items-center gap-3 mb-6 opacity-80">
              <Cpu size={24} />
              <h3 className="font-bold font-mono tracking-widest">SYSTEM SPECS</h3>
            </div>
            <div className="space-y-4 font-mono text-sm font-bold">
              <div className="flex justify-between items-center">
                <span>UI/UX DESIGN</span>
                <div className="w-32 h-2.5 bg-white/50 border border-white/60 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-black/80 w-[95%]" /></div>
              </div>
              <div className="flex justify-between items-center">
                <span>REACT / NEXT.JS</span>
                <div className="w-32 h-2.5 bg-white/50 border border-white/60 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-black/80 w-[75%]" /></div>
              </div>
              <div className="flex justify-between items-center">
                <span>GRAPHIC DESIGN</span>
                <div className="w-32 h-2.5 bg-white/50 border border-white/60 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-black/80 w-[90%]" /></div>
              </div>
              <div className="flex justify-between items-center">
                <span>GAME MODDING</span>
                <div className="w-32 h-2.5 bg-white/50 border border-white/60 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-black/80 w-[85%]" /></div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 (Glass Panel) */}
          <motion.div className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl p-8 rounded-[2rem]">
            <div className="flex items-center gap-3 mb-6 opacity-80">
              <Zap size={24} />
              <h3 className="font-bold font-mono tracking-widest">CURRENT STATUS</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/60 backdrop-blur-md border border-white/60 shadow-sm rounded-xl">
                <h4 className="font-bold mb-1">🎓 Education</h4>
                <p className="text-sm opacity-80 font-medium">1st Year CSD @ SVIT Vasad</p>
              </div>
              <div className="p-4 bg-white/60 backdrop-blur-md border border-white/60 shadow-sm rounded-xl">
                <h4 className="font-bold mb-1">💼 Freelance</h4>
                <p className="text-sm opacity-80 font-medium">Open for UI/UX & Logo Projects</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}