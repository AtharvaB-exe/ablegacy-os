import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 z-10">
      
      {/* 🧊 GLASS PANEL */}
      <div className="glass-panel p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
        
        <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl">
          <Image src="/me.jpg" alt="Atharva Bulbule" fill className="object-cover" />
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#1e293b] uppercase mb-2">
            Atharva Bulbule
          </h1>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
            <span className="px-4 py-1.5 glass-button text-gray-700 font-bold text-xs uppercase tracking-wider">CSD STUDENT</span>
            <span className="px-4 py-1.5 glass-button text-gray-700 font-bold text-xs uppercase tracking-wider">FREELANCER</span>
          </div>
          
          <p className="text-xl text-gray-800 font-medium max-w-lg">
            Bridging the gap between creative visual design and functional system engineering.
          </p>
        </div>
      </div>
      
    </main>
  );
}