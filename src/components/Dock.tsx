"use client";

import { motion } from "framer-motion";
import { Home, PenTool, User, Camera, Link, Fingerprint } from "lucide-react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const icons = [
  { id: 1, icon: Home, path: "/", label: "Home" },
  { id: 2, icon: PenTool, path: "/work", label: "Work" },
  { id: 3, icon: User, path: "/stats", label: "Profile" },
  { id: 5, icon: Camera, path: "/photos", label: "Photos" },
  { id: 6, icon: Link, path: "/connect", label: "Connect" },
];

export function Dock() { // Added 'export' (remove 'default' if using curly braces in layout)
  const router = useRouter();
  const pathname = usePathname();

  return (
    // 🛠️ FIX: Added 'max-w-[90vw]' so it doesn't get cut off
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90vw]">
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
                <motion.div 
                  layoutId="active-dot"
                  className="absolute -bottom-1 w-1 h-1 bg-black rounded-full"
                />
              )}
            </button>
          );
        })}

        <div className="w-px h-6 bg-white/20 mx-1 md:mx-2" />

        <button className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-[#888D7A] hover:bg-white/10 hover:text-white transition-all">
          <Fingerprint size={20} className="md:w-[24px] md:h-[24px]" />
        </button>

      </div>
    </div>
  );
}

// ⚠️ Make sure this line exists if you use 'import Dock from ...'
export default Dock;