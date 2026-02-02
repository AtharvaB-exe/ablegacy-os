"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Upload, ScanLine } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

// ✨ THEME COLORS APPLIED TO CARDS
const initialProjects = [
  { id: 1, title: "Neon Banking", category: "App Design", size: "col-span-1 md:col-span-2 row-span-2", color: "bg-[#2F667F]", textColor: "text-[#F2F2D5]", desc: "Fintech dashboard redesign." },
  { id: 2, title: "Pink Aura", category: "Branding", size: "col-span-1 row-span-1", color: "bg-[#5C9EAD]", textColor: "text-[#0C2C55]", desc: "Identity for a fashion brand." },
  { id: 3, title: "Cyber HUD", category: "Game UI", size: "col-span-1 row-span-1", color: "bg-[#0C2C55]", textColor: "text-[#F2F2D5]", desc: "Sci-fi inventory system." },
  { id: 4, title: "Zenith Web", category: "Web Design", size: "col-span-1 md:col-span-2 row-span-1", color: "bg-[#F2F2D5]", textColor: "text-[#0C2C55]", desc: "Minimalist architecture portfolio." },
];

export default function WorkPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showWireframe, setShowWireframe] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowWireframe(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkAdmin = () => {
      setIsAdmin(localStorage.getItem("xab_admin") === "true");
    };
    checkAdmin();
    window.addEventListener("adminChange", checkAdmin); 
    return () => window.removeEventListener("adminChange", checkAdmin);
  }, []);

  return (
    // ✨ THEME: Cream Background, Navy Text
    <div className="min-h-screen pt-24 pb-32 px-4 md:px-12 max-w-7xl mx-auto relative bg-[#F2F2D5] text-[#0C2C55]">
      
      <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => alert(`Selected: ${e.target.files?.[0]?.name}`)} />

      <div className="mb-12 flex justify-between items-end border-b-2 border-[#5C9EAD]/30 pb-6">
        <div>
          <h1 className="text-5xl font-black mb-4 tracking-tighter">PROTOCOLS</h1>
          <p className="text-xl font-medium text-[#2F667F] font-mono">Loading Design Schematics...</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
        <AnimatePresence>
          {isAdmin && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => fileInputRef.current?.click()}
              className="col-span-1 row-span-1 rounded-3xl border-2 border-dashed border-[#0C2C55] bg-transparent flex flex-col items-center justify-center cursor-pointer hover:bg-[#5C9EAD]/10"
            >
              <Upload size={24} />
              <h3 className="font-bold text-lg mt-2">Upload Project</h3>
            </motion.div>
          )}
        </AnimatePresence>

        {initialProjects.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: showWireframe ? 1 : 0 }} 
            className={`relative group rounded-3xl p-8 cursor-pointer overflow-hidden shadow-lg ${item.size} ${item.color} ${item.textColor}`}
          >
            {showWireframe && (
              <div className="absolute inset-0 bg-[#F2F2D5] z-50 flex items-center justify-center border border-[#0C2C55]">
                <ScanLine className="text-[#0C2C55] animate-ping" size={40} />
              </div>
            )}
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase">{item.category}</div>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="text-3xl font-black leading-none mb-2">{item.title}</h3>
                <p className="opacity-80 font-medium">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}