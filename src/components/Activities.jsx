import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { activitiesData } from '../data/activities';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

export default function Activities() {
  return (
    <section className="py-20 relative z-10 border-t border-[#272A33]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Achievements"
          title="Activities & Workshops"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {activitiesData.map((act, index) => (
            <motion.div
              key={`${act.title}-${act.date}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#171A21] border border-[#272A33] hover:border-[#8B5CF6]/40 transition-colors space-y-2"
            >
              <div className="flex items-center justify-between">
                <Badge variant="accent">{act.date}</Badge>
                <span className="text-xs text-[#A1A1AA]">{act.organization}</span>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-[#8B5CF6]" />
                {act.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{act.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
