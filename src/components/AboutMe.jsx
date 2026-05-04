import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, ShieldCheck, Zap, Layout, Smartphone, Database, Bot, TrendingUp, MapPin, Briefcase, GraduationCap, Cpu } from 'lucide-react';

const coreSkills = [
  {
    category: 'Frontend Development',
    icon: <Layout size={20} />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive UI']
  },
  {
    category: 'Backend & Systems',
    icon: <Database size={20} />,
    skills: ['Node.js', 'Python', 'REST API', 'Supabase', 'Database Design', 'Auth (JWT, OAuth)', 'API Integrations']
  },
  {
    category: 'AI & Automation',
    icon: <Bot size={20} />,
    skills: ['AI Integration', 'Prompt Engineering', 'Chatbots', 'Workflow Automation', 'AI-Powered UX']
  },
  {
    category: 'Digital Marketing',
    icon: <TrendingUp size={20} />,
    skills: ['SEO Optimization', 'Social Media Strategies', 'Conversion Optimization', 'Content Marketing', 'Analytics']
  }
];

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen pt-28 md:pt-32 pb-20 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-[25%] -left-20 w-[400px] h-[400px] bg-accent-glow rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[25%] -right-20 w-[400px] h-[400px] bg-[rgba(52,211,153,0.06)] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Intro Section */}
        <div className="max-w-full md:max-w-[900px] mx-auto flex flex-col items-start md:items-center md:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-glow border border-[rgba(34,211,238,0.2)] text-accent text-sm font-semibold mb-7"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-accent opacity-60 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-accent block" />
            </span>
            I'm open to new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-fluid-h1 font-black tracking-tight mb-6 md:text-center"
          >
            Engineering with{' '}
            <span className="bg-gradient-to-br from-accent to-[#34d399] bg-clip-text text-transparent">
              Purpose.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-p text-text-secondary mb-10 max-w-[700px] md:mx-auto space-y-4"
          >
            <p>
              I’m <strong>Wisdom Godwin</strong>, a Full Stack Developer dedicated to building high-performance, scalable, and visually stunning web applications that deliver real results.
            </p>
            <p>
              Beyond standard web development, I integrate AI, automate workflows, and implement growth-driven strategies. I’m also the creator of <span className="font-bold text-white">Engagflow</span> — a platform designed to help creators and businesses boost engagement and grow faster through a reward-driven system.
            </p>
          </motion.div>
        </div>

        {/* Experience & Education Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-white">Experience & Education</h3>
            <p className="text-slate-400 mt-2">My journey and academic background.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Professional Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#34d399]/10 rounded-xl flex items-center justify-center text-[#34d399]">
                  <Briefcase size={20} />
                </div>
                <h4 className="text-xl font-bold text-white">Professional Experience</h4>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-800 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#34d399] border-4 border-background" />
                  <span className="text-xs font-bold text-[#34d399] uppercase tracking-wider mb-1 block">Present</span>
                  <h5 className="text-lg font-bold text-white">Full Stack Developer</h5>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Now operating as an experienced Full Stack Developer, architecting and building end-to-end robust web applications, integrating AI, and delivering premium digital experiences.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-700 border-4 border-background" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Since 2022</span>
                  <h5 className="text-lg font-bold text-white">Frontend Developer</h5>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Started my journey specializing in dynamic and responsive user interfaces, mastering modern web frameworks to create pixel-perfect digital products.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <GraduationCap size={20} />
                </div>
                <h4 className="text-xl font-bold text-white">Education & Training</h4>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-800 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <span className="text-xs font-bold text-accent uppercase tracking-wider mb-1 block">2024 — 2028</span>
                  <h5 className="text-lg font-bold text-white">Bachelor of Computer Science</h5>
                  <span className="text-xs text-slate-300 font-semibold mb-2 block">National Open University</span>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Currently focusing on software development, web technologies, and computer science fundamentals while actively building real-world projects to expand my technical expertise.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-700 border-4 border-background" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">2025</span>
                  <h5 className="text-lg font-bold text-white">Mita School</h5>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Advanced technical training and upskilling in modern software engineering principles.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-700 border-4 border-background" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">2023 — 2024</span>
                  <h5 className="text-lg font-bold text-white">Edlivky Coding Academy</h5>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Intensive coding bootcamp focused on hands-on web development and foundational programming.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Skills Section inside About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-card border border-border rounded-3xl p-8 md:p-10 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center justify-center text-center gap-3 mb-10">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
              <Cpu size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">Core Capabilities</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive toolkit spanning across the modern web stack, from responsive frontends to robust backends and intelligent automation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {coreSkills.map((category, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4 bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                <div className="flex items-center justify-center gap-2 text-white">
                  <span className="text-accent">{category.icon}</span>
                  <h4 className="font-bold text-lg">{category.category}</h4>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="bg-white/5 border border-white/10 text-slate-300 px-3 py-1.5 rounded-full text-[13px] font-semibold hover:border-accent hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
