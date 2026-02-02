"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AB Legacy Identity",
    category: "BRANDING",
    description: "Personal Brand & Logo Design.",
    // 👇 THIS USES YOUR LOGO IMAGE
    src: "/logo.png", 
    color: "bg-[#0C2C55]", 
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    title: "Pink Aura",
    category: "UI DESIGN",
    description: "Fashion App Interface.",
    src: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=688&auto=format&fit=crop",
    color: "bg-[#558C8C]", 
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "Cyber HUD",
    category: "GAME MOD",
    description: "Sci-fi inventory system.",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop",
    color: "bg-[#33658A]", 
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    title: "Zenith Vector",
    category: "ILLUSTRATION",
    description: "Minimalist vector art.",
    src: "https://images.unsplash.com/photo-1626785774573-4b7993143a2d?q=80&w=1470&auto=format&fit=crop",
    color: "bg-[#2F4858]", 
    colSpan: "md:col-span-2",
  },
];

export default function WorkPage() {
  return (
    // 🛠️ FIX: min-h-screen + w-full (Removes black bars completely)
    <div className="min-h-screen w-full bg-[#FDF8E2] text-[#33658A] pt-[10vh] px-4 md:px-10 pb-20">
      
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
            className={`${project.colSpan} ${project.color} h-[300px] md:h-[400px] rounded-3xl relative group overflow-hidden cursor-pointer`}
          >
            {/* Background Image (Your Logo or Unsplash) */}
            <img 
              src={project.src} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="flex justify-between items-start relative z-10 p-8">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                {project.category}
              </span>
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-md text-white border border-white/20">
                <ArrowUpRight size={20} />
              </div>
            </div>

            <div className="absolute bottom-8 left-8 z-10 text-white">
              <h2 className="text-3xl font-black mb-1 drop-shadow-lg">{project.title}</h2>
              <p className="opacity-90 font-medium drop-shadow-md">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}