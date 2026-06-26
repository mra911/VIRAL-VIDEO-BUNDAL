import { motion } from 'motion/react';
import { Instagram, Youtube, Facebook, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-orange-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Start Earning with Faceless Channels
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-tight">
            Upload. Grow. Earn. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
              Viral Video Bundle
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Get instant access to thousands of ready-made, highly engaging videos. Perfect for YouTube Shorts, Instagram Reels, and Facebook. No editing skills required!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#pricing" className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 transform hover:scale-105">
              Get Instant Access <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <Instagram className="w-6 h-6 text-pink-500" />
              <span className="font-medium">Instagram Reels</span>
            </div>
            <div className="flex items-center gap-2">
              <Youtube className="w-6 h-6 text-red-500" />
              <span className="font-medium">YouTube Shorts</span>
            </div>
            <div className="flex items-center gap-2">
              <Facebook className="w-6 h-6 text-blue-500" />
              <span className="font-medium">Facebook</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
