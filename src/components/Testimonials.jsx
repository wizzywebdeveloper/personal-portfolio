import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Plus, X, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const seedTestimonials = [
  {
    message: "Wisdom built a stunning rentals website for us. The booking system is flawless and our occupancy rate has doubled since launch.",
    name: "Oluwaseun Adebayo",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=150&q=80"
  },
  {
    message: "EliteShop completely transformed our retail business. The payment integration and user interface are incredibly smooth. Sales are up 40%!",
    name: "Fatima Hassan",
    role: "CEO @ EliteShop",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=150&q=80"
  },
  {
    message: "Our hotel booking platform now runs like a dream. The search speed and responsive design Wisdom implemented are world-class.",
    name: "Kwame Mensah",
    role: "Travel Agent",
    image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?w=150&q=80"
  },
  {
    message: "Using Engagflow has skyrocketed our social presence. The automated reward systems helped us gain 10k real followers in just a month.",
    name: "James Carter",
    role: "Digital Creator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    message: "The vacation rentals platform is so intuitive. Guests love the clean UI, and our admin team saves hours every day on management tasks.",
    name: "Chidi Okafor",
    role: "Property Owner",
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=150&q=80"
  },
  {
    message: "I was struggling with a slow site until Wisdom rebuilt our frontend. The performance leap is amazing, and bounce rates dropped significantly.",
    name: "Amira Bello",
    role: "E-commerce Founder",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&q=80"
  },
  {
    message: "An absolute professional. He listened to our needs and delivered a platform that exceeded our expectations in every way. The UX is just brilliant.",
    name: "Sarah Jenkins",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
  }
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      if (!supabase) throw new Error('Supabase not configured');

      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials([...(data || []), ...seedTestimonials]);
    } catch (err) {
      console.warn('Using seed testimonials (DB unavailable):', err.message);
      setTestimonials(seedTestimonials);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!supabase) { setSubmitStatus('error'); return; }
    setSubmitStatus('loading');
    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([
          { name: formData.name, message: formData.message, status: 'pending' }
        ]);
        
      if (error) throw error;
      
      setSubmitStatus('success');
      setTimeout(() => {
        setShowModal(false);
        setSubmitStatus(null);
        setFormData({ name: '', message: '' });
      }, 3000);
    } catch (err) {
      console.error('Error submitting testimonial:', err);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="md:text-left text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Client{' '}
              <span className="bg-gradient-to-br from-accent to-[#34d399] bg-clip-text text-transparent">Feedback</span>
            </h2>
            <p className="text-slate-400">What people are saying about my work.</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-accent hover:border-accent hover:text-background transition-all"
          >
            <Plus size={18} /> Share Your Experience
          </button>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-12"><Loader2 className="animate-spin text-accent" size={40} /></div>
        ) : (testimonials.length > 0 ? testimonials : seedTestimonials).length === 0 ? (
          <div className="text-center py-12 text-slate-500">No testimonials to display yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {(testimonials.length > 0 ? testimonials : seedTestimonials).map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-3xl p-8 relative flex flex-col justify-between"
              >
                <div className="absolute top-8 right-8 text-white/5">
                  <Quote size={60} fill="currentColor" />
                </div>
                
                <p className="text-[15px] md:text-lg text-slate-300 leading-relaxed italic mb-8 relative z-10">
                  "{test.message}"
                </p>
                
                <div className="flex items-center gap-4 relative z-10">
                  {test.image ? (
                    <img 
                      src={test.image} 
                      alt={test.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent/20 flex items-center justify-center text-accent font-bold text-lg">
                      {test.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-white font-bold text-[15px]">{test.name}</h4>
                    {test.role && <p className="text-[13px] text-slate-500">{test.role}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-border rounded-3xl p-6 md:p-8 w-full max-w-md relative"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-black text-white mb-6">Leave a Review</h3>
              
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Quote size={32} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Thank You!</h4>
                  <p className="text-slate-400">Your testimonial has been submitted and is pending review.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2">Your Name</label>
                    <input 
                      required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2">Your Message</label>
                    <textarea 
                      required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent min-h-[120px] resize-none"
                      placeholder="Share your experience working with me..."
                    />
                  </div>
                  {submitStatus === 'error' && <p className="text-rose-400 text-sm">Failed to submit. Please try again.</p>}
                  <button 
                    type="submit" disabled={submitStatus === 'loading'}
                    className="w-full bg-accent text-background font-bold rounded-xl px-4 py-3 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitStatus === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'Submit Testimonial'}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
