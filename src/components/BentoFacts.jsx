import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Cpu, Layout, Smartphone, Database, Bot, TrendingUp, ShieldCheck } from 'lucide-react';

const coreSkills = [
  {
    category: 'Frontend Development',
    icon: <Layout size={20} />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive UI Design']
  },
  {
    category: 'Backend & Systems',
    icon: <Database size={20} />,
    skills: ['Node.js', 'Python', 'REST API', 'Supabase', 'Database Design', 'Auth (JWT, OAuth)', 'API Integrations']
  },
  {
    category: 'AI & Automation',
    icon: <Bot size={20} />,
    skills: ['AI Integration (APIs & SDKs)', 'Prompt Engineering', 'Chatbot Development', 'Workflow Automation', 'AI-Powered UX']
  },
  {
    category: 'Digital Marketing',
    icon: <TrendingUp size={20} />,
    skills: ['SEO Optimization', 'Social Media Strategies', 'Conversion Optimization', 'Content Marketing', 'Analytics']
  },
  {
    category: 'Performance & Quality',
    icon: <ShieldCheck size={20} />,
    skills: ['Web Accessibility (WCAG)', 'Performance Optimization', 'Cross-Browser Compatibility', 'Scalable Architecture']
  }
];

const BentoFacts = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-5">
        
        {/* Top Grid: About + Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-center items-center text-center bg-card border border-border rounded-3xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-fluid-h2 font-black mb-5">
              Engineering with{' '}
              <span className="bg-gradient-to-br from-accent to-[#34d399] bg-clip-text text-transparent">Purpose</span>.
            </h2>
            <p className="text-fluid-p text-slate-400 mb-8 max-w-[800px]">
              I'm a Full Stack developer who focuses on building interfaces that are accessible, responsive, and maintainable, while ensuring robust backend functionality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
              {[
                { icon: <Layout size={22} />, title: 'Frontend Architecture', sub: 'Building scalable React applications.' },
                { icon: <Smartphone size={22} />, title: 'Responsive UI', sub: 'Seamless experience on all devices.' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 min-w-[48px] bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-white">{item.title}</h4>
                    <p className="text-[13px] text-slate-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Info Cards */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-3 bg-card border border-border rounded-3xl p-6 backdrop-blur-sm flex-1"
            >
              <div className="w-[52px] h-[52px] min-w-[52px] bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Based In</p>
                <p className="text-lg font-bold text-white">Nigeria</p>
                <p className="text-[12px] text-slate-500">Working Remotely</p>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="flex flex-col items-center text-center justify-center gap-2 bg-card border border-border rounded-3xl p-6 backdrop-blur-sm flex-1"
            >
              <div className="flex items-center gap-2 text-[#34d399]">
                <Briefcase size={16} />
                <p className="text-[10px] font-bold uppercase tracking-widest">Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-white">Edlivky Group</h4>
                <p className="text-[13px] text-slate-400">Full Stack Developer</p>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="flex flex-col items-center text-center justify-center gap-2 bg-card border border-border rounded-3xl p-6 backdrop-blur-sm flex-1"
            >
              <div className="flex items-center gap-2 text-accent">
                <GraduationCap size={16} />
                <p className="text-[10px] font-bold uppercase tracking-widest">Learning</p>
              </div>
              <div>
                <h4 className="font-bold text-white">MitaSchool</h4>
                <p className="text-[13px] text-slate-400">Ongoing Professional Dev</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Row: Core Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-card border border-border rounded-3xl p-8 md:p-10 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center justify-center text-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
              <Cpu size={24} />
            </div>
            <h3 className="text-2xl font-black text-white">Core Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {coreSkills.map((category, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4">
                <div className="flex items-center justify-center gap-2 text-white">
                  <span className="text-accent">{category.icon}</span>
                  <h4 className="font-bold">{category.category}</h4>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="bg-white/5 border border-white/10 text-slate-300 px-3 py-1.5 rounded-full text-[12px] font-semibold hover:border-accent hover:text-accent transition-colors"
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

export default BentoFacts;
