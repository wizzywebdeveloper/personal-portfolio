import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about-me" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm max-w-4xl mx-auto relative"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-accent/10 blur-[80px] pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 md:text-center">
            About <span className="bg-gradient-to-br from-accent to-[#34d399] bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="space-y-6 text-[15px] md:text-lg text-slate-300 leading-relaxed md:text-center">
            <p>
              I’m Wisdom Godwin, a Full Stack Developer focused on building scalable, high-performance web applications that deliver real results.
            </p>
            <p>
              I specialize in React, Next.js, Node.js, and Python, combining development with AI integration, automation, and growth-driven strategies.
            </p>
            <p className="font-semibold text-white">
              I’m the creator of Engagflow — a platform designed to help creators and businesses boost engagement, increase visibility, and grow faster through a reward-driven system.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
