"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Camera, Aperture, Upload } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80", title: "Mountain Haze", settings: "ISO 400 • f/2.8", size: "row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80", title: "Cyber City", settings: "ISO 800 • f/1.8", size: "row-span-1" },
];

export default function PhotosPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkAdmin = () => setIsAdmin(localStorage.getItem("xab_admin") === "true");
    checkAdmin();
    window.addEventListener("adminChange", checkAdmin);
    return () => window.removeEventListener("adminChange", checkAdmin);
  }, []);

  return (
    // ✨ THEME: Light Pink Background, Deep Purple Text
    <div className="min-h-screen pt-24 pb-32 px-4 md:px-12 max-w-7xl mx-auto relative bg-[#FAD2D2] text-[#48004F]">
      
      <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => alert(`Selected: ${e.target.files?.[0]?.name}`)} />

      <div className="mb-12 flex justify-between items-end border-b-2 border-[#D18E9B] pb-6">
        <div>
          <h1 className="text-5xl font-black mb-2 tracking-tighter flex items-center gap-3">
            OPTICS <Aperture className="animate-spin-slow opacity-50 text-[#48004F]" />
          </h1>
          <p className="text-xl font-medium text-[#7A4269] font-mono">CAPTURED PHOTONS // RAW DATA</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        <AnimatePresence>
          {isAdmin && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => fileInputRef.current?.click()}
              className="row-span-1 rounded-2xl border-2 border-dashed border-[#48004F] bg-[#D18E9B]/20 flex flex-col items-center justify-center cursor-pointer hover:bg-[#D18E9B]/40"
            >
              <Upload size={28} />
              <h3 className="font-bold text-lg mt-2">Add Exposure</h3>
            </motion.div>
          )}
        </AnimatePresence>

        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.02 }}
            className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-white shadow-xl ${photo.size}`}
          >
            <Image src={photo.src} alt={photo.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#48004F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-[#FAD2D2] text-2xl font-bold">{photo.title}</h3>
              <p className="text-[#D18E9B] font-mono text-sm font-bold">{photo.settings}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}