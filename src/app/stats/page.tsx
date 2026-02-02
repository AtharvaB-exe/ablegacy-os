"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Cpu, MapPin, Globe, User } from "lucide-react";
import Image from "next/image";

export default function StatsPage() {
  return (
    // ✨ THEME: Cream Background, Slate Text
    <div className="min-h-screen pt-24 pb-32 px-4 md:px-8 max-w-6xl mx-auto text-[#2C3446] bg-[#F2EED6] font-sans">
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 border-b-2 border-[#D9D1BA] pb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-[#9FAAB7]">
              <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" alt="Profile" width={160} height={160} className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">AB LEGACY</h1>
            <div className="flex flex-wrap gap-4 text-sm md:text-base font-mono font-bold text-[#2C3446] mb-4">
              <span className="px-3 py-1 bg-[#D9D1BA]/50 rounded-lg">UI/UX ENGINEER</span>
              <span className="px-3 py-1 bg-[#D9D1BA]/50 rounded-lg">SYSTEM MODDER</span>
            </div>
            <p className="max-w-2xl text-[#9FAAB7] leading-relaxed font-bold">Computer Science & Design Student at SVIT.</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-2xl bg-[#D9D1BA]/30 border border-[#D9D1BA]">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Cpu size={20} /> SKILLS</h2>
            <div className="space-y-4 font-mono text-sm font-bold">
              <div>
                <div className="flex justify-between mb-1"><span>UI/UX</span><span>92%</span></div>
                <div className="h-2 bg-white rounded-full overflow-hidden"><div className="h-full w-[92%] bg-[#2C3446]" /></div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-2xl bg-white border border-[#D9D1BA] shadow-sm flex items-start gap-4">
             <Briefcase className="text-[#2C3446]" />
             <div>
               <h3 className="text-xl font-bold">Freelance UI Designer</h3>
               <p className="text-[#9FAAB7] font-mono text-sm">2024 - PRESENT</p>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}