import React from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isZoomed, setIsZoomed] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-[20px] p-3 md:py-4 md:px-8 flex items-center justify-between gap-3 shadow-lg">
          
          {/* Logo + Name */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div
              onClick={() => setIsZoomed(true)}
              className="w-9 h-9 md:w-11 md:h-11 min-w-[36px] md:min-w-[44px] rounded-full overflow-hidden border-2 border-accent/30 cursor-zoom-in shrink-0 transition-transform hover:scale-105"
            >
              <img src="/logo.png" alt="Wisdom Godwin" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <h1 className="text-[13px] md:text-[17px] font-black leading-tight whitespace-nowrap overflow-hidden text-ellipsis text-white">Wisdom Godwin</h1>
              <p className="hidden md:block text-[9px] text-accent uppercase tracking-[0.15em] font-bold">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 shrink-0">
            <a href="#about" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">About Me</a>
            <a href="#projects" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#testimonials" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="bg-accent text-background px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all">
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-1 hover:bg-white/10 rounded-lg transition-colors shrink-0"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-[80px] left-5 right-5 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-[20px] p-8 z-50 shadow-2xl"
          >
            <div className="flex flex-col gap-6 items-center">
              <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-bold text-white">About Me</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-xl font-bold text-white">Projects</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-xl font-bold text-white">Testimonials</a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-accent text-background px-12 py-3.5 rounded-xl text-base font-bold w-full text-center hover:scale-105 transition-transform"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Zoom Overlay */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-[480px]"
            >
              <div className="bg-slate-900/60 border border-white/10 rounded-[40px] p-8 flex items-center justify-center aspect-square overflow-hidden shadow-2xl">
                <img src="/logo.png" alt="Logo Zoomed" className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]" />
              </div>
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white/5 border border-white/15 rounded-full px-8 py-3 text-white flex items-center gap-2 font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <ArrowLeft size={18} /> Return to Site
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
