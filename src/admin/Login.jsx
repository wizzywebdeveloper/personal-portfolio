import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple mock auth with user specified credentials
    if (email === 'wisdomge.dev@gmail.com' && password === 'Fcmb213456789@') {
      localStorage.setItem('wisdom_auth', 'true');
      localStorage.setItem('wisdom_email', email);
      navigate('/admin/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#020617]">
      <div className="glass p-12 max-w-md w-full">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-black">Admin Access</h1>
          <p className="text-slate-500 text-sm">Enter your secure credentials</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="wisdomge.dev@gmail.com" 
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-cyan-500 transition-colors" 
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Password</label>
              <button type="button" className="text-[10px] font-bold text-cyan-400 hover:underline">Forgot Password?</button>
            </div>
            <div className="relative">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-12 focus:outline-none focus:border-cyan-500 transition-colors" 
              />
              <Lock className="absolute left-4 top-4 text-slate-500" size={20} />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full justify-center py-4">
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
