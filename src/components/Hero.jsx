import React from 'react';
import { Code2, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-28 md:pt-32 pb-20 overflow-hidden relative"
    >
      {/* Background Glows */}
      <div className="absolute top-[25%] -left-20 w-[400px] h-[400px] bg-accent-glow rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[25%] -right-20 w-[400px] h-[400px] bg-[rgba(52,211,153,0.06)] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-full md:max-w-[900px] mx-auto flex flex-col items-start md:items-center md:text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-glow border border-[rgba(34,211,238,0.2)] text-accent text-sm font-semibold mb-7"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-accent opacity-60 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-accent block" />
            </span>
            Available for new opportunities
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-fluid-h1 font-black tracking-tight mb-6 md:text-center"
          >
            Crafting{' '}
            <span className="bg-gradient-to-br from-accent to-[#34d399] bg-clip-text text-transparent">
              Digital
            </span>
            <br />
            Excellence.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-fluid-p text-text-secondary mb-10 max-w-[600px] md:mx-auto"
          >
            I'm Wisdom Godwin, a Full Stack Engineer dedicated to building high-performance, scalable, and visually stunning web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 w-full md:max-w-[480px] justify-center"
          >
            <a
              href="#projects"
              className="bg-accent text-background px-5 md:px-8 py-3.5 md:py-4 rounded-xl text-[15px] md:text-[17px] font-bold no-underline inline-flex items-center justify-center gap-2 flex-1 whitespace-nowrap transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              Explore My Work →
            </a>
            <a
              href="#contact"
              className="bg-white/5 border border-white/10 text-white px-5 md:px-8 py-3.5 md:py-4 rounded-xl text-[15px] md:text-[17px] font-bold no-underline inline-flex items-center justify-center gap-2 flex-1 whitespace-nowrap transition-all hover:border-accent hover:bg-white/10"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24"
        >
          {[
            { icon: <Code2 size={22} />, label: 'Modern Stack', value: 'React/Python' },
            { icon: <Rocket size={22} />, label: 'Experience', value: '4+ Years' },
            { icon: <ShieldCheck size={22} />, label: 'Quality', value: 'Pixel Perfect' },
            { icon: <Zap size={22} />, label: 'Focus', value: 'UX/Performance' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 md:p-7 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:border-accent flex flex-col items-center text-center"
            >
              <div className="text-accent mb-3">{stat.icon}</div>
              <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold mb-1">{stat.label}</p>
              <p className="text-[15px] md:text-[17px] font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
