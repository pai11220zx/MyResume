import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './common/SectionHeading';

export default function GitHubActivity() {
  const { t } = useLanguage();

  return (
    <section id="github" className="py-20 relative z-10 border-t border-[#272A33]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t('github.tag')}
          title={t('github.title')}
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto p-8 card-surface text-center space-y-6"
        >
          <div className="inline-flex p-4 rounded-2xl bg-[#0F1117] border border-[#272A33] text-[#8B5CF6]">
            <GithubIcon className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white text-title-readable">{t('github.explore')}</h3>
            <p className="text-sm text-secondary-readable max-w-xl mx-auto mt-2 font-normal">
              {t('github.description')}
            </p>
          </div>

          <a
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>{t('github.visit')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
