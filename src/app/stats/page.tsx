"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Cpu, Zap, Plus, X, Lock, Upload, Check } from "lucide-react";
import { useState } from "react";

export default function StatsPage() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Athu8828") { setIsAuthenticated(true); setPassword(""); } 
    else { alert("Access Denied"); }
  };

  const handleUpload = () => {
    setStatus("uploading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => { setShowAdmin(false); setStatus("idle"); setIsAuthenticated(false); }, 1500);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full pt-[12vh] px-4 md:px-10 pb-20 overflow-x-hidden z-10 text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER SECTION */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-8 mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-black">
              <Image src="/logo.png" alt="AB Legacy" fill className="object-cover" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-2">AB LEGACY</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
              <span className="px-3 py-1 glass-button rounded-md font-mono text-xs font-bold">UI/UX ENGINEER</span>
              <span className="px-3 py-1 glass-button rounded-md font-mono text-xs font-bold">SYSTEM MODDER</span>
              <span className="px-3 py-1 glass-button rounded-md font-mono text-xs font-bold">SVIT VASAD</span>
            </div>
            <p className="text-xl font-medium max-w-lg opacity-80">Computer Science & Design Student. Crafting digital experiences.</p>
          </div>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-6 opacity-60"><Cpu size={24} /><h3 className="font-bold font-mono tracking-widest">SYSTEM SPECS</h3></div>
            <div className="space-y-4 font-mono text-sm font-bold">
              <div className="flex justify-between items-center"><span>UI/UX DESIGN</span><div className="w-32 h-2 glass-button overflow-hidden"><div className="h-full bg-black w-[92%]" /></div></div>
              <div className="flex justify-between items-center"><span>GRAPHIC ART</span><div className="w-32 h-2 glass-button overflow-hidden"><div className="h-full bg-black w-[90%]" /></div></div>
              <div className="flex justify-between items-center"><span>MODDING</span><div className="w-32 h-2 glass-button overflow-hidden"><div className="h-full bg-black w-[85%]" /></div></div>
            </div>
          </motion.div>
          <motion.div className="glass-panel p-8">
            <div className="flex items-center gap-3 mb-6 opacity-60"><Zap size={24} /><h3 className="font-bold font-mono tracking-widest">CURRENT STATUS</h3></div>
            <div className="space-y-4">
              <div className="p-4 glass-button"><h4 className="font-bold mb-1">💼 Freelance</h4><p className="text-sm opacity-80">Open for UI/UX Projects</p></div>
              <div className="p-4 glass-button"><h4 className="font-bold mb-1">🎓 Academic</h4><p className="text-sm opacity-80">1st Year CSD @ SVIT</p></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowAdmin(true)} className="fixed bottom-24 right-6 md:right-10 z-30 glass-button p-4 text-black">
        <Plus size={24} />
      </motion.button>

      {/* ADMIN PANEL OVERLAY */}
      <AnimatePresence>
        {showAdmin && (
          <div className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="glass-panel w-full max-w-md p-8 relative">
              <button onClick={() => setShowAdmin(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black"><X size={24} /></button>
              {!isAuthenticated ? (
                <div className="text-center">
                  <div className="w-16 h-16 glass-button flex items-center justify-center mx-auto mb-4 text-black"><Lock size={32} /></div>
                  <h2 className="text-2xl font-black mb-2">AB LEGACY ADMIN</h2>
                  <form onSubmit={handleLogin} className="flex gap-2 mt-6">
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="flex-1 glass-button px-4 py-3 outline-none focus:bg-white/60" />
                    <button type="submit" className="glass-button px-4 font-bold">Enter</button>
                  </form>
                </div>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-black mb-6">EDIT PROFILE</h2>
                  <div className="glass-button border-dashed p-8 mb-6 cursor-pointer group">
                    {status === "idle" && <div className="flex flex-col items-center"><Upload size={48} className="mb-2 opacity-60 group-hover:opacity-100" /><span className="font-bold">Update Data</span></div>}
                    {status === "uploading" && <span className="font-bold animate-pulse">Updating...</span>}
                    {status === "success" && <div className="flex flex-col items-center text-green-600"><Check size={48} className="mb-2" /><span className="font-bold">Updated!</span></div>}
                  </div>
                  {status === "idle" && <button onClick={handleUpload} className="w-full glass-button py-4 font-bold hover:bg-white/80">Save Changes</button>}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}