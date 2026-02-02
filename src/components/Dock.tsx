"use client";

import { motion } from "framer-motion";
import { 
  Home, PenTool, Gamepad2, Camera, UserCircle, Radio, Fingerprint
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const dockItems = [
  { id: "home", label: "CORE", icon: Home, href: "/", color: "bg-[#666E5D]" },     // Olive
  { id: "work", label: "PROTOCOLS", icon: PenTool, href: "/work", color: "bg-[#0C2C55]" }, // Navy
  { id: "stats", label: "DATA", icon: UserCircle, href: "/stats", color: "bg-[#2C3446]" }, // Slate
  { id: "gaming", label: "NEXUS", icon: Gamepad2, href: "/gaming", color: "bg-[#FF9551]" }, // Orange
  { id: "photos", label: "OPTICS", icon: Camera, href: "/photos", color: "bg-[#48004F]" }, // Purple
  { id: "connect", label: "UPLINK", icon: Radio, href: "/connect", color: "bg-[#6D815E]" }, // Sage
];

export const Dock = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const adminState = localStorage.getItem("xab_admin") === "true";
    setIsAdmin(adminState);
  }, []);

  const triggerAuth = () => {
    if (isAdmin) {
      setIsAdmin(false);
      localStorage.setItem("xab_admin", "false");
      window.dispatchEvent(new Event("adminChange")); 
      alert("SYSTEM LOCKED");
    } else {
      const password = window.prompt("AUTHENTICATE IDENTITY:");
      if (password === "Athu2007") {
        setIsAdmin(true);
        localStorage.setItem("xab_admin", "true");
        window.dispatchEvent(new Event("adminChange")); 
        alert("WELCOME BACK, COMMANDER.");
      } else {
        alert("ACCESS DENIED");
      }
    }
  };

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-4 px-6 py-4 rounded-3xl 
          bg-white/80 backdrop-blur-xl 
          border border-white/50 shadow-2xl shadow-black/5"
      >
        {/* NAV ITEMS */}
        {dockItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hovered === item.id;
          return (
            <Link key={item.id} href={item.href}>
              <motion.div
                onHoverStart={() => setHovered(item.id)}
                onHoverEnd={() => setHovered(null)}
                className="relative flex items-center justify-center cursor-pointer"
              >
                {/* Floating Label */}
                {isHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -60 }}
                    className="absolute bg-white/90 text-gray-800 border border-gray-200 text-xs font-bold font-mono px-3 py-1 rounded-lg tracking-widest shadow-lg"
                  >
                    {item.label}
                  </motion.div>
                )}
                
                {/* Icon Button */}
                <motion.div
                  className={`relative flex items-center justify-center h-14 w-14 rounded-2xl
                    ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-600'}
                    transition-colors duration-300`}
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon size={24} strokeWidth={2} />
                  
                  {/* Active Indicator Dot */}
                  {isActive && (
                    <motion.div layoutId="active-dot" className={`absolute -bottom-1 w-1 h-1 ${item.color} rounded-full`} />
                  )}
                </motion.div>
              </motion.div>
            </Link>
          );
        })}

        <div className="w-[1px] h-8 bg-gray-300 mx-2" />

        {/* 🔒 FINGERPRINT SCANNER */}
        <button
          onMouseDown={() => timerRef.current = setTimeout(triggerAuth, 1000)}
          onMouseUp={() => clearTimeout(timerRef.current!)}
          onTouchStart={() => timerRef.current = setTimeout(triggerAuth, 1000)}
          onTouchEnd={() => clearTimeout(timerRef.current!)}
          className={`p-3 rounded-xl transition-all duration-500
            ${isAdmin 
              ? "bg-red-50 text-red-500 border border-red-100" 
              : "text-gray-300 hover:text-gray-500"
            }`}
        >
          <Fingerprint size={24} className={isAdmin ? "animate-pulse" : ""} />
        </button>

      </motion.div>
    </div>
  );
};