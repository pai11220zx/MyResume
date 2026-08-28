import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Sparkles, Languages, Quote, Briefcase } from 'lucide-react';
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
    <section id="about" className="py-24 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="About Me"
          title="ประวัติและเป้าหมายการทำงาน (About & Objective)"
          description="ทำความรู้จักกับตัวตน ความสนใจ และเส้นทางการพัฒนาตนเอง"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Bio & Details (Frameless Floating) */}
          <div className="lg:col-span-7 space-y-8 text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-white">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{profileData.thaiName} ({profileData.name})</h3>
                <Badge variant="accent">ชั้นปีที่ 4 PBRU</Badge>
              </div>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                นักศึกษาสาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏเพชรบุรี (GPA 2.80) มีความมุ่งมั่นในการเรียนรู้สิ่งใหม่ๆ และแก้ปัญหาผ่านการลงมือพัฒนาซอฟต์แวร์จริง
              </p>
            </div>

            {/* Career Objective */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Briefcase className="w-5 h-5 text-[#8B5CF6]" />
                <span>ความสนใจด้านงานและเป้าหมายการฝึกงาน (Career Objective)</span>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed pl-7">
                "{profileData.careerObjective}"
              </p>
            </div>

            {/* Language Skills */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Languages className="w-5 h-5 text-[#8B5CF6]" />
                <span>ทักษะด้านภาษา (Language Proficiency)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 pl-7">
                {profileData.languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex flex-col gap-0.5"
                  >
                    <span className="text-xs font-semibold text-[#8B5CF6] uppercase">{lang.tag}</span>
                    <span className="text-sm font-bold text-white">{lang.language}</span>
                    <span className="text-xs text-[#A1A1AA]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights List (Frameless Floating) */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            {profileData.highlights.map((item, index) => {
              const IconComponent = iconMap[item.label] || Sparkles;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8B5CF6] uppercase tracking-wider block font-semibold">{item.label}</span>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#8B5CF6] transition-colors">{item.value}</h4>
                    <p className="text-xs text-[#A1A1AA]">{item.subValue}</p>
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
