import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { educationData } from '../data/education';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

export default function Education() {
  return (
    <section className="py-20 relative z-10 border-t border-[#272A33]/50 bg-[#0F1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Academic Background"
          title="Education"
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto p-8 card-surface space-y-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">{educationData.status} • {educationData.graduationYear}</span>
              <h3 className="text-xl font-bold text-white mt-1">{educationData.degree}</h3>
              <p className="text-sm text-[#A1A1AA]">{educationData.faculty} — {educationData.university}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#272A33]">
            <h4 className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#8B5CF6]" />
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {educationData.coursework.map(course => (
                <Badge key={course} size="md">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
