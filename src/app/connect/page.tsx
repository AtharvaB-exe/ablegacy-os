"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Instagram, Youtube, Linkedin, Briefcase, Camera, Lock } from "lucide-react";
import React, { useRef } from "react";
import Link from "next/link";

// Links Data
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
  
  // 🛠️ FIX 1: Simpler Top Spacing (Fixed pixels for uniformity)
  // Removed the complex 'calc(-5vh...)' to make spacing consistent on all devices
  const topOffset = `${i * 30}px`;

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: topOffset }} 
        // 🛠️ FIX 2: Lighter Color Theme
        // Changed bg-[#1A1A1A] (too black) to bg-[#2C3446] (Premium Slate Grey)
        className="flex flex-col relative -top-[20%] h-[350px] w-[90%] md:w-[600px] rounded-3xl p-8 md:p-10 origin-top shadow-2xl bg-[#2C3446] text-[#F2F2F2] border border-white/10"
      >
        <div className="flex justify-between items-center w-full mb-8">
           <div className="flex items-center gap-2 font-mono font-bold text-[#888D7A]">
             <item.icon size={20} />
             {item.platform}
           </div>
           <Link href={item.url} target="_blank" className="hover:opacity-70 transition-opacity">
             <ArrowUpRight size={28} />
           </Link>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 break-words leading-tight">
          {item.title}
        </h2>
        <p className="text-lg md:text-xl font-medium text-[#888D7A]">{item.desc}</p>
      </motion.div>
    </div>
  )
}

export default function ConnectPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  return (
    <div ref={container} className="relative min-h-screen w-full bg-[#FDF8E2] text-[#6D815E] pt-[10vh]">
      
      {/* Title Section */}
      <div className="h-[40vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">Uplink</h1>
        <p className="text-[#94AF80] font-bold animate-bounce text-sm tracking-widest">SCROLL TO CONNECT ↓</p>
      </div>

      {/* Stack Section */}
      <div className="pb-[50vh]">
        {links.map((link, i) => {
          // 🛠️ FIX 3: Drastically Reduced Shrinking Effect
          // Changed 0.05 to 0.02. The back cards are now almost the same size as the front ones.
          const targetScale = 1 - ((links.length - i) * 0.02);
          return <Card key={i} i={i} item={link} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
        })}
      </div>
    </div>
  );
}