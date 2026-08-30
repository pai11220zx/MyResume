import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { experienceData } from '../data/experience';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-[#272A33]/50 bg-[#0F1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Timeline"
          title="Experience & Journey"
          description="เส้นทางการเรียนรู้และประสบการณ์ในการพัฒนาซอฟต์แวร์"
        />

        {/* Timeline Items */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-[#272A33] space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={`${item.role}-${item.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#171A21] border-2 border-[#8B5CF6] group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-[#171A21] border border-[#272A33] group-hover:border-[#8B5CF6]/40 transition-colors space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="accent">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </Badge>
                  <span className="text-xs text-muted-readable font-medium">{item.organization}</span>
                </div>

                <h3 className="text-xl font-bold text-white text-title-readable">{item.role}</h3>
                <p className="text-sm text-secondary-readable leading-relaxed">{item.description}</p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map(skill => (
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
