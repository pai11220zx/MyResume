import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { activitiesData } from '../data/activities';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

export default function Activities() {
  const { t, getLocalized } = useLanguage();

  return (
    <section id="activities" className="py-20 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t('activities.tag')}
          title={t('activities.title')}
          description={t('activities.description')}
          className="mb-12"
        />

        <div className={`mx-auto ${activitiesData.length === 1 ? 'max-w-2xl' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl'}`}>
          {activitiesData.map((act, index) => (
            <motion.div
              key={`${getLocalized(act.title)}-${act.date}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0F1117]/40 border border-[#272A33]/60 group-hover:border-[#8B5CF6]/40 transition-colors flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="accent">{act.date}</Badge>
                  <span className="text-xs text-muted-readable font-semibold">{getLocalized(act.organization)}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 group-hover:text-[#8B5CF6] transition-colors text-title-readable">
                  <Award className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                  <span>{getLocalized(act.title)}</span>
                </h3>
                <p className="text-xs sm:text-sm text-secondary-readable font-normal leading-relaxed">
                  {getLocalized(act.description)}
                </p>
              </div>

              {act.image && (
                <div className="mt-2 overflow-hidden rounded-xl border border-[#272A33] group-hover:border-[#8B5CF6]/40 transition-colors bg-[#07090E]/60">
                  <a
                    href={act.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden group/img cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-xl"
                    title={getLocalized(act.title)}
                  >
                    <img
                      src={act.image}
                      alt={getLocalized(act.title)}
                      loading="lazy"
                      decoding="async"
                      className={`w-full ${activitiesData.length === 1 ? 'h-64 sm:h-80' : 'h-48 sm:h-52'} object-cover object-top group-hover/img:scale-105 transition-transform duration-300`}
                    />
                    <div className="absolute inset-0 bg-[#0F1117]/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-[#0F1117]/95 text-xs font-semibold text-white border border-[#8B5CF6]/40 flex items-center gap-1.5 shadow-lg">
                        <ExternalLink className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        {t('activities.viewImage')}
                      </span>
                    </div>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
