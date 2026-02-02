"use client";

import { motion } from "framer-motion";
import { Fingerprint, ChevronUp, ChevronDown, Lock } from "lucide-react";
import { useState } from "react";

export default function IntroLock({ onUnlock }: { onUnlock: () => void }) {
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleUnlock = () => {
    setIsUnlocking(true);
    setTimeout(onUnlock, 1200); 
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden flex flex-col pointer-events-auto text-[#666E5D]">
      
      {/* --- TOP DOOR (Concrete/Olive) --- */}
      <motion.div 
        className="relative flex-1 bg-[#EBECE8] border-b border-[#A9AC97] flex items-end justify-center pb-10 z-20"
        initial={{ y: 0 }}
        animate={isUnlocking ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
      >
        <div className="flex flex-col items-center gap-4 opacity-50">
          <Lock size={24} />
          <div className="text-xs font-mono font-bold tracking-[0.5em] uppercase">Security Protocol</div>
        </div>
      </motion.div>

      {/* --- THE TRIGGER BUTTON --- */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
        animate={isUnlocking ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
      >
        <button 
          onClick={handleUnlock}
          className="group relative flex flex-col items-center justify-center p-10"
        >
          {/* Ripple Effect Rings */}
          <div className="absolute inset-0 rounded-full border border-[#666E5D]/20 animate-[ping_3s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-[#666E5D]/40" />
          
          <div className="relative p-6 rounded-full bg-white shadow-xl group-hover:scale-110 transition-transform duration-300">
            <Fingerprint size={48} className="text-[#666E5D]" />
          </div>

          <span className="mt-6 font-mono text-xs font-bold tracking-widest text-[#666E5D] opacity-60">
            TOUCH TO ACCESS
          </span>
        </button>
      </motion.div>

      {/* --- BOTTOM DOOR --- */}
      <motion.div 
        className="relative flex-1 bg-[#EBECE8] border-t border-[#A9AC97] flex items-start justify-center pt-10 z-20"
        initial={{ y: 0 }}
        animate={isUnlocking ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="flex flex-col items-center gap-2 opacity-30">
          <div className="h-12 w-[1px] bg-[#666E5D]" />
          <div className="font-mono text-[10px]">SYSTEM ID: XAB-99</div>
        </div>
      </motion.div>

    </div>
  );
}