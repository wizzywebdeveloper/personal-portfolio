import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Rocket } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={28} />,
    title: 'Scalable Web Development',
    description: 'I build robust, high-performance web applications using modern technologies like React, Next.js, and Node.js. Focus on clean architecture and maintainability.'
  },
  {
    icon: <Bot size={28} />,
    title: 'AI & Automation Integration',
    description: 'Enhancing digital products with intelligent AI solutions and automated workflows to save time, reduce costs, and create smarter user experiences.'
  },
  {
    icon: <Rocket size={28} />,
    title: 'Growth & Engagement Systems',
    description: 'Designing reward-driven ecosystems and SEO-optimized platforms (like Engagflow) to help creators and businesses maximize their online visibility.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            What I{' '}
            <span className="bg-gradient-to-br from-accent to-[#34d399] bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-[15px] md:text-lg text-slate-400 leading-relaxed">
            Delivering comprehensive solutions that bridge the gap between technical excellence and business growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-3xl p-8 flex flex-col items-start hover:border-accent/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-[15px] text-slate-400 leading-relaxed flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
