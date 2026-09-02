import React from 'react';
import { Languages, Quote, Briefcase, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

export default function About() {
  const { t, getLocalized } = useLanguage();

  return (
    <section id="about" className="py-24 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t('about.tag')}
          title={t('about.title')}
          description={t('about.description')}
        />

        {/* Deep Dive: Bio, Career Objective & Language Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Bio & Career Objective */}
          <div className="lg:col-span-7 space-y-8 text-secondary-readable leading-relaxed">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-white">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-title-readable">
                  {getLocalized(profileData.name)}
                </h3>
                <Badge variant="default" className="text-xs">
                  {t('about.year4')}
                </Badge>
              </div>
              <p className="text-sm sm:text-base text-secondary-readable leading-relaxed font-normal">
                {t('about.bioFull')}
              </p>
            </div>

            {/* Editorial Career Objective (Frameless Minimalist) */}
            <div className="pt-6 border-t border-[#272A33]/40 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-base text-title-readable">
                <Briefcase className="w-4 h-4 text-[#8B5CF6]" />
                <span>{t('about.careerObjectiveTitle')}</span>
              </div>
              <p className="text-sm sm:text-base text-[#F8FAFC] leading-relaxed font-medium text-secondary-readable italic">
                "{getLocalized(profileData.careerObjective)}"
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-secondary-readable font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{t('about.highlight1')}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-secondary-readable font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{t('about.highlight2')}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-secondary-readable font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{t('about.highlight3')}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Language Skills & Guiding Principle */}
          <div className="lg:col-span-5 space-y-8">
            {/* Language Skills (Editorial Minimalist List) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-base pb-2 border-b border-[#272A33]/40 text-title-readable">
                <Languages className="w-4 h-4 text-[#8B5CF6]" />
                <span>{t('about.languagesTitle')}</span>
              </div>
              <div className="space-y-3 pt-1">
                {profileData.languages.map((lang, index) => (
                  <div
                    key={lang.tag || index}
                    className="flex items-center justify-between py-2 border-b border-[#272A33]/20"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider">{lang.tag}</span>
                      <span className="text-sm font-bold text-white text-secondary-readable">
                        {getLocalized(lang.language)}
                      </span>
                    </div>
                    <span className="text-xs text-muted-readable font-medium">
                      {getLocalized(lang.level)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values / Motto Editorial Block */}
            <div className="pt-4 border-t border-[#272A33]/40 flex items-start gap-3.5">
              <Quote className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-[#8B5CF6] uppercase tracking-wider block font-bold mb-0.5">
                  {t('about.mottoLabel')}
                </span>
                <h4 className="text-base font-bold text-white text-title-readable">"Never Stop Learning"</h4>
                <p className="text-xs text-muted-readable font-medium mt-1 leading-relaxed">
                  {t('about.mottoSub')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
