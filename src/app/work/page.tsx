"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, X, Upload, Check, Lock } from "lucide-react";
import { useState } from "react";

const projects = [
  { id: 1, title: "AB Legacy Identity", category: "BRANDING", description: "Personal Brand & Logo Design.", src: "/logo.png", colSpan: "md:col-span-2" },
  { id: 2, title: "Pink Aura", category: "UI DESIGN", description: "Fashion App Interface.", src: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=688&auto=format&fit=crop", colSpan: "md:col-span-1" },
  { id: 3, title: "Cyber HUD", category: "GAME MOD", description: "Sci-fi inventory system.", src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop", colSpan: "md:col-span-1" },
  { id: 4, title: "Zenith Vector", category: "ILLUSTRATION", description: "Minimalist vector art.", src: "https://images.unsplash.com/photo-1626785774573-4b7993143a2d?q=80&w=1470&auto=format&fit=crop", colSpan: "md:col-span-2" },
];

export default function WorkPage() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Athu8828") { setIsAuthenticated(true); setPassword(""); } 
    else { alert("Wrong Password"); }
  };

  const handleUpload = () => {
    setStatus("uploading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => { setShowAdmin(false); setStatus("idle"); setIsAuthenticated(false); }, 1500);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full pt-[10vh] px-4 md:px-10 pb-32 z-10 text-[#1e293b]">
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2">PROTOCOLS</h1>
        <p className="font-mono text-sm tracking-widest text-[#475569]">Loading Design Schematics...</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className={`${project.colSpan} glass-panel h-[300px] md:h-[400px] relative group overflow-hidden cursor-pointer`}
          >
            <img src={project.src} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent" />
            
            <div className="flex justify-between items-start relative z-10 p-8">
              <span className="glass-button px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1e293b]">{project.category}</span>
              <div className="glass-button p-3 text-[#1e293b]"><ArrowUpRight size={20} /></div>
            </div>

            <div className="absolute bottom-8 left-8 z-10 text-[#1e293b]">
              <h2 className="text-3xl font-black mb-1">{project.title}</h2>
              <p className="font-medium text-[#475569]">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowAdmin(true)} className="fixed bottom-24 right-6 md:right-10 z-30 glass-button p-4 text-[#1e293b]">
        <Plus size={28} />
      </motion.button>

      <AnimatePresence>
        {showAdmin && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="glass-panel w-full max-w-md p-8 relative">
              <button onClick={() => setShowAdmin(false)} className="absolute top-4 right-4 text-[#475569] hover:text-[#1e293b]"><X size={24} /></button>

              {!isAuthenticated ? (
                <div className="text-center">
                  <div className="w-16 h-16 glass-button flex items-center justify-center mx-auto mb-4 text-[#1e293b]"><Lock size={32} /></div>
                  <h2 className="text-2xl font-black text-[#1e293b] mb-2">ADMIN PROTOCOL</h2>
                  <form onSubmit={handleLogin} className="flex gap-2 mt-6">
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="flex-1 glass-button px-4 py-3 outline-none focus:bg