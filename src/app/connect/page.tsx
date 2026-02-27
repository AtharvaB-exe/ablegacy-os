"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Instagram, Youtube, Linkedin, Briefcase, Camera, Lock } from "lucide-react";
import React, { useRef } from "react";
import Link from "next/link";

const links = [
  { title: "@atharva_bulbule", platform: "PRIVATE", desc: "Personal Life.", url: "https://www.instagram.com/atharva_bulbule", icon: Lock },
  { title: "@designxab.exe", platform: "INSTAGRAM", desc: "UI/UX & Graphic Work.", url: "https://www.instagram.com/designxab.exe/", icon: Instagram },
  { title: "AB Legacy Design", platform: "YOUTUBE", desc: "Creative Content.", url: "https://youtube.com/@ablegacy007", icon: Youtube },
  { title: "@visuals.xab", platform: "INSTAGRAM", desc: "Photography & Edits.", url: "https://www.instagram.com/visuals.xab/", icon: Camera },
  { title: "@abxlegacy", platform: "INSTAGRAM", desc: "Gaming Highlights.", url: "https://www.instagram.com/abxlegacy/", icon: Instagram },
  { title: "AB Legacy Gaming", platform: "YOUTUBE", desc: "Long-form Gameplay.", url: "https://youtube.com/@ablegacy007", icon: Youtube },
  { title: "Atharva Bulbule", platform: "FREELANCER", desc: "Hire me for projects.", url: "https://www.freelancer.in/u/AtharvaB2307", icon: Briefcase },
  { title: "Atharva Bulbule", platform: "LINKEDIN", desc: "Professional Profile.", url: "https://www.linkedin.com/in/atharva-bulbule-665775378", icon: Linkedin },
];

const Card = ({ i, item, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-10% + ${i * 25}px)` }} 
        className="glass-panel flex flex-col relative h-[240px] md:h-[350px] w-[95%] md:w-[600px] p-6 md:p-10 origin-top text-[#1e293b]"
      >
        <div className="flex justify-between items-center w-full mb-4 md:mb-8">
           <div className="flex items-center gap-2 font-mono font-bold text-[#475569] text-xs md:text-sm glass-button px-4 py-2">
             <item.icon size={16} />
             {item.platform}
           </div>
           <Link href={item.url} target="_blank" className="glass-button p-2 hover:bg-white/80">
             <ArrowUpRight size={24} />
           </Link>
        </div>
        <h2 className="text-2xl md:text-5xl font-black tracking-tighter mb-2 md:mb-4">{item.title}</h2>
        <p className="text-sm md:text-xl font-medium text-[#475569]">{item.desc}</p>
      </motion.div>
    </div>
  )
}

export default function ConnectPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  return (
    <div ref={container} className="relative min-h-screen w-full pt-[10vh] z-10 text-[#1e293b]">
      <div className="h-[30vh] md:h-[40vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 md:mb-6 uppercase">Uplink</h1>
        <p className="font-bold animate-bounce text-xs md:text-sm tracking-widest text-[#475569]">SCROLL TO CONNECT ↓</p>
      </div>
      <div className="pb-[40vh]">
        {links.map((link, i) => {
          const targetScale = 1 - ((links.length - i) * 0.02);
          return <Card key={i} i={i} item={link} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
        })}
      </div>
    </div>
  );
}