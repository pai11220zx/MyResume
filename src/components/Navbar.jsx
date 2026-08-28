import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Code } from 'lucide-react';
import { profileData } from '../data/profile';

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
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F1117]/85 backdrop-blur-md border-b border-[#272A33] py-3'
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
          <div className="w-10 h-10 rounded-xl bg-[#171A21] border border-[#272A33] flex items-center justify-center text-[#8B5CF6] group-hover:border-[#8B5CF6]/50 transition-colors">
            <Code className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#8B5CF6] transition-colors">
            My<span className="text-[#8B5CF6]">Resume</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-[#171A21]/60 border border-[#272A33] rounded-full px-4 py-1.5 backdrop-blur-md"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${
                  isActive
                    ? 'text-white bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 shadow-sm shadow-[#8B5CF6]/20'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-medium transition-colors shadow-lg shadow-[#8B5CF6]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-[#171A21] border border-[#272A33] text-white hover:text-[#8B5CF6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#0F1117]/95 backdrop-blur-xl border-b border-[#272A33] px-4 pt-3 pb-6 space-y-2 overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-[#171A21] text-[#8B5CF6]'
                      : 'text-[#A1A1AA] hover:text-white hover:bg-[#171A21]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-3 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
