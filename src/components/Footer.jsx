import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, getLocalized } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#272A33]/60 bg-[#05060A]/80 backdrop-blur-md text-[#E2E8F0] text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <span className="font-bold text-white text-base text-title-readable">
            My<span className="text-[#8B5CF6]">Resume</span>
          </span>
          <p className="text-xs text-muted-readable mt-1 font-medium">© {new Date().getFullYear()} {getLocalized(profileData.name)}. {t('footer.rights')}</p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-xs font-semibold text-muted-readable">
          <a href="#home" className="hover:text-[#8B5CF6] transition-colors">{t('nav.home')}</a>
          <a href="#about" className="hover:text-[#8B5CF6] transition-colors">{t('nav.about')}</a>
          <a href="#projects" className="hover:text-[#8B5CF6] transition-colors">{t('nav.projects')}</a>
          <a href="#experience" className="hover:text-[#8B5CF6] transition-colors">{t('nav.experience')}</a>
          <a href="#education" className="hover:text-[#8B5CF6] transition-colors">{t('nav.education')}</a>
          <a href="#contact" className="hover:text-[#8B5CF6] transition-colors">{t('nav.contact')}</a>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-[#171A21] border border-[#272A33] text-[#E2E8F0] hover:text-white hover:border-[#8B5CF6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] shadow-sm"
          aria-label={t('footer.backToTop')}
          title={t('footer.backToTop')}
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
