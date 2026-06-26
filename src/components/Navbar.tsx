import { motion } from 'motion/react';
import { PlaySquare, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <PlaySquare className="h-8 w-8 text-red-500" />
            <span className="font-display font-bold text-xl tracking-tight text-white">ViralBundle</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Benefits</a>
            <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#pricing" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-red-500/25">
              Buy Bundle Now
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-slate-300 hover:text-white transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
