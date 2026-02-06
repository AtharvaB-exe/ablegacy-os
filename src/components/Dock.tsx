"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, PenTool, User, Camera, Link, Fingerprint, X, ArrowRight } from "lucide-react";
import React, { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const icons = [
  { id: 1, icon: Home, path: "/", label: "Home" },
  { id: 2, icon: PenTool, path: "/work", label: "Work" },
  { id: 3, icon: User, path: "/stats", label: "Profile" },
  { id: 5, icon: Camera, path: "/photos", label: "Photos" },
  { id: 6, icon: Link, path: "/connect", label: "Connect" },
];

export function Dock() {
  const router = useRouter();
  const pathname = usePathname();
  
  // 🔐 STATE FOR PASSWORD MODAL
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // ⏱️ LONG PRESS LOGIC
  const handleStart = () => {
    // Wait 1 second (1000ms) then show login
    timerRef.current = setTimeout(() => {
      setShowLogin(true);
      // Optional: Vibrate on mobile if supported
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(50);
      }
    }, 800); 
  };

  const handleEnd = () => {
    // If let go before 1 second, cancel the timer
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") { // Change 'admin' to your real password later
      alert("Access Granted! (Add your redirect logic here)");
      setShowLogin(false);
      setPassword("");
    } else {
      alert("Access Denied");
      setPassword("");
    }
  };

  return (
    <>
      {/* ⚓️ THE DOCK */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[90vw]">
        <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-6 md:py-4 bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl overflow-x-auto no-scrollbar">
          
          {icons.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => router.push(item.path)}
                className={`relative flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 group
                  ${isActive ? "bg-white text-black scale-110" : "text-[#888D7A] hover:bg-white/10 hover:text-white"}`}
              >
                <item.icon size={20} className="md:w-[24px] md:h-[24px]" />
                {isActive && (
                  <motion.div layoutId="active-dot" className="absolute -bottom-1 w-1 h-1 bg-black rounded-full" />
                )}
              </button>
            );
          })}

          <div className="w-px h-6 bg-white/20 mx-1 md:mx-2" />

          {/* 👆 FINGERPRINT BUTTON (With Long Press Support) */}
          <button 
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-[#888D7A] hover:bg-white/10 hover:text-white transition-all active:scale-90"
          >
            <Fingerprint size={20} className="md:w-[24px] md:h-[24px]" />
          </button>

        </div>
      </div>

      {/* 🔐 PASSWORD MODAL OVERLAY */}
      <AnimatePresence>
        {showLogin && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }}
              className="bg-[#1A1A1A] border border-white/10 p-8 rounded-3xl w-full max-w-sm relative shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowLogin(false)}
                className="absolute top-4 right-4 text-[#888D7A] hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 text-white">
                  <Fingerprint size={32} />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">System Locked</h2>
                <p className="text-[#888D7A] text-sm">Enter authentication code</p>
              </div>

              <form onSubmit={handleLogin} className="flex gap-2">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  autoFocus
                  className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-white/40 transition-colors text-center tracking-widest"
                />
                <button 
                  type="submit"
                  className="bg-white text-black rounded-xl w-12 flex items-center justify-center hover:bg-gray-200 active:scale-95 transition-all"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Dock;