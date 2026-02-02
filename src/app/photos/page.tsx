"use client";

import { motion } from "framer-motion";
import { Aperture } from "lucide-react";

// 👇 Real demo photos so it's not empty
const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000", title: "Mountain Haze", span: "row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000", title: "Cyber City", span: "row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=1000", title: "Neon Rain", span: "row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", title: "Landscape", span: "row-span-1" },
  { id: 5, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000", title: "Portrait", span: "row-span-2" },
];

export default function PhotosPage() {
  return (
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
            {/* Image */}
            <img 
               src={photo.src} 
               alt={photo.title} 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#48004F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <span className="text-[#FAD2D2] font-bold text-lg tracking-widest uppercase border border-[#FAD2D2] px-4 py-2 rounded-lg">
                 {photo.title}
               </span>
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}