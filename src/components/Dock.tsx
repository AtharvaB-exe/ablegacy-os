"use client";

import { motion } from "framer-motion";
import { Home, PenTool, User, Camera, Link } from "lucide-react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const icons = [
  { id: 1, icon: Home, path: "/", label: "Home" },
  { id: 2, icon: PenTool, path: "/work", label: "Work" },
  { id: 3, icon: User, path: "/stats", label: "Profile" },
  { id: 5, icon: Camera, path: "/photos", label: "Photos" },
  { id: 6, icon: Link, path: "/connect", label: "Connect" },
];

export default function Dock() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-auto max-w-[90vw]">
      {/* 🧊 NATIVE TAILWIND GLASS */}
      <div className="flex items-center gap-2 md:gap-4 px-4 py-3 md:px-6 md:py-4 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full shadow-2xl overflow-x-auto no-scrollbar">
        
        {icons.map((item) => {
          const isActive = pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className={`relative flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 group
                ${isActive ? "bg-white/70 text-black scale-110 shadow-lg" : "text-black/70 hover:bg-white/60 hover:text-black"}`}
            >
              <item.icon size={20} className="md:w-[24px] md:h-[24px]" />
              {isActive && (
                <motion.div layoutId="active-dot" className="absolute -bottom-1 w-1 h-1 bg-black rounded-full" />
              )}
            </button>
          );
        })}

      </div>
    </div>
  );
}