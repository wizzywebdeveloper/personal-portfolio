import React from 'react';
import { Send, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors focus:border-accent";
const labelClasses = "block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-slate-900/50 border border-white/5 rounded-[32px] p-8 md:p-20 overflow-hidden relative backdrop-blur-md">
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 relative z-10">
            {/* Left — Info */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
                Let's build something{' '}
                <span className="bg-gradient-to-br from-accent to-[#34d399] bg-clip-text text-transparent">extraordinary</span>.
              </h2>
              <p className="text-[15px] md:text-lg text-slate-400 leading-relaxed mb-10">
                Whether you have a specific project in mind or just want to chat about web development, I'm always open to new connections.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  { icon: <Mail size={22} />, label: 'Email Me', value: 'wisdomge.dev@gmail.com', href: 'mailto:wisdomge.dev@gmail.com', colorClass: 'text-accent', bgClass: 'bg-accent/10' },
                  { icon: <Phone size={22} />, label: 'Call / WhatsApp', value: '0704 830 9498', href: 'https://wa.me/2347048309498', colorClass: 'text-[#34d399]', bgClass: 'bg-[#34d399]/10' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className={`w-[52px] h-[52px] min-w-[52px] rounded-2xl flex items-center justify-center ${item.bgClass} ${item.colorClass}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
                      <a href={item.href} className="text-[15px] md:text-[17px] font-bold text-white no-underline hover:text-accent transition-colors">{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-10"
            >
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses}>Name</label>
                    <input type="text" placeholder="John Doe" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Email</label>
                    <input type="email" placeholder="john@example.com" className={inputClasses} />
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Subject</label>
                  <input type="text" placeholder="Project Inquiry" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent text-background px-4 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2.5 w-full hover:scale-[1.02] transition-transform"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
