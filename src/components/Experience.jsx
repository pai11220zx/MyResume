import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { experienceData } from '../data/experience';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

export default function Experience() {
  const { language, t } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'object') {
      return obj[language] || obj.th || '';
    }
    return obj;
  };

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t('experience.tag')}
          title={t('experience.title')}
          description={t('experience.description')}
        />

        {/* Timeline Items */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-[#272A33] space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={`${getLocalized(item.role)}-${getLocalized(item.period)}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0F1117] border-2 border-[#8B5CF6] group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-[#0F1117]/40 border border-[#272A33]/60 group-hover:border-[#8B5CF6]/40 transition-colors space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="accent">
                    <Calendar className="w-3.5 h-3.5" />
                    {getLocalized(item.period)}
                  </Badge>
                  <span className="text-xs text-muted-readable font-medium">{getLocalized(item.organization)}</span>
                </div>

                <h3 className="text-xl font-bold text-white text-title-readable">{getLocalized(item.role)}</h3>
                <p className="text-sm text-secondary-readable leading-relaxed">{getLocalized(item.description)}</p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {(item.skills || []).map(skill => (
                    <Badge key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
