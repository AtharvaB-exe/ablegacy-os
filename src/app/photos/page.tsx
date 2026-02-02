"use client";

import { motion } from "framer-motion";
import { Aperture } from "lucide-react";

// Placeholder photos
const photos = [
  { id: 1, src: "/photo1.jpg", title: "Mountain Haze", span: "row-span-2" },
  { id: 2, src: "/photo2.jpg", title: "Cyber City", span: "row-span-1" },
  { id: 3, src: "/photo3.jpg", title: "Neon Rain", span: "row-span-1" },
  { id: 4, src: "/photo4.jpg", title: "Abstract Data", span: "row-span-1" },
  { id: 5, src: "/photo5.jpg", title: "Portrait", span: "row-span-2" },
];

export default function PhotosPage() {
  return (
    // 🛠️ FIX: Added 'w-full' to force full width and 'pt-[10vh]' for spacing
    <div className="min-h-screen w-full bg-[#FAD2D2] text-[#48004F] pt-[10vh] px-4 md:px-10 pb-20">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">OPTICS</h1>
          <Aperture className="w-10 h-10 md:w-16 md:h-16 animate-spin-slow opacity-50" />
        </div>
        <p className="text-[#995D81] font-mono text-sm tracking-widest uppercase">Captured Photons // Raw Data</p>
        <div className="h-px w-full bg-[#995D81] opacity-30 mt-6" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] max-w-6xl mx-auto">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 group ${photo.span}`}
          >
            <div className="absolute inset-0 bg-[#48004F]/10 group-hover:bg-transparent transition-colors duration-500" />
            
            {/* Simple white card for now */}
            <div className="w-full h-full bg-white flex items-start p-6">
               <span className="text-[#48004F] font-bold text-sm">{photo.title}</span>
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}