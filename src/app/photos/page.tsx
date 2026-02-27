"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Lock, Upload, Check, Camera } from "lucide-react";
import { useState } from "react";

export default function PhotosPage() {
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
    <div className="min-h-screen w-full bg-[#111] text-white pt-[10vh] px-4 md:px-10 pb-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2">OPTICS</h1>
        <p className="text-gray-500 font-mono text-sm tracking-widest">Visual Data & Photography.</p>
        <div className="h-px w-full bg-white opacity-20 mt-6" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {[1,2,3,4,5,6,7,8].map((item) => (
          <div key={item} className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors">
            <Camera className="opacity-20" />
          </div>
        ))}
      </div>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setShowAdmin(true)} className="fixed bottom-24 right-6 md:right-10 z-30 bg-white text-black p-4 rounded-full shadow-2xl">
        <Plus size={24} />
      </motion.button>

      <AnimatePresence>
        {showAdmin && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-[#1A1A1A] w-full max-w-md rounded-3xl p-8 relative shadow-2xl border border-white/10">
              <button onClick={() => setShowAdmin(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X size={24} /></button>
              {!isAuthenticated ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-white"><Lock size={32} /></div>
                  <h2 className="text-2xl font-black text-white mb-2">OPTICS ADMIN</h2>
                  <form onSubmit={handleLogin} className="flex gap-2">
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="flex-1 bg-black/50 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-white text-white" />
                    <button type="submit" className="bg-white text-black px-4 rounded-xl font-bold">Enter</button>
                  </form>
                </div>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-black text-white mb-6">UPLOAD PHOTO</h2>
                  <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 mb-6 cursor-pointer hover:bg-white/5 hover:border-white transition-colors group">
                    {status === "idle" && <div className="flex flex-col items-center text-gray-400 group-hover:text-white"><Upload size={48} className="mb-2" /><span className="font-bold">Select Image</span></div>}
                    {status === "uploading" && <span className="font-bold text-white animate-pulse">Uploading...</span>}
                    {status === "success" && <div className="flex flex-col items-center text-green-500"><Check size={48} className="mb-2" /><span className="font-bold">Uploaded!</span></div>}
                  </div>
                  {status === "idle" && <button onClick={handleUpload} className="w-full bg-white text-black py-4 rounded-xl font-bold hover:opacity-90">Upload</button>}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}