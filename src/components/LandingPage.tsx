"use client";

import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";
import { useEffect, useState } from "react";

export default function LandingPage({ onComplete }: { onComplete: () => void }) {
  const [isValidating, setIsValidating] = useState(false);

  const handleEnter = () => {
    setIsValidating(true);
    // Simulate biometric scan + door opening delay
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-[#111] flex flex-col items-center justify-center text-[#888D7A]"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center flex flex-col items-center"
      >
        <div className="mb-8 relative">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center border-2 transition-all duration-700 ${isValidating ? "border-green-500 bg-green-500/10 text-green-500 animate-pulse" : "border-[#888D7A]/30 text-[#888D7A]"}`}>
            <Fingerprint size={48} />
          </div>
          {isValidating && (
            <motion.div 
              initial={{ scale: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 border-2 border-green-500 rounded-full"
            />
          )}
        </div>
        
        <h1 className="text-3xl font-black tracking-tighter text-[#E6E6E6] mb-2">
          {isValidating ? "ACCESS GRANTED" : "AB LEGACY OS"}
        </h1>
        <p className="font-mono text-sm tracking-widest mb-8">
          {isValidating ? "INITIALIZING SYSTEMS..." : "BIOMETRIC ENTRY REQUIRED"}
        </p>

        {!isValidating && (
          <button 
            onClick={handleEnter}
            className="px-8 py-3 bg-[#E6E6E6] text-[#111] font-bold rounded-full hover:scale-105 active:scale-95 transition-all"
          >
            ENTER SYSTEM
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}