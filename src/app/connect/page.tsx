"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Instagram, Youtube, Linkedin, Briefcase, Camera, Lock } from "lucide-react";
import React, { useRef } from "react";
import Link from "next/link";

// 👇 YOUR 8 VERIFIED LINKS
const links = [
  // 1. PRIVATE INSTA
  { 
    id: 1, 
    title: "@atharva_bulbule", 
    platform: "PRIVATE", 
    desc: "Personal Life.", 
    url: "https://www.instagram.com/atharva_bulbule?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
    color: "bg-[#A9AC97]", // Sage Grey
    textColor: "text-[#F2F2F2]",
    icon: Lock
  },
  // 2. DESIGN INSTA
  { 
    id: 2, 
    title: "@designxab.exe", 
    platform: "INSTAGRAM", 
    desc: "UI/UX & Graphic Work.", 
    url: "https://www.instagram.com/designxab.exe/", 
    color: "bg-[#666E5D]", // Olive Green
    textColor: "text-[#F2F2F2]",
    icon: Instagram
  },
  // 3. DESIGN YOUTUBE (AB Legacy)
  { 
    id: 3, 
    title: "AB Legacy Design", 
    platform: "YOUTUBE", 
    desc: "Creative Content.", 
    url: "https://youtube.com/@ablegacy007?si=yBYv9aPGjNlYoXL5", 
    color: "bg-[#2C3446]", // Slate
    textColor: "text-[#F2F2F2]",
    icon: Youtube
  },
  // 4. VISUALS INSTA
  { 
    id: 4, 
    title: "@visuals.xab", 
    platform: "INSTAGRAM", 
    desc: "Photography & Edits.", 
    url: "https://www.instagram.com/visuals.xab/", 
    color: "bg-[#48004F]", // Purple
    textColor: "text-[#FAD2D2]",
    icon: Camera
  },
  // 5. GAMING INSTA
  { 
    id: 5, 
    title: "@abxlegacy", 
    platform: "INSTAGRAM", 
    desc: "Gaming Highlights.", 
    url: "https://www.instagram.com/abxlegacy/", 
    color: "bg-[#FF9551]", // Orange
    textColor: "text-[#222F3E]",
    icon: Instagram
  },
  // 6. GAMING YOUTUBE
  { 
    id: 6, 
    title: "AB Legacy Gaming", 
    platform: "YOUTUBE", 
    desc: "Long-form Gameplay.", 
    url: "https://youtube.com/@ablegacy007?si=ovel5bdRYU5W8WI1", 
    color: "bg-[#222F3E]", // Dark Navy
    textColor: "text-[#FF9551]",
    icon: Youtube
  },
  // 7. FREELANCER
  { 
    id: 7, 
    title: "Atharva Bulbule", 
    platform: "FREELANCER", 
    desc: "Hire me for projects.", 
    url: "https://www.freelancer.in/u/AtharvaB2307?sb=t", 
    color: "bg-[#0C2C55]", // Navy Blue
    textColor: "text-[#F2F2D5]",
    icon: Briefcase
  },
  // 8. LINKEDIN
  { 
    id: 8, 
    title: "Atharva Bulbule", 
    platform: "LINKEDIN", 
    desc: "Professional Profile.", 
    url: "https://www.linkedin.com/in/atharva-bulbule-665775378", 
    color: "bg-[#2F667F]", // Teal
    textColor: "text-[#F2F2D5]",
    icon: Linkedin
  },
];

const Card = ({ i, item, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className={`flex flex-col relative -top-[25%] h-[400px] w-[90%] md:w-[700px] rounded-3xl p-8 md:p-10 origin-top shadow-xl ${item.color} ${item.textColor}`}
      >
        <div className="flex justify-between items-center w-full mb-6 md:mb-8">
           <div className="flex items-center gap-2 font-mono font-bold opacity-80">
             <item.icon size={20} />
             {item.platform}
           </div>
           <Link href={item.url} target="_blank"><ArrowUpRight size={28} /></Link>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 break-words leading-tight">{item.title}</h2>
        <p className="text-lg md:text-xl font-medium opacity-90">{item.desc}</p>
      </motion.div>
    </div>
  )
}

export default function ConnectPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  return (
    // ✨ THEME: Cream Background, Sage Text
    <div ref={container} className="relative mt-[10vh] bg-[#FDF8E2] text-[#6D815E]">
      <div className="h-[40vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">UPLINK</h1>
        <p className="text-[#94AF80] font-bold animate-bounce">SCROLL TO STACK ↓</p>
      </div>
      <div className="pb-[50vh]">
        {links.map((link, i) => {
          const targetScale = 1 - ((links.length - i) * 0.05);
          return <Card key={i} i={i} item={link} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
        })}
      </div>
    </div>
  );
}