"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Instagram, Youtube, Linkedin, Briefcase, Camera, Lock, Plus, X, Upload, Check } from "lucide-react";
import React, { useRef, useState } from "react";
import Link from "next/link";

const links = [
  { 
    title: "@atharva_bulbule", 
    platform: "PRIVATE", 
    desc: "Personal Life.", 
    url: "https://www.instagram.com/atharva_bulbule", 
    icon: Lock
  },
  { 
    title: "@designxab.exe", 
    platform: "INSTAGRAM", 
    desc: "UI/UX & Graphic Work.", 
    url: "https://www.instagram.com/designxab.exe/", 
    icon: Instagram
  },
  { 
    title: "AB Legacy Design", 
    platform: "YOUTUBE", 
    desc: "Creative Content.", 
    url: "https://youtube.com/@ablegacy007", 
    icon: Youtube
  },
  { 
    title: "@visuals.xab", 
    platform: "INSTAGRAM", 
    desc: "Photography & Edits.", 
    url: "https://www.instagram.com/visuals.xab/", 
    icon: Camera
  },
  { 
    title: "@abxlegacy", 
    platform: "INSTAGRAM", 
    desc: "Gaming Highlights.", 
    url: "https://www.instagram.com/abxlegacy/", 
    icon: Instagram
  },
  { 
    title: "AB Legacy Gaming", 
    platform: "YOUTUBE", 
    desc: "Long-form Gameplay.", 
    url: "https://youtube.com/@ablegacy007", 
    icon: Youtube
  },
  { 
    title: "Atharva Bulbule", 
    platform: "FREELANCER", 
    desc: "Hire me for projects.", 
    url: "https://www.freelancer.in/u/AtharvaB2307", 
    icon: Briefcase
  },
  { 
    title: "Atharva Bulbule", 
    platform: "LINKEDIN", 
    desc: "Professional Profile.", 
    url: "https://www.linkedin.com/in/atharva-bulbule-665775378", 
    icon: Linkedin
  },
];

const Card = ({ i, item, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-10% + ${i * 25}px)` }} 
        className="flex flex-col relative h-[240px] md:h-[350px] w-[95%] md:w-[600px] rounded-2xl md:rounded-3xl p-6 md:p-10 origin-top shadow-2xl bg-[#2C3446] text-[#F2F2F2] border border-white/10"
      >
        <div className="flex justify-between items-center w-full mb-4 md:mb-8">
           <div className="flex items-center gap-2 font-mono font-bold text-[#888D7A] text-xs md:text-sm">
             <item.icon size={16} className="md:w-[20px] md:h-[20px]" />
             {item.platform}
           </div>
           <Link href={item.url} target="_blank" className="hover:opacity-70 transition-opacity">
             <ArrowUpRight size={24} className="md:w-[28px] md:h-[28px]" />
           </Link>
        </div>
        <h2 className="text-2xl md:text-5xl font-black tracking-tighter mb-2 md:mb-4 break-words leading-tight">
          {item.title}
        </h2>
        <p className="text-sm md:text-xl font-medium text-[#888D7A]">{item.desc}</p>
      </motion.div>
    </div>
  )
}

export default function ConnectPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  // ADMIN STATE
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") {
      setIsAuthenticated(true);
      setPassword("");
    } else {
      alert("Wrong Password");
    }
  };

  const handleAddLink = () => {
    setStatus("uploading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setShowAdmin(false);
        setStatus("idle");
        setIsAuthenticated(false);
      }, 1500);
    }, 1500);
  };

  return (
    <div ref={container} className="relative min-h-screen w-full bg-[#FDF8E2] text-[#6D815E] pt-[10vh]">
      <div className="h-[30vh] md:h-[40vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 md:mb-6 uppercase">Uplink</h1>
        <p className="text-[#94AF80] font-bold animate-bounce text-xs md:text-sm tracking-widest">SCROLL TO CONNECT ↓</p>
      </div>
      <div className="pb-[40vh]">
        {links.map((link, i) => {
          const targetScale = 1 - ((links.length - i) * 0.02);
          return <Card key={i} i={i} item={link} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
        })}
      </div>

      {/* 🟢 FLOATING BUTTON */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowAdmin(true)}
        className="fixed bottom-24 right-6 md:right-10 z-30 bg-[#2C3446] text-white p-4 rounded-full shadow-2xl border-4 border-[#FDF8E2]"
      >
        <Plus size={24} />
      </motion.button>

      {/* 🔐 ADMIN MODAL */}
      <AnimatePresence>
        {showAdmin && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-3xl p-8 relative shadow-2xl"
            >
              <button onClick={() => setShowAdmin(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">
                <X size={24} />
              </button>

              {!isAuthenticated ? (
                <div className="text-center">
                   <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#2C3446]">
                    <Lock size={32} />
                  </div>
                  <h2 className="text-2xl font-black text-[#2C3446] mb-2">ADMIN UPLINK</h2>
                  <p className="text-gray-500 mb-6 text-sm">Enter security clearance code.</p>
                  <form onSubmit={handleLogin} className="flex gap-2">
                    <input 
                      type="password" placeholder="Pass: admin" value={password} onChange={(e) => setPassword(e.target.value)}
                      className="flex-1 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#2C3446]"
                    />
                    <button type="submit" className="bg-[#2C3446] text-white px-4 rounded-xl font-bold">Enter</button>
                  </form>
                </div>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-black text-[#2C3446] mb-6">ADD NEW LINK</h2>
                  <input type="text" placeholder="Title (e.g. My GitHub)" className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-3 outline-none" />
                  <input type="text" placeholder="URL (https://...)" className="w-full bg-gray-100 rounded-xl px-4 py-3 mb-6 outline-none" />
                  
                  {status === "idle" && (
                    <button onClick={handleAddLink} className="w-full bg-[#2C3446] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
                      Save Link
                    </button>
                  )}
                  {status === "uploading" && <span className="font-bold text-[#2C3446] animate-pulse">Saving...</span>}
                  {status === "success" && <span className="font-bold text-green-500">Link Added!</span>}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}