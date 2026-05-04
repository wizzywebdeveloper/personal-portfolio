import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Settings, 
  LogOut, 
  Plus, 
  User, 
  Trash2, 
  Edit,
  X,
  Lock,
  MessageSquare,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [adminEmail] = useState('wisdom@example.com');
  
  // Projects State
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('wisdom_projects_v2');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'Real Estate App', status: 'Published', tech: 'React, Node.js', description: 'Modern property listing platform' },
      { id: 2, title: 'E-commerce Site', status: 'Published', tech: 'Next.js, Stripe', description: 'Full-stack shopping experience' }
    ];
  });

  // Testimonials State
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(false);

  // Social Links State
  const socialDefaults = {
    github: 'https://github.com/wizzywebdeveloper',
    facebook: '',
    linkedin: 'https://www.linkedin.com/in/wisdom-godwin-edet-206294324',
    instagram: '',
    twitter: 'https://x.com/wizzywebdev',
    whatsapp: 'https://wa.me/2347048309498'
  };
  const [socialLinks, setSocialLinks] = useState(() => {
    const saved = localStorage.getItem('wisdom_social_links');
    return saved ? { ...socialDefaults, ...JSON.parse(saved) } : socialDefaults;
  });

  useEffect(() => {
    localStorage.setItem('wisdom_projects_v2', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('wisdom_social_links', JSON.stringify(socialLinks));
  }, [socialLinks]);

  // Fetch Testimonials
  useEffect(() => {
    if (activeTab === 'testimonials') {
      fetchTestimonials();
    }
  }, [activeTab]);

  const fetchTestimonials = async () => {
    setLoadingTestimonials(true);
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setTestimonials(data || []);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
    } finally {
      setLoadingTestimonials(false);
    }
  };

  const updateTestimonialStatus = async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ status: newStatus })
        .eq('id', id);
      if (error) throw error;
      fetchTestimonials(); // Refresh
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const deleteTestimonial = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return;
    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);
      if (error) throw error;
      fetchTestimonials(); // Refresh
    } catch (err) {
      console.error('Error deleting testimonial:', err);
    }
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tech: '',
    link: '',
    image: ''
  });

  const handleLogout = () => {
    localStorage.removeItem('wisdom_admin_auth');
    window.location.href = '/wisdom-portal';
  };

  const handleSaveProject = (e) => {
    e.preventDefault();
    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? { ...formData, id: p.id, status: 'Published' } : p));
    } else {
      const newProject = {
        ...formData,
        id: Date.now(),
        status: 'Published'
      };
      setProjects([newProject, ...projects]);
    }
    setShowModal(false);
    setFormData({ title: '', description: '', tech: '', link: '', image: '' });
  };

  const openEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description || '',
      tech: project.tech || '',
      link: project.link || '',
      image: project.image || ''
    });
    setShowModal(true);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      {/* Mobile Toggle */}
      <div className="mobile-nav-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <X size={24} /> : <LayoutDashboard size={24} />}
      </div>

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="flex items-center gap-3 mb-12">
          <div 
            className="rounded-full overflow-hidden border-2 border-cyan-500/20 shadow-lg"
            style={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px' }}
          >
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="block" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <h2 className="font-bold text-lg text-white">Wisdom Admin</h2>
        </div>

        <nav className="flex-1">
          <div 
            onClick={() => { setActiveTab('overview'); setIsSidebarOpen(false); }}
            className={`sidebar-link ${activeTab === 'overview' ? 'active' : ''}`}
          >
            <LayoutDashboard size={18} /> Dashboard
          </div>
          <div 
            onClick={() => { setActiveTab('projects'); setIsSidebarOpen(false); }}
            className={`sidebar-link ${activeTab === 'projects' ? 'active' : ''}`}
          >
            <Briefcase size={18} /> Projects
          </div>
          <div 
            onClick={() => { setActiveTab('testimonials'); setIsSidebarOpen(false); }}
            className={`sidebar-link ${activeTab === 'testimonials' ? 'active' : ''}`}
          >
            <MessageSquare size={18} /> Testimonials
          </div>
          <div 
            onClick={() => { setActiveTab('settings'); setIsSidebarOpen(false); }}
            className={`sidebar-link ${activeTab === 'settings' ? 'active' : ''}`}
          >
            <Settings size={18} /> Settings
          </div>
        </nav>

        <div 
          onClick={handleLogout} 
          className="sidebar-link mt-auto"
          style={{ color: '#fb7185' }}
        >
          <LogOut size={18} /> Logout
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {activeTab === 'overview' && (
          <div key="overview">
            <header className="admin-header">
              <div>
                <h1 className="text-4xl font-black mb-6 text-white">Dashboard Overview</h1>
                <p className="text-slate-500">Welcome back, Wisdom. Here's your site performance.</p>
              </div>
              <button onClick={() => { setEditingProject(null); setFormData({ title: '', description: '', tech: '', link: '', image: '' }); setShowModal(true); }} className="btn-primary">
                <Plus size={18} /> New Project
              </button>
            </header>

            <div className="stats-grid">
              <div className="admin-card">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-cyan-400" style={{ background: 'rgba(34,211,238,0.1)' }}>
                    <Briefcase size={20} />
                  </div>
                  <span className="text-xs font-bold" style={{ color: '#34d399' }}>+12%</span>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">Total Projects</p>
                <p className="text-4xl font-black text-white">{projects.length}</p>
              </div>
              <div className="admin-card">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-indigo-400" style={{ background: 'rgba(99,102,241,0.1)' }}>
                    <User size={20} />
                  </div>
                  <span className="text-xs font-bold" style={{ color: '#34d399' }}>+5.2k</span>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">Total Views</p>
                <p className="text-4xl font-black text-white">12.8k</p>
              </div>
              <div className="admin-card">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-rose-400" style={{ background: 'rgba(244,63,94,0.1)' }}>
                    <LogOut size={20} className="rotate-180" />
                  </div>
                  <span className="text-xs font-bold" style={{ color: '#fb7185' }}>-2%</span>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">Conversion</p>
                <p className="text-4xl font-black text-white">4.5%</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div key="projects">
            <header className="admin-header">
              <div>
                <h1 className="text-4xl font-black mb-6 text-white">Manage Projects</h1>
                <p className="text-slate-500">Add, edit, or delete items from your portfolio.</p>
              </div>
              <button onClick={() => { setEditingProject(null); setFormData({ title: '', description: '', tech: '', link: '', image: '' }); setShowModal(true); }} className="btn-primary">
                <Plus size={18} /> Create Project
              </button>
            </header>

            <div className="admin-card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                  <thead style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border)' }}>
                    <tr>
                      <th style={{ padding: '24px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', color: '#64748b' }}>Project</th>
                      <th style={{ padding: '24px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', color: '#64748b' }}>Status</th>
                      <th style={{ padding: '24px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', color: '#64748b' }}>Date</th>
                      <th style={{ padding: '24px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', color: '#64748b', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.id} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '24px' }}>
                          <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500" style={{ background: 'rgba(255,255,255,0.05)', width: '40px', height: '40px' }}>
                              <Briefcase size={18} />
                            </div>
                            <span className="font-bold text-white">{project.title}</span>
                          </div>
                        </td>
                        <td style={{ padding: '24px' }}>
                          <span style={{ padding: '4px 12px', borderRadius: '99px', fontSize: '10px', fontWeight: '900', background: 'rgba(52,211,153,0.1)', color: '#34d399' }}>
                            PUBLISHED
                          </span>
                        </td>
                        <td style={{ padding: '24px', fontSize: '14px', color: '#64748b' }}>May 04, 2026</td>
                        <td style={{ padding: '24px', textAlign: 'right' }}>
                          <div className="flex justify-end gap-2" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                            <button onClick={() => openEdit(project)} style={{ padding: '8px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
                              <Edit size={16} />
                            </button>
                            <button 
                              onClick={() => { if(window.confirm('Delete?')) setProjects(projects.filter(p => p.id !== project.id)) }}
                              style={{ padding: '8px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fb7185', cursor: 'pointer' }}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div key="testimonials">
            <header className="admin-header">
              <div>
                <h1 className="text-4xl font-black mb-6 text-white">Testimonials</h1>
                <p className="text-slate-500">Approve or reject client feedback to show on your site.</p>
              </div>
              <button onClick={fetchTestimonials} className="btn-primary" style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}>
                Refresh
              </button>
            </header>

            <div className="admin-card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
                  <thead style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border)' }}>
                    <tr>
                      <th style={{ padding: '24px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', color: '#64748b' }}>Name</th>
                      <th style={{ padding: '24px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', color: '#64748b' }}>Message</th>
                      <th style={{ padding: '24px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', color: '#64748b' }}>Status</th>
                      <th style={{ padding: '24px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', color: '#64748b', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loadingTestimonials ? (
                      <tr>
                        <td colSpan="4" style={{ padding: '24px', textAlign: 'center', color: '#94a3b8' }}>Loading...</td>
                      </tr>
                    ) : testimonials.length === 0 ? (
                      <tr>
                        <td colSpan="4" style={{ padding: '24px', textAlign: 'center', color: '#94a3b8' }}>No testimonials found.</td>
                      </tr>
                    ) : testimonials.map((test) => (
                      <tr key={test.id} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '24px', fontWeight: 'bold', color: 'white', whiteSpace: 'nowrap' }}>{test.name}</td>
                        <td style={{ padding: '24px', color: '#94a3b8', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{test.message}</td>
                        <td style={{ padding: '24px' }}>
                          <span style={{ 
                            padding: '4px 12px', borderRadius: '99px', fontSize: '10px', fontWeight: '900',
                            background: test.status === 'approved' ? 'rgba(52,211,153,0.1)' : test.status === 'rejected' ? 'rgba(244,63,94,0.1)' : 'rgba(234,179,8,0.1)',
                            color: test.status === 'approved' ? '#34d399' : test.status === 'rejected' ? '#fb7185' : '#eab308' 
                          }}>
                            {test.status.toUpperCase()}
                          </span>
                        </td>
                        <td style={{ padding: '24px', textAlign: 'right' }}>
                          <div className="flex justify-end gap-2" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                            {test.status !== 'approved' && (
                              <button onClick={() => updateTestimonialStatus(test.id, 'approved')} title="Approve" style={{ padding: '8px', borderRadius: '8px', background: 'rgba(52,211,153,0.1)', border: 'none', color: '#34d399', cursor: 'pointer' }}>
                                <CheckCircle size={16} />
                              </button>
                            )}
                            {test.status !== 'rejected' && (
                              <button onClick={() => updateTestimonialStatus(test.id, 'rejected')} title="Reject" style={{ padding: '8px', borderRadius: '8px', background: 'rgba(234,179,8,0.1)', border: 'none', color: '#eab308', cursor: 'pointer' }}>
                                <XCircle size={16} />
                              </button>
                            )}
                            <button 
                              onClick={() => deleteTestimonial(test.id)} title="Delete"
                              style={{ padding: '8px', borderRadius: '8px', background: 'rgba(244,63,94,0.1)', border: 'none', color: '#fb7185', cursor: 'pointer' }}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div key="settings" style={{ maxWidth: '600px' }}>
            <h1 className="text-4xl font-black mb-12 text-white">Settings</h1>
            <div className="space-y-6">
              
              {/* Social Links Editor */}
              <section className="admin-card">
                <h3 className="font-bold mb-6 text-white flex items-center gap-2">
                  <User size={18} className="text-emerald-400" /> Social Links
                </h3>
                <p className="text-xs text-slate-500 mb-6">These links will automatically appear in your footer.</p>
                <div className="space-y-4">
                  {Object.keys(socialLinks).map((platform) => (
                    <div key={platform}>
                      <label className="text-xs font-bold uppercase text-slate-500 block mb-2">{platform}</label>
                      <input 
                        type="url" 
                        value={socialLinks[platform]}
                        onChange={(e) => setSocialLinks({ ...socialLinks, [platform]: e.target.value })}
                        placeholder={`Enter ${platform} URL`}
                        className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-accent"
                      />
                    </div>
                  ))}
                  <div className="mt-4 text-xs text-emerald-400 font-bold bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20 text-center">
                    Changes are saved automatically.
                  </div>
                </div>
              </section>

              <section className="admin-card">
                <h3 className="font-bold mb-6 text-white flex items-center gap-2">
                  <User size={18} className="text-cyan-400" /> Account Details
                </h3>
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase text-slate-500" style={{ display: 'block', marginBottom: '8px' }}>Email</label>
                  <input 
                    type="email" 
                    defaultValue={adminEmail}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '16px', borderRadius: '12px', color: 'white', marginBottom: '16px' }} 
                  />
                  <button className="btn-primary">Update Profile</button>
                </div>
              </section>

              <section className="admin-card">
                <h3 className="font-bold mb-6 text-white flex items-center gap-2">
                  <Lock size={18} className="text-rose-400" /> Security
                </h3>
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase text-slate-500" style={{ display: 'block', marginBottom: '8px' }}>New Password</label>
                  <input type="password" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '16px', borderRadius: '12px', color: 'white', marginBottom: '16px' }} />
                  <button className="btn-primary" style={{ background: 'transparent', border: '1px solid #fb7185', color: '#fb7185' }}>Change Password</button>
                </div>
              </section>
            </div>
          </div>
        )}
      </main>

      {/* Project Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(2,6,23,0.9)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              style={{ background: '#0f172a', border: '1px solid var(--border)', padding: '32px', borderRadius: '24px', maxWidth: '600px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}
            >
              <div className="flex justify-between items-center mb-8" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h2 className="text-2xl font-black text-white">{editingProject ? 'Edit Project' : 'New Project'}</h2>
                <button onClick={() => setShowModal(false)} style={{ color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer' }}><X size={24} /></button>
              </div>

              <form onSubmit={handleSaveProject}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500" style={{ display: 'block', marginBottom: '8px' }}>Title</label>
                    <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '16px', borderRadius: '12px', color: 'white' }} />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500" style={{ display: 'block', marginBottom: '8px' }}>Tech Stack</label>
                    <input required type="text" value={formData.tech} onChange={e => setFormData({...formData, tech: e.target.value})} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '16px', borderRadius: '12px', color: 'white' }} />
                  </div>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label className="text-xs font-bold uppercase text-slate-500" style={{ display: 'block', marginBottom: '8px' }}>Description</label>
                  <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '16px', borderRadius: '12px', color: 'white', minHeight: '100px', resize: 'none' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500" style={{ display: 'block', marginBottom: '8px' }}>Live Link</label>
                    <input type="url" value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '16px', borderRadius: '12px', color: 'white' }} />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500" style={{ display: 'block', marginBottom: '8px' }}>Image URL</label>
                    <input type="url" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '16px', borderRadius: '12px', color: 'white' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <button type="submit" className="btn-primary" style={{ flex: 1 }}>Save Project</button>
                  <button type="button" onClick={() => setShowModal(false)} className="btn-primary" style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}>Cancel</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
