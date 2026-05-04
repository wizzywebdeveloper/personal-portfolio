import React from 'react';

const GithubIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
const FacebookIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const LinkedinIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const InstagramIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const TwitterIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const WhatsappIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.627 4.64 1.813 6.653L2.667 29.333l6.88-1.773A13.267 13.267 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 2.4c5.88 0 10.663 4.787 10.663 10.667S21.884 26.4 16.004 26.4a10.64 10.64 0 0 1-5.44-1.493l-.387-.24-4.08 1.053 1.08-3.96-.267-.4A10.627 10.627 0 0 1 5.337 16c0-5.88 4.787-10.667 10.667-10.667zm-3.04 5.36c-.24 0-.627.093-.96.453-.32.373-1.227 1.2-1.227 2.92 0 1.72 1.254 3.387 1.427 3.627.187.24 2.44 3.866 5.987 5.266 2.96 1.174 3.56.947 4.2.88.64-.067 2.054-.84 2.347-1.654.293-.8.293-1.493.2-1.64-.08-.133-.307-.213-.64-.373-.32-.16-1.907-.947-2.2-1.054-.307-.107-.534-.16-.747.16-.213.32-.84 1.054-1.027 1.267-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.587-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.84-1-2.507-.24-.587-.507-.533-.72-.547-.2-.013-.4-.013-.613-.013z"/>
  </svg>
);

const IconMap = {
  github: GithubIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  whatsapp: WhatsappIcon
};

const Footer = () => {
  const defaults = {
    github: 'https://github.com/wizzywebdeveloper',
    facebook: '',
    linkedin: 'https://www.linkedin.com/in/wisdom-godwin-edet-206294324',
    instagram: '',
    twitter: 'https://x.com/wizzywebdev',
    whatsapp: 'https://wa.me/2347048309498'
  };

  const [socials, setSocials] = React.useState(defaults);

  React.useEffect(() => {
    const saved = localStorage.getItem('wisdom_social_links');
    if (saved) {
      // Merge saved data with defaults so new keys (like github) always appear
      setSocials({ ...defaults, ...JSON.parse(saved) });
    }
  }, []);

  return (
    <footer className="border-t border-white/5 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 text-center md:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-slate-500 max-w-[280px] leading-relaxed">
              Full Stack Engineer specializing in high-performance web applications and scalable backends.
            </p>
          </div>

          {/* Socials + Copyright */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-3 flex-wrap justify-center">
              {Object.entries(socials)
                .filter(([_, link]) => link && typeof link === 'string' && link.trim() !== '')
                .map(([platform, link], i) => {
                  const Icon = IconMap[platform];
                  return (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:bg-accent hover:border-accent hover:text-background transition-all"
                      aria-label={platform}
                    >
                      <Icon size={18} />
                    </a>
                  );
              })}
            </div>
            <p className="text-[13px] text-slate-600">
              © {new Date().getFullYear()} Wisdom Godwin Edet. All rights reserved.
            </p>
          </div>

          {/* Status */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Status</p>
            <div className="flex items-center gap-2 text-[#34d399]">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[#34d399]/60 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-[#34d399] block" />
              </span>
              <p className="text-[13px] font-bold">System Operational</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
