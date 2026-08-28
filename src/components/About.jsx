import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Compass, Sparkles, Languages, Quote, Briefcase } from 'lucide-react';
import { profileData } from '../data/profile';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

const iconMap = {
  Education: GraduationCap,
  "Target Internship": Target,
  Motto: Quote
};

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-[#272A33]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="About Me"
          title="ประวัติและเป้าหมายการทำงาน (About & Objective)"
          description="ทำความรู้จักกับตัวตน ความสนใจ และเส้นทางการพัฒนาตนเอง"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio & Details */}
          <div className="lg:col-span-7 space-y-6 text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#171A21] border border-[#272A33] space-y-4">
              <div className="flex items-center gap-3 text-white">
                <span className="text-xl font-bold">{profileData.thaiName} ({profileData.name})</span>
                <Badge variant="accent">ชั้นปีที่ 4 PBRU</Badge>
              </div>
              <p className="text-sm sm:text-base text-[#A1A1AA]">
                นักศึกษาสาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏเพชรบุรี (GPA 2.80) มีความมุ่งมั่นในการเรียนรู้สิ่งใหม่ๆ และแก้ปัญหาผ่านการลงมือพัฒนาซอฟต์แวร์จริง
              </p>
            </div>

            {/* Career Objective */}
            <div className="p-6 rounded-2xl bg-[#171A21] border border-[#272A33] space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Briefcase className="w-5 h-5 text-[#8B5CF6]" />
                <span>ความสนใจด้านงานและเป้าหมายการฝึกงาน (Career Objective)</span>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                "{profileData.careerObjective}"
              </p>
            </div>

            {/* Language Skills */}
            <div className="p-6 rounded-2xl bg-[#171A21] border border-[#272A33] space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Languages className="w-5 h-5 text-[#8B5CF6]" />
                <span>ทักษะด้านภาษา (Language Proficiency)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {profileData.languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-3 rounded-xl bg-[#0F1117] border border-[#272A33] flex flex-col gap-1"
                  >
                    <div className="text-xs text-[#8B5CF6] font-semibold">{lang.tag}</div>
                    <div className="text-sm font-bold text-white">{lang.language}</div>
                    <div className="text-xs text-[#A1A1AA]">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {profileData.highlights.map((item, index) => {
              const IconComponent = iconMap[item.label] || Sparkles;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 card-surface card-surface-hover flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] uppercase tracking-wider block font-semibold">{item.label}</span>
                    <h3 className="text-lg font-bold text-white">{item.value}</h3>
                    <span className="text-xs text-[#A1A1AA]">{item.subValue}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
