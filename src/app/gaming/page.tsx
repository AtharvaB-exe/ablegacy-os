"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, Zap, Upload } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const clips = [
  { id: 1, title: "INSERT REEL", game: "UPLOADED", views: "---", color: "border-[#FF9551]", height: "h-96", src: "" },
];

export default function GamingPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkAdmin = () => setIsAdmin(localStorage.getItem("xab_admin") === "true");
    checkAdmin(); 
    window.addEventListener("adminChange", checkAdmin); 
    return () => window.removeEventListener("adminChange", checkAdmin);
  }, []);

  return (
    // ✨ THEME: White Bg, Dark Navy Text
    <div className="min-h-screen bg-[#F5F6FA] text-[#222F3E] pt-24 pb-32 px-4 md:px-8">
      
      <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => alert(`Selected: ${e.target.files?.[0]?.name}`)} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b-2 border-[#B2BEC3] pb-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2">NEXUS</h1>
            <p className="font-mono text-[#FF9551] flex items-center gap-2 font-bold">
              <span className="w-2 h-2 bg-[#FF9551] rounded-full animate-pulse"/>
              LIVE FEED // RECORDING
            </p>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {isAdmin && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => fileInputRef.current?.click()}
                className="break-inside-avoid relative rounded-xl border-2 border-dashed border-[#FF9551] cursor-pointer h-64 flex flex-col items-center justify-center hover:bg-[#FF9551]/10"
              >
                <Upload size={32} className="text-[#FF9551]" />
                <h3 className="font-bold text-xl text-[#FF9551] mt-2">Upload Clip</h3>
              </motion.div>
            )}
          </AnimatePresence>

          {clips.map((clip, index) => (
            <motion.div
              key={clip.id}
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group break-inside-avoid rounded-xl overflow-hidden bg-white border-2 ${clip.color} shadow-lg`}
            >
              <div className={`${clip.height} w-full bg-[#222F3E] flex items-center justify-center relative`}>
                <p className="text-[#B2BEC3] font-bold">NO SIGNAL</p>
              </div>
              <div className="p-4 bg-white border-t border-gray-100">
                <h3 className="text-xl font-bold uppercase italic tracking-wider flex items-center gap-2 text-[#222F3E]">
                  {clip.title} <Zap size={16} className="text-[#FF9551]" fill="currentColor" />
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}