import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { educationList } from '../data/education';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';
import IconBox from './common/IconBox';

export default function Education() {
  const { language, t } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'object') {
      return obj[language] || obj.th || '';
    }
    return obj;
  };

  return (
    <section id="education" className="py-20 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t('education.tag')}
          title={t('education.title')}
          description={t('education.description')}
          className="mb-12"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={getLocalized(edu.institution) || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0F1117]/40 border border-[#272A33]/60 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <IconBox icon={GraduationCap} size="md" />
                  <div>
                    <span className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider">{getLocalized(edu.status)}</span>
                    <h3 className="text-xl font-bold text-white mt-0.5 text-title-readable">{getLocalized(edu.institution)}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#8B5CF6] mt-0.5">{getLocalized(edu.degree)} - {getLocalized(edu.faculty)}</p>
                    <p className="mt-2 text-xs sm:text-sm text-secondary-readable font-normal leading-relaxed">
                      {getLocalized(edu.description)}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0">
                  <Badge variant="default" className="flex items-center gap-1 shadow-sm">
                    <Calendar className="w-3 h-3 text-[#8B5CF6]" />
                    <span>{getLocalized(edu.period)}</span>
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
