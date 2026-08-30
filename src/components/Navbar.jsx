import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Code } from 'lucide-react';
import { profileData } from '../data/profile';
import GooeyNav from './common/GooeyNav';
import IconBox from './common/IconBox';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          const sections = navItems.map((item) => item.href.substring(1));
          const scrollPos = window.scrollY + 200;

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090E]/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          aria-label="Back to top"
        >
          <IconBox icon={Code} size="sm" />
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#8B5CF6] transition-colors">
            My<span className="text-[#8B5CF6]">Resume</span>
          </span>
        </a>

        {/* Desktop Gooey Navigation */}
        <div className="hidden md:flex items-center">
          <GooeyNav
            items={navItems}
            particleCount={6}
            particleDistances={[50, 10]}
            animationTime={500}
            colors={[1, 2, 3, 1, 4]}
          />
        </div>

        {/* Resume CTA & Social in Navbar (Prominent Ghost Button) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 py-2.5 px-5 rounded-xl text-sm font-bold text-white bg-transparent hover:bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          >
            <FileText className="w-4 h-4 text-[#8B5CF6] group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#171A21]/80 border border-[#272A33] text-white hover:text-[#8B5CF6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0F1117]/95 border-b border-[#272A33] backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-[#8B5CF6]/15 text-[#8B5CF6] font-bold'
                      : 'text-[#E2E8F0] hover:bg-[#171A21] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-3 text-sm font-semibold"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
