"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Placeholders for your future projects
const projects = [
  {
    id: 1,
    title: "Neon Banking",
    category: "APP DESIGN",
    description: "Fintech dashboard redesign.",
    color: "bg-[#33658A]", // Blue
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    title: "Pink Aura",
    category: "BRANDING",
    description: "Identity for a fashion brand.",
    color: "bg-[#558C8C]", // Teal
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "Cyber HUD",
    category: "GAME UI",
    description: "Sci-fi inventory system.",
    color: "bg-[#0C2C55]", // Navy
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    title: "Zenith Logo",
    category: "VECTOR",
    description: "Minimalist logo mark.",
    color: "bg-[#2F4858]", // Dark Grey
    colSpan: "md:col-span-2",
  },
];

export default function WorkPage() {
  return (
    // 🛠️ FIX APPLIED: min-h-screen + pt-[10vh]
    // This forces the background to be full-height, removing any black cutouts.
    <div className="min-h-screen bg-[#FDF8E2] text-[#33658A] pt-[10vh] px-4 md:px-10 pb-20">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2">PROTOCOLS</h1>
        <p className="text-[#558C8C] font-mono text-sm tracking-widest">Loading Design Schematics...</p>
        <div className="h-px w-full bg-[#558C8C] opacity-30 mt-6" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${project.colSpan} ${project.color} h-[300px] md:h-[400px] rounded-3xl p-8 relative group overflow-hidden text-[#FDF8E2] cursor-pointer`}
          >
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            
            <div className="flex justify-between items-start relative z-10">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="absolute bottom-8 left-8 z-10">
              <h2 className="text-3xl font-black mb-1">{project.title}</h2>
              <p className="opacity-80 font-medium">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}