"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, X, Upload, Check, Lock } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AB Legacy Identity",
    category: "BRANDING",
    description: "Personal Brand & Logo Design.",
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
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // idle, uploading, success

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") {
      setIsAuthenticated(true);
      setPassword("");
    } else {
      alert("Wrong Password");
    }
  };

  const handleUpload = () => {
    setStatus("uploading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setShowAdmin(false);
        setStatus("idle");
        setIsAuthenticated(false);
      }, 1500);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-[#FDF8E2] text-[#33658A] pt-[10vh] px-4 md:px-10 pb-32">
      
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
            className={`${project.colSpan} ${project.color} h-[300px] md:h-[400px] rounded-3xl relative group overflow-hidden cursor-pointer shadow-xl`}
          >
            <img 
              src={project.src} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
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

      {/* 🟢 FLOATING UPLOAD BUTTON */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowAdmin(true)}
        className="fixed bottom-24 right-6 md:right-10 z-30 bg-[#33658A] text-white p-4 rounded-full shadow-2xl border-4 border-[#FDF8E2]"
      >
        <Plus size={24} />
      </motion.button>

      {/* 🔐 ADMIN MODAL */}
      <AnimatePresence>
        {showAdmin && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-3xl p-8 relative shadow-2xl"
            >
              <button 
                onClick={() => setShowAdmin(false)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-black"
              >
                <X size={24} />
              </button>

              {!isAuthenticated ? (
                // PASSWORD SCREEN
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#33658A]">
                    <Lock size={32} />
                  </div>
                  <h2 className="text-2xl font-black text-[#33658A] mb-2">ADMIN PROTOCOL</h2>
                  <p className="text-gray-500 mb-6 text-sm">Enter security clearance code.</p>
                  <form onSubmit={handleLogin} className="flex gap-2">
                    <input 
                      type="password" 
                      placeholder="Pass: admin"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex-1 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#33658A]"
                    />
                    <button type="submit" className="bg-[#33658A] text-white px-4 rounded-xl font-bold">
                      Enter
                    </button>
                  </form>
                </div>
              ) : (
                // UPLOAD SCREEN
                <div className="text-center">
                  <h2 className="text-2xl font-black text-[#33658A] mb-6">UPLOAD PROJECT</h2>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 mb-6 cursor-pointer hover:bg-gray-50 hover:border-[#33658A] transition-colors group">
                    {status === "idle" && (
                      <div className="flex flex-col items-center text-gray-400 group-hover:text-[#33658A]">
                        <Upload size={48} className="mb-2" />
                        <span className="font-bold">Click to Select File</span>
                      </div>
                    )}
                    {status === "uploading" && <span className="font-bold text-[#33658A] animate-pulse">Uploading Data...</span>}
                    {status === "success" && (
                      <div className="flex flex-col items-center text-green-500">
                        <Check size={48} className="mb-2" />
                        <span className="font-bold">Upload Complete!</span>
                      </div>
                    )}
                  </div>

                  {status === "idle" && (
                    <button 
                      onClick={handleUpload}
                      className="w-full bg-[#33658A] text-white py-4 rounded-xl font-bold hover:bg-[#254b66] transition-colors"
                    >
                      Confirm Upload
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}