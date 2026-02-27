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
    <div className="min-h-screen w-full bg-[#F2F2F2] text-[#666E5D] pt-[12vh] px-4 md:px-10 pb-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
            <div className="absolute inset-0 bg-[#A9AC97] rounded-full blur-2xl opacity-40" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-black">
              <Image src="/logo.png" alt="AB Legacy" fill className="object-cover" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#666E5D] uppercase mb-2">AB LEGACY</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
              <span className="px-3 py-1 bg-[#D1D1D1] text-[#666E5D] rounded-md font-mono text-xs font-bold">UI/UX ENGINEER</span>
              <span className="px-3 py-1 bg-[#D1D1D1] text-[#666E5D] rounded-md font-mono text-xs font-bold">SYSTEM MODDER</span>
              <span className="px-3 py-1 bg-[#D1D1D1] text-[#666E5D] rounded-md font-mono text-xs font-bold">SVIT VASAD</span>
            </div>
            <p className="text-xl text-[#888D7A] font-medium max-w-lg">Computer Science & Design Student. Crafting digital experiences.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-[#E6E6E6] p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6 opacity-60"><Cpu size={24} /><h3 className="font-bold font-mono tracking-widest">SYSTEM SPECS</h3></div>
            <div className="space-y-4 font-mono text-sm font-bold text-[#666E5D]">
              <div className="flex justify-between items-center"><span>UI/UX DESIGN</span><div className="w-32 h-2 bg-white rounded-full overflow-hidden"><div className="h-full bg-[#666E5D] w-[92%]" /></div></div>
              <div className="flex justify-between items-center"><span>GRAPHIC ART</span><div className="w-32 h-2 bg-white rounded-full overflow-hidden"><div className="h-full bg-[#666E5D] w-[90%]" /></div></div>
              <div className="flex justify-between items-center"><span>MODDING</span><div className="w-32 h-2 bg-white rounded-full overflow-hidden"><div className="h-full bg-[#666E5D] w-[85%]" /></div></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-3xl border-2 border-[#E6E6E6]">
            <div className="flex items-center gap-3 mb-6 opacity-60"><Zap size={24} /><h3 className="font-bold font-mono tracking-widest">CURRENT STATUS</h3></div>
            <div className="space-y-4">
              <div className="p-4 bg-[#F9F9F9] rounded-xl border border-[#EEEEEE]"><h4 className="font-bold text-[#666E5D] mb-1">💼 Freelance</h4><p className="text-sm text-[#888D7A]">Open for UI/UX Projects</p></div>
              <div className="p-4 bg-[#F9F9F9] rounded-xl border border-[#EEEEEE]"><h4 className="font-bold text-[#666E5D] mb-1">🎓 Academic</h4><p className="text-sm text-[#888D7A]">1st Year CSD @ SVIT</p></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowAdmin(true)} className="fixed bottom-24 right-6 md:right-10 z-30 bg-[#666E5D] text-white p-4 rounded-full shadow-2xl border-4 border-[#F2F2F2]">
        <Plus size={24} />
      </motion.button>

      <AnimatePresence>
        {showAdmin && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white w-full max-w-md rounded-3xl p-8 relative shadow-2xl">
              <button onClick={() => setShowAdmin(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black"><X size={24} /></button>
              {!isAuthenticated ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#666E5D]"><Lock size={32} /></div>
                  <h2 className="text-2xl font-black text-[#666E5D] mb-2">AB LEGACY ADMIN</h2>
                  <form onSubmit={handleLogin} className="flex gap-2">
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="flex-1 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#666E5D]" />
                    <button type="submit" className="bg-[#666E5D] text-white px-4 rounded-xl font-bold">Enter</button>
                  </form>
                </div>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-black text-[#666E5D] mb-6">EDIT PROFILE</h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 mb-6 cursor-pointer hover:bg-gray-50 hover:border-[#666E5D] transition-colors group">
                    {status === "idle" && <div className="flex flex-col items-center text-gray-400 group-hover:text-[#666E5D]"><Upload size={48} className="mb-2" /><span className="font-bold">Update Data</span></div>}
                    {status === "uploading" && <span className="font-bold text-[#666E5D] animate-pulse">Updating...</span>}
                    {status === "success" && <div className="flex flex-col items-center text-green-500"><Check size={48} className="mb-2" /><span className="font-bold">Updated!</span></div>}
                  </div>
                  {status === "idle" && <button onClick={handleUpload} className="w-full bg-[#666E5D] text-white py-4 rounded-xl font-bold hover:opacity-90">Save Changes</button>}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}