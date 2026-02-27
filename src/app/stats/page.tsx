"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Briefcase } from "lucide-react";

export default function StatsPage() {
  return (
    <div className="min-h-screen w-full pt-[12vh] px-4 md:px-10 pb-20 z-10 flex flex-col items-center">
      
      <div className="max-w-4xl w-full">
        
        {/* HEADER GLASS PANEL */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-black">
            <Image src="/logo.png" alt="AB Legacy" fill className="object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1e293b] uppercase mb-2">AB LEGACY</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-3">
              <span className="px-4 py-1.5 glass-button text-gray-800 font-bold text-xs uppercase tracking-wider">UI/UX ENGINEER</span>
              <span className="px-4 py-1.5 glass-button text-gray-800 font-bold text-xs uppercase tracking-wider">SYSTEM MODDER</span>
            </div>
            <p className="text-[#475569] font-medium">Computer Science & Design Student at SVIT.</p>
          </div>
        </motion.div>

        {/* STATS GRIDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* SKILLS PANEL */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-8 text-[#1e293b]">
              <Cpu size={24} />
              <h3 className="font-bold text-lg tracking-widest">SKILLS</h3>
            </div>
            <div className="space-y-6 font-bold text-[#1e293b]">
              <div>
                <div className="flex justify-between mb-2 text-sm"><span>UI/UX</span><span>92%</span></div>
                <div className="w-full h-3 glass-button overflow-hidden rounded-full"><div className="h-full bg-[#1e293b] w-[92%] rounded-full" /></div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm"><span>SYSTEM MODDING</span><span>85%</span></div>
                <div className="w-full h-3 glass-button overflow-hidden rounded-full"><div className="h-full bg-[#1e293b] w-[85%] rounded-full" /></div>
              </div>
            </div>
          </motion.div>

          {/* EXPERIENCE PANEL */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-panel p-8">
            <div className="flex items-center gap-4">
               <div className="glass-button p-4 text-[#1e293b]">
                 <Briefcase size={28} />
               </div>
               <div>
                 <h3 className="font-bold text-[#1e293b] text-xl">Freelance UI Designer</h3>
                 <p className="text-[#475569] text-sm font-medium">2024 - PRESENT</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}