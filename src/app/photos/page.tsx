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
    <div className="min-h-screen w-full pt-[10vh] px-4 md:px-10 pb-32 z-10 text-[#1e293b]">
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-2">OPTICS</h1>
        <p className="font-mono text-sm tracking-widest text-[#475569]">Visual Data & Photography.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[1,2,3,4,5,6,7,8].map((item) => (
          <div key={item} className="aspect-square glass-button flex items-center justify-center group cursor-pointer">
            <Camera className="text-[#475569] opacity-50 group-hover:scale-110 transition-transform" size={32} />
          </div>
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
                  <h2 className="text-2xl font-black text-[#1e293b] mb-2">OPTICS ADMIN</h2>
                  <form onSubmit={handleLogin} className="flex gap-2 mt-6">
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="flex-1 glass-button px-4 py-3 outline-none focus:bg-white/60" />
                    <button type="submit" className="glass-button px-6 font-bold hover:bg-white/80">Enter</button>
                  </form>
                </div>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-black text-[#1e293b] mb-6">UPLOAD PHOTO</h2>
                  <div className="glass-button border-dashed p-8 mb-6 cursor-pointer group">
                    {status === "idle" && <div className="flex flex-col items-center text-[#475569] group-hover:text-[#1e293b]"><Upload size={48} className="mb-2" /><span className="font-bold">Select Image</span></div>}
                    {status === "uploading" && <span className="font-bold text-[#1e293b] animate-pulse">Uploading...</span>}
                    {status === "success" && <div className="flex flex-col items-center text-green-600"><Check size={48} className="mb-2" /><span className="font-bold">Uploaded!</span></div>}
                  </div>
                  {status === "idle" && <button onClick={handleUpload} className="w-full glass-button py-4 font-bold hover:bg-white/80">Upload</button>}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}