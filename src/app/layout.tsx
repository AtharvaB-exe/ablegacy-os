"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Dock from "@/components/Dock";
import LandingPage from "@/components/LandingPage";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showLanding, setShowLanding] = useState(true);
  const pathname = usePathname();

  // Only show landing page on the homepage ("/")
  useEffect(() => {
    if (pathname !== "/") {
      setShowLanding(false);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111]`}>
        <AnimatePresence mode="wait">
          {showLanding && pathname === "/" && (
            <LandingPage onComplete={() => setShowLanding(false)} />
          )}
        </AnimatePresence>
        
        <main className={showLanding && pathname === "/" ? "overflow-hidden h-screen" : ""}>
          {children}
        </main>
        
        {/* Dock shows after landing is done, or immediately on other pages */}
        {(!showLanding || pathname !== "/") && <Dock />}
      </body>
    </html>
  );
}