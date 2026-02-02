"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Instagram, Youtube, Linkedin, Briefcase } from "lucide-react";
import React, { useRef } from "react";
import Link from "next/link";

const links = [
  { id: 1, title: "@designxab.exe", platform: "INSTAGRAM", desc: "UI/UX Portfolio.", url: "https://instagram.com/designxab.exe", color: "bg-[#94AF80]", textColor: "text-[#FDF8E2]", icon: Instagram },
  { id: 2, title: "@ablegacy", platform: "INSTAGRAM", desc: "Gaming Clips.", url: "https://instagram.com/ablegacy", color: "bg-[#6D815E]", textColor: "text-[#FDF8E2]", icon: Instagram },
  { id: 3, title: "Ablegacy", platform: "YOUTUBE", desc: "Long-form Gameplay.", url: "https://youtube.com/@ablegacy", color: "bg-[#C9DDB3]", textColor: "text-[#6D815E]", icon: Youtube },
];

const Card = ({ i, item, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className={`flex flex-col relative -top-[25%] h-[450px] w-[90%] md:w-[700px] rounded-3xl p-10 origin-top shadow-xl ${item.color} ${item.textColor}`}
      >
        <div className="flex justify-between items-center w-full mb-8">
           <div className="font-mono font-bold opacity-80">{item.platform}</div>
           <Link href={item.url} target="_blank"><ArrowUpRight size={28} /></Link>
        </div>
        <h2 className="text-5xl font-black tracking-tighter mb-4">{item.title}</h2>
        <p className="text-xl font-medium opacity-90">{item.desc}</p>
      </motion.div>
    </div>
  )
}

export default function ConnectPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  return (
    // ✨ THEME: Cream Background, Sage Text
    <div ref={container} className="relative mt-[10vh] bg-[#FDF8E2] text-[#6D815E] min-h-screen">
      <div className="h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">UPLINK</h1>
        <p className="text-[#94AF80] font-bold">SCROLL TO STACK ↓</p>
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