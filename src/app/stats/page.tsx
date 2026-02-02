"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Zap } from "lucide-react";

export default function StatsPage() {
  return (
    // 🛠️ FIX: Full screen width & height to prevent black cutouts
    <div className="min-h-screen w-full bg-[#F2F2F2] text-[#666E5D] pt-[12vh] px-4 md:px-10 pb-20 overflow-x-hidden">
      
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
        >
          {/* 📸 PROFILE PIC: Changed to 'logo.png' (The Cracked Wall Logo) */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
            <div className="absolute inset-0 bg-[#A9AC97] rounded-full blur-2xl opacity-40" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-black">
              {/* 👇 THIS IS THE CHANGE: Using your Logo */}
              <Image src="/logo.png" alt="AB Legacy" fill className="object-cover" />
            </div>
          </div>

          {/* TEXT INFO */}
          <div className="text-center md:text-left">
            {/* 👇 THIS IS THE CHANGE: Text is 'AB LEGACY' */}
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#666E5D] uppercase mb-2">
              AB LEGACY
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
              <span className="px-3 py-1 bg-[#D1D1D1] text-[#666E5D] rounded-md font-mono text-xs font-bold">UI/UX ENGINEER</span>
              <span className="px-3 py-1 bg-[#D1D1D1] text-[#666E5D] rounded-md font-mono text-xs font-bold">SYSTEM MODDER</span>
              <span className="px-3 py-1 bg-[#D1D1D1] text-[#666E5D] rounded-md font-mono text-xs font-bold">SVIT VASAD</span>
            </div>
            <p className="text-xl text-[#888D7A] font-medium max-w-lg">
              Computer Science & Design Student. Crafting digital experiences and custom environments.
            </p>
          </div>
        </motion.div>

        {/* 📊 SKILLS & STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CARD 1: SKILLS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#E6E6E6] p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-6 opacity-60">
              <Cpu size={24} />
              <h3 className="font-bold font-mono tracking-widest">SYSTEM SPECS</h3>
            </div>
            
            <div className="space-y-4 font-mono text-sm font-bold text-[#666E5D]">
              <div className="flex justify-between items-center">
                <span>UI/UX DESIGN</span>
                <div className="w-32 h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#666E5D] w-[92%]" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>GRAPHIC ART</span>
                <div className="w-32 h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#666E5D] w-[90%]" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>MODDING</span>
                <div className="w-32 h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#666E5D] w-[85%]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: STATUS */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.1 }}
             className="bg-white p-8 rounded-3xl border-2 border-[#E6E6E6]"
          >
            <div className="flex items-center gap-3 mb-6 opacity-60">
              <Zap size={24} />
              <h3 className="font-bold font-mono tracking-widest">CURRENT STATUS</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-[#F9F9F9] rounded-xl border border-[#EEEEEE]">
                <h4 className="font-bold text-[#666E5D] mb-1">💼 Freelance</h4>
                <p className="text-sm text-[#888D7A]">Open for UI/UX Projects</p>
              </div>
              <div className="p-4 bg-[#F9F9F9] rounded-xl border border-[#EEEEEE]">
                <h4 className="font-bold text-[#666E5D] mb-1">🎓 Academic</h4>
                <p className="text-sm text-[#888D7A]">1st Year CSD @ SVIT</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}