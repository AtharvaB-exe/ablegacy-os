import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atharva Bulbule",
  description: "Personal OS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 🛠️ FIX: Added 'w-full' and removed any padding */}
      <body className={`${inter.className} w-full m-0 p-0 overflow-x-hidden bg-[#F2F2F2]`}>
        {children}
      </body>
    </html>
  );
}