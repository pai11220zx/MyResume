import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { activitiesData } from '../data/activities';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

export default function Activities() {
  return (
    <section id="activities" className="py-20 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Achievements"
          title="กิจกรรมและประกาศนียบัตร"
          description="กิจกรรมทางวิชาการ การแข่งขัน และการอบรมเชิงปฏิบัติการ"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activitiesData.map((act, index) => (
            <motion.div
              key={`${act.title}-${act.date}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <Badge variant="accent">{act.date}</Badge>
                <span className="text-xs text-muted-readable font-semibold">{act.organization}</span>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 group-hover:text-[#8B5CF6] transition-colors text-title-readable">
                <Award className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                <span>{act.title}</span>
              </h3>
              <div className="pl-6">
                <p className="text-sm text-secondary-readable font-normal leading-relaxed">
                  {act.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
