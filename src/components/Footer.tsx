export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white">
          <span className="font-display font-bold text-xl">ViralBundle</span>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} ViralBundle. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
