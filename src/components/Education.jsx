import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';
import { educationList } from '../data/education';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

export default function Education() {
  return (
    <section className="py-20 relative z-10 border-t border-[#272A33]/50 bg-[#0F1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Academic Background"
          title="ประวัติการศึกษา (Education)"
          description="เส้นทางการศึกษาและรายวิชาที่เกี่ยวข้อง"
          className="mb-12"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 card-surface space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">{edu.status}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{edu.institution}</h3>
                    <p className="text-sm font-medium text-white/90">{edu.degree} — {edu.faculty}</p>
                    <p className="text-xs text-[#A1A1AA] mt-1">{edu.description}</p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0">
                  <Badge variant="default" className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#8B5CF6]" />
                    <span>{edu.period}</span>
                  </Badge>
                  {edu.gpa && (
                    <Badge variant="accent" className="flex items-center gap-1 font-bold">
                      <Award className="w-3 h-3 text-[#8B5CF6]" />
                      <span>GPA {edu.gpa}</span>
                    </Badge>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-[#272A33]">
                <h4 className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#8B5CF6]" />
                  <span>หลักสูตรและรายวิชาสำคัญ (Relevant Coursework)</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <Badge key={course} size="md">
                      {course}
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
