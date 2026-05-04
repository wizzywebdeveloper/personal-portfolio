import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const initialProjects = [
  { 
    title: 'Engagflow', 
    description: 'Designed and built a scalable platform that combines social engagement systems with growth-driven strategies — enabling content creators and online sellers to increase visibility, boost engagement, and accelerate monetization.', 
    tech: ['React', 'Node.js', 'Tailwind', 'Supabase'], 
    link: '#', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' 
  },
  { title: 'Wisdom.dev Portfolio', description: 'A responsive personal portfolio with dark mode and a working contact form powered by Formspree.', tech: ['HTML', 'CSS', 'React'], link: '#', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
  { title: 'EliteShop E-commerce', description: 'Responsive landing page and product components for higher conversions.', tech: ['HTML', 'CSS', 'React'], link: 'https://wizzywebdeveloper.github.io/EliteShop/', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80' },
  { title: 'Hotel Booking Agent Website', description: 'A clean, user-friendly hotel booking website designed to help travelers find and reserve the perfect stay.', tech: ['HTML', 'CSS', 'JavaScript'], link: 'https://wizzywebdeveloper.github.io/Hotels-Around-the-World/', image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80' },
  { title: 'Connect Hub Demo', description: 'A business networking platform designed to help professionals and brands connect, collaborate, and grow.', tech: ['Audit', 'Fixes', 'Tests'], link: 'https://wizzywebdeveloper.github.io/ConnectHub/', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80' },
  { title: 'Vacation Rentals', description: 'A modern booking platform that helps travelers find beautiful homes and apartments for short stays.', tech: ['React', 'Tailwind'], link: '#', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80' },
  { title: 'Game Boosting Service', description: 'A trusted online platform that helps gamers level up faster with professional boosting services.', tech: ['React', 'Node.js'], link: '#', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80' },
  { title: 'Beauty Care Shop', description: 'An elegant eCommerce website designed for beauty brands to showcase products.', tech: ['React', 'CSS'], link: '#', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80' },
  { title: 'School Website', description: 'A professional and informative school platform designed to attract parents.', tech: ['HTML', 'CSS'], link: '#', image: 'https://images.unsplash.com/photo-1523050337458-5c5677d3f260?w=800&q=80' },
];

const Projects = () => {
  const [projects, setProjects] = React.useState(initialProjects);

  React.useEffect(() => {
    const saved = localStorage.getItem('wisdom_projects_v2');
    if (saved) {
      const parsed = JSON.parse(saved);
      const mapped = parsed.map(p => ({
        title: p.title,
        description: p.description || 'Project details coming soon.',
        tech: Array.isArray(p.tech) ? p.tech : (p.tech ? p.tech.split(',').map(t => t.trim()) : ['React']),
        link: p.link || '#',
        image: p.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      }));
      const final = [...mapped];
      initialProjects.forEach(initP => {
        const exists = final.some(p => p.title.toLowerCase().includes(initP.title.toLowerCase().split(' ')[0]));
        if (!exists) final.push(initP);
      });
      setProjects(final);
    }
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="flex flex-col items-center md:text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Featured{' '}
            <span className="bg-gradient-to-br from-accent to-[#34d399] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-[15px] md:text-lg text-slate-400 leading-relaxed mb-6">
            A collection of projects that demonstrate my ability to solve complex problems and deliver high-quality digital products.
          </p>
          <div className="hidden md:block bg-accent/10 border border-accent/20 text-accent px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
            Case Studies & Demos
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent pointer-events-none" />
                <a
                  href={project.link} target="_blank" rel="noreferrer"
                  className="absolute top-3 right-3 w-9 h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors hover:bg-accent hover:text-background"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Body */}
              <div className="p-5 md:p-7 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-bold uppercase tracking-widest text-accent">
                      {t}{idx < project.tech.length - 1 && ' •'}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2.5 text-white">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">{project.description}</p>
                <a
                  href={project.link} target="_blank" rel="noreferrer"
                  className="text-[13px] font-bold text-accent no-underline inline-flex items-center gap-1.5 transition-transform hover:translate-x-1"
                >
                  View Case Study →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
