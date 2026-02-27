import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Dock from "@/components/Dock";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AB Legacy | OS",
  description: "Personal Portfolio of Atharva Bulbule",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen text-gray-900`}>
        
        {/* 🎥 VIDEO WALLPAPER */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="fixed inset-0 w-full h-full object-cover -z-50"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* 🧊 OVERLAY: Makes the video slightly frosted so panels pop */}
        <div className="fixed inset-0 bg-white/10 backdrop-blur-[2px] -z-40" />
        
        {children}
        <Dock />
      </body>
    </html>
  );
}