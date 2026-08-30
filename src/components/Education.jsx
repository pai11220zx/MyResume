import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';
import { educationList } from '../data/education';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';
import IconBox from './common/IconBox';

export default function Education() {
  return (
    <section id="education" className="py-20 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Academic Background"
          title="ประวัติการศึกษา (Education)"
          description="เส้นทางการศึกษาและรายวิชาที่เกี่ยวข้อง"
          className="mb-12"
        />

        <div className="max-w-4xl mx-auto space-y-10">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <IconBox icon={GraduationCap} size="md" />
                  <div>
                    <span className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider">{edu.status}</span>
                    <h3 className="text-xl font-bold text-white mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">{edu.institution}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#E2E8F0] font-normal leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                      {edu.description}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0">
                  <Badge variant="default" className="flex items-center gap-1 shadow-sm">
                    <Calendar className="w-3 h-3 text-[#8B5CF6]" />
                    <span>{edu.period}</span>
                  </Badge>
                  {edu.gpa && (
                    <Badge variant="default" className="flex items-center gap-1 font-bold shadow-sm">
                      <Award className="w-3 h-3 text-[#8B5CF6]" />
                      <span>GPA {edu.gpa}</span>
                    </Badge>
                  )}
                </div>
              </div>

              <div className="pt-2 pl-15 sm:pl-15">
                <h4 className="text-xs font-bold text-[#CBD5E1] uppercase tracking-wider mb-2.5 flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
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
